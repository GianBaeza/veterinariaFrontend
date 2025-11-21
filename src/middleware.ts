import {
    RUTAS,
    RUTAS_PRIVADAS,
    RUTAS_PRIVADAS_ARRAY,
    RUTAS_PUBLICAS,
    RUTAS_PUBLICAS_ARRAY,
    RUTAS_ROLL,
} from '@/shared/constants/Navbar'
import { NextResponse, NextRequest } from 'next/server'
import {
    decodeToken,
    esRolValido,
    esTokenExpirado,
} from '@/feature/(public)/auth/utils/inicioSesion'
import { cookies } from 'next/headers'

export async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname
    const cookiesStore = await cookies()
    const token = (await cookiesStore.get('token')?.value) || ''

    // Log para rutas que sí procesamos
    console.log('MIDDLEWARE EJECUTADO - PATH:', pathname)
    console.log('Token obtenido:', token)

    // Verificar si es ruta pública PRIMERO
    const esRutaPublica = RUTAS_PUBLICAS_ARRAY.some((ruta) => pathname === ruta)

    if (esRutaPublica) {
        if (token) {
            return NextResponse.redirect(new URL(RUTAS.DASHBOARD, request.url))
        }
        console.log('Ruta pública, permitiendo acceso:', pathname)
        return NextResponse.next()
    }

    if (!token || token.length <= 0) {
        console.log('No se encontró token. Redirigiendo a iniciar sesión.')
        return NextResponse.redirect(
            new URL(RUTAS_PUBLICAS.INICIO, request.url),
        )
    }

    const usuario = decodeToken(token)
    const rolUsuario = usuario?.rol.toLocaleUpperCase() || 'N/A'
    const fechaCreacion = usuario?.iat
    const tiempoExp = usuario?.exp

    console.log(usuario, '--- usuario decodificado ---')

    if (!usuario) {
        console.log('Token inválido. Redirigiendo a iniciar sesión.')
        return NextResponse.redirect(
            new URL(RUTAS_PUBLICAS.INICIO, request.url),
        )
    }

    if (!esRolValido(rolUsuario)) {
        console.log('Rol inválido. Redirigiendo a iniciar sesión.')
        return NextResponse.redirect(
            new URL(RUTAS_PUBLICAS.INICIO, request.url),
        )
    }

    if (esTokenExpirado(usuario.exp)) {
        console.log('Token expirado. Redirigiendo a iniciar sesión.')
        return NextResponse.redirect(
            new URL(RUTAS_PUBLICAS.INICIO, request.url),
        )
    }

    // Verificar permisos de rol para rutas privadas
    const rutasPermitidas = RUTAS_ROLL[rolUsuario]
    console.log('Rutas permitidas para el rol:', rutasPermitidas)
    const existeRuta =
        rutasPermitidas &&
        rutasPermitidas.some((ruta) => pathname.includes(ruta))

    if (!existeRuta) {
        console.log(
            'Acceso no autorizado para el rol. Redirigiendo a dashboard.',
        )
        return NextResponse.redirect(
            new URL(RUTAS_PRIVADAS.DASHBOARD, request.url),
        )
    }

    console.log('Acceso permitido:', pathname)
    return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard/:path*'],
}
