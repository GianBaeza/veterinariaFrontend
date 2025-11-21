export type Rol = 'Admin' | 'Empleado' | 'cliente'
export type Permisos =
    | 'crear_usuario'
    | 'editar_usuario'
    | 'editar_usuarios'
    | 'ver_usuarios'
export type TipoUsuario = 'access' | 'refresh'

export interface Usuario {
    sub: string
    usuario: string
    rol: Rol
    permisos: Permisos[]
    tipo: TipoUsuario
    exp: number
    iat: number
}
