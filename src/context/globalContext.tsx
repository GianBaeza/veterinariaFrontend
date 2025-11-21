import { create } from 'zustand'
import { GlobalContext } from './interface/interface'
import { Usuario } from '@/shared/interface/Usuario'

const useGlobalContext = create<GlobalContext>((set) => ({
    colorNavbar: false,
    iniciarSession: false,
    crearCuenta: false,
    usuario: null,

    setColorNavbar: (colorNavbar: boolean) => set(() => ({ colorNavbar })),
    setIniciarSession: (iniciarSession: boolean) =>
        set(() => ({ iniciarSession })),
    setCrearCuenta: (crearCuenta: boolean) => set(() => ({ crearCuenta })),
    setUsuario: (usuario: Usuario | null) => set(() => ({ usuario })),
}))

export default useGlobalContext
