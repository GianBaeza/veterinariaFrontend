'use server'
import { z } from 'zod'
import { authSchema } from '../schema/schemaAuth'
import { URL_API_AUTH } from '../constants/enpoints'
import { fetchGlobal } from './apiFetch'

export async function iniciarSessionConValidacion(
    prevState: any,
    formData: FormData,
): Promise<{
    success: boolean
    errors?: Record<string, string> | null
}> {
    try {
        const data = {
            usuario: formData.get('username') as string,
            password: formData.get('password') as string,
        }

        console.log('DATA DEL FORMULARIO', data)

        const validatedData = authSchema.parse(data)

        const dataResponse = await fetch(URL_API_AUTH, {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                username: validatedData.usuario,
                password: validatedData.password,
            }).toString(),
        })

        if (dataResponse.ok) {
            return { success: true, errors: null }
        } else {
            return {
                success: false,
                errors: { general: 'Error al iniciar sesión' },
            }
        }
    } catch (err) {
        console.log('ERROR EN LA FUNCION DE LOGIN', err)
        if (err instanceof z.ZodError) {
            // Mapear errores de Zod
            const errorMap: Record<string, string> = {}
            err.issues.forEach((issue) => {
                if (issue.path[0]) {
                    errorMap[issue.path[0] as string] = issue.message
                }
            })
            return { success: false, errors: errorMap }
        }
        return {
            success: false,
            errors: { general: 'Error al iniciar sesión' },
        }
    }
}
