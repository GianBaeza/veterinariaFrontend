import { RUTAS_ROLL } from '@/shared/constants/Navbar'
import { Usuario } from '@/shared/interface/Usuario'
import * as jose from 'jose'
import { cookies } from 'next/headers'

export const decodeToken = (token: string): Usuario | null => {
    try {
        const decoded = jose.decodeJwt(token)
        return {
            sub: decoded.sub as string,
            usuario: decoded.usuario as string,
            rol: decoded.rol as Usuario['rol'],
            permisos: decoded.permisos as Usuario['permisos'],
            tipo: decoded.tipo as Usuario['tipo'],
            exp: decoded.exp as number,
            iat: decoded.iat as number,
        }
    } catch (error) {
        console.error('Error decoding token:', error)
        return null
    }
}

export const sesionActiva = async (usuario: Usuario | null) => {
    'use server'

    if (!usuario) return null
    const cookiesSet = await cookies()
    // En desarrollo no forzar `secure: true` para que la cookie pueda
    // establecerse sobre HTTP local. En producción mantener `secure`.
    await cookiesSet.set('usuario', JSON.stringify(usuario), {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        sameSite: 'lax',
    })
    return usuario
}

export function esRolValido(rol: string): rol is keyof typeof RUTAS_ROLL {
    return rol in RUTAS_ROLL
}

export function esTokenExpirado(exp: number): boolean {
    console.log(
        'EXPIRACION TOKEN:',
        exp,
        'FECHA ACTUAL:',
        Date.now(),
        exp * 1000 < Date.now(),
    )
    return exp * 1000 < Date.now()
}
