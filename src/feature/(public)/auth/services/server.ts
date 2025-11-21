'use server'
import { authSchema } from '../schema/schemaAuth'
import { URL_API_AUTH } from '../constants/enpoints'
import { cookies } from 'next/headers'
import { decodeToken, sesionActiva } from '../utils/inicioSesion'
import { Usuario } from '@/shared/interface/Usuario'
import { redirect, RedirectType } from 'next/navigation'
import { RUTAS_PRIVADAS } from '@/shared/constants/Navbar'

export async function iniciarSessionConValidacion(
    prevState: any,
    formData: FormData,
): Promise<{
    success: boolean
    errors?: {
        fieldErrors?: Record<string, string[]>
        formErrors?: string[]
    } | null
}> {
    const data = {
        username: formData.get('username') as string,
        password: formData.get('password') as string,
    }

    const validatedData = authSchema.safeParse(data)

    if (!validatedData.success) {
        return {
            success: false,
            errors: {
                fieldErrors: validatedData.error.flatten().fieldErrors,
                formErrors: validatedData.error.flatten().formErrors,
            },
        }
    }

    const dataResponse = await fetch(URL_API_AUTH, {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            username: validatedData.data.username,
            password: validatedData.data.password,
        }).toString(),
    })

    if (!dataResponse.ok) {
        const errorResponse = await dataResponse.json()
        return {
            success: false,
            errors: {
                fieldErrors: {
                    backend: [
                        (errorResponse as Error).message ||
                            'Error al iniciar sesión',
                    ],
                },
            },
        }
    }

    const { access_token, refresh_token } = await dataResponse.json()

    const cookie = await cookies()
    cookie.set({
        name: 'token',
        value: access_token,
        httpOnly: true,
    })
    cookie.set({
        name: 'refreshToken',
        value: refresh_token,
        httpOnly: true,
    })
    const usuarioDecode = decodeToken(access_token)

    const usuario = await sesionActiva(usuarioDecode)
    if (usuario) {
        redirect(RUTAS_PRIVADAS.DASHBOARD, RedirectType.push)
    }
    
    // This should never be reached as redirect throws, but TypeScript needs a return
    return {
        success: true,
        errors: null,
    }
}

export const cerrarSesion = async () => {
    //al tener httpOnly no se pueden borrar desde el cliente
    // las cookies a menos que se haga desde el servidor
    const cookie = await cookies()
    cookie.delete('token')
    cookie.delete('refreshToken')
    cookie.delete('usuario')
}

export const obtenerUsuario = async () => {
    const cookie = await cookies()
    const usuario = cookie.get('usuario')?.value
    return usuario ? JSON.parse(usuario) : null
}
