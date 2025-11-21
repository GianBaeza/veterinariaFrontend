'use client'
import { useEffect } from 'react'
import Cookies from 'js-cookie'
import { Usuario } from '../interface/Usuario'
import useGlobalContext from '@/context/globalContext'

export default function useSessionActiva() {
    const { setUsuario } = useGlobalContext()

    useEffect(() => {
        const usuarioCookie = Cookies.get('usuario')
        const usuario = usuarioCookie ? JSON.parse(usuarioCookie) : null

        const verificarSession = (usuario: Usuario | null) => {
            if (usuario) {
                setUsuario(usuario)
            } else {
                setUsuario(null)
            }
        }

        verificarSession(usuario)

        console.log('Usuario en cookie:', usuario)
    }, [])

    return null
}
