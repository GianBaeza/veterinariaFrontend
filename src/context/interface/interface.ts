import { Usuario } from '@/shared/interface/Usuario'

export interface GlobalContext {
    colorNavbar: boolean | undefined
    iniciarSession: boolean | undefined
    crearCuenta: boolean | undefined

    setColorNavbar: (colorNavbar: boolean) => void
    setIniciarSession: (iniciarSession: boolean) => void
    setCrearCuenta: (crearCuenta: boolean) => void
    usuario: Usuario | null
    setUsuario: (usuario: Usuario | null) => void
}
