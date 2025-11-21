export const RUTAS_PUBLICAS = {
    INICIO: '/',
    INICIAR_SESION: '/iniciar-sesion',
    CREAR_CUENTA: '/crear-cuenta',
    MAS_INFORMACION: '/mas-informacion',
    CONTACTO: '/contacto',
} as const

export const RUTAS_PRIVADAS = {
    DASHBOARD: '/dashboard',
    TURNOS: '/dashboard/turnos',
    ATENCIONES: '/dashboard/atenciones',
    PRESTACIONES: '/dashboard/prestaciones',
    ANIMALES: '/dashboard/animales',
    VENTAS: '/dashboard/ventas',
    USUARIOS: '/dashboard/usuarios',
    RESPONSABLES: '/dashboard/responsables',
    CONFIGURACION: '/dashboard/configuracion',
    CATEGORIAS: '/dashboard/configuracion/categorias',
    HORARIO_VETERINARIA: '/dashboard/configuracion/horario-veterinaria',
    JORNADAS: '/dashboard/configuracion/jornadas',
    MI_HORARIO: '/dashboard/configuracion/mi-horario',
} as const

export const RUTAS = {
    ...RUTAS_PRIVADAS,
    INICIO_PUBLICO: RUTAS_PUBLICAS.INICIO,
    CREAR_CUENTA: RUTAS_PUBLICAS.CREAR_CUENTA,
    MAS_INFORMACION: RUTAS_PUBLICAS.MAS_INFORMACION,
    CONTACTO: RUTAS_PUBLICAS.CONTACTO,
} as const

export const MENU_PUBLICO = [
    { label: 'Inicio', href: RUTAS_PUBLICAS.INICIO },
    { label: 'Más Información', href: RUTAS_PUBLICAS.MAS_INFORMACION },
    { label: 'Contacto', href: RUTAS_PUBLICAS.CONTACTO },
    { label: 'Iniciar Sesión', href: '' },
    { label: 'Crear Cuenta', href: '' },
] as const

export const MENU_PRIVADO = [
    { label: 'Inicio', href: RUTAS_PRIVADAS.DASHBOARD },
    { label: 'Turnos', href: RUTAS_PRIVADAS.TURNOS },
    { label: 'Atenciones', href: RUTAS_PRIVADAS.ATENCIONES },
    { label: 'Prestaciones', href: RUTAS_PRIVADAS.PRESTACIONES },
    { label: 'Animales', href: RUTAS_PRIVADAS.ANIMALES },
    { label: 'Ventas', href: RUTAS_PRIVADAS.VENTAS },
    { label: 'Usuarios', href: RUTAS_PRIVADAS.USUARIOS },
    { label: 'Responsables', href: RUTAS_PRIVADAS.RESPONSABLES },
    {
        label: 'Configuración',
        href: RUTAS_PRIVADAS.CONFIGURACION,
        submenu: [
            { label: 'Categorías', href: RUTAS_PRIVADAS.CATEGORIAS },
            {
                label: 'Horario Veterinaria',
                href: RUTAS_PRIVADAS.HORARIO_VETERINARIA,
            },
            { label: 'Jornadas', href: RUTAS_PRIVADAS.JORNADAS },
            { label: 'Mi Horario', href: RUTAS_PRIVADAS.MI_HORARIO },
        ],
    },
] as const

// Arrays para el matcher del middleware
export const RUTAS_PUBLICAS_ARRAY = [
    '/',
    '/crear-cuenta',
    '/mas-informacion',
    '/contacto',
] as const

// Para el matcher del middleware, Next.js 13+ requiere sintaxis específica
// Usa '/(.*)*' para capturar todas las subrutas o paths específicos
export const RUTAS_PRIVADAS_ARRAY = ['/dashboard/:path*']

export const RUTAS_ROLL = {
    ADMIN: [
        RUTAS_PRIVADAS.DASHBOARD,
        RUTAS_PRIVADAS.USUARIOS,
        RUTAS_PRIVADAS.CONFIGURACION,
    ],
    EMPLEADO: [
        RUTAS_PRIVADAS.DASHBOARD,
        RUTAS_PRIVADAS.TURNOS,
        RUTAS_PRIVADAS.ATENCIONES,
        RUTAS_PRIVADAS.PRESTACIONES,
        RUTAS_PRIVADAS.ANIMALES,
    ],
    CLIENTE: [
        RUTAS_PUBLICAS.INICIO,
        RUTAS_PUBLICAS.MAS_INFORMACION,
        RUTAS_PUBLICAS.CONTACTO,
    ],
}
