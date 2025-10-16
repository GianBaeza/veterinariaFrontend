export const ROUTERS_PATH = {
    INICIO: '/inicio',
    TURNOS: '/turnos',
    ATENCIONES: '/atenciones',
    PRESTACIONES: '/prestaciones',
    ANIMALES: '/animales',
    VENTAS: '/ventas',
    USUARIOS: '/usuarios',
    RESPONSABLES: '/responsables',
    CONFIGURACION: '/configuracion',
    CATEGORIAS: '/configuracion/categorias',
    HORARIO_VETERINARIA: '/configuracion/horario-veterinaria',
    JORNADAS: '/configuracion/jornadas',
    MI_HORARIO: '/configuracion/mi-horario',
}

export const menuItems = [
    { label: 'Inicio', href: ROUTERS_PATH.INICIO },
    { label: 'Turnos', href: ROUTERS_PATH.TURNOS },
    { label: 'Atenciones', href: ROUTERS_PATH.ATENCIONES },
    { label: 'Prestaciones', href: ROUTERS_PATH.PRESTACIONES },
    { label: 'Animales', href: ROUTERS_PATH.ANIMALES },
    { label: 'Ventas', href: ROUTERS_PATH.VENTAS },
    { label: 'Usuarios', href: ROUTERS_PATH.USUARIOS },
    { label: 'Responsables', href: ROUTERS_PATH.RESPONSABLES },
    {
        label: 'Configuración',
        href: ROUTERS_PATH.CONFIGURACION,
        submenu: [
            { label: 'Categorías', href: ROUTERS_PATH.CATEGORIAS },
            {
                label: 'Horario Veterinaria',
                href: ROUTERS_PATH.HORARIO_VETERINARIA,
            },
            { label: 'Jornadas', href: ROUTERS_PATH.JORNADAS },
            { label: 'Mi Horario', href: ROUTERS_PATH.MI_HORARIO },
        ],
    },
]
