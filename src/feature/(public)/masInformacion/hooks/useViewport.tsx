'use client'
import useGlobalContext from '@/context/globalContext'
import { useEffect, useRef, useCallback } from 'react'

export default function useViewport() {
    const ref = useRef<HTMLDivElement>(null)
    const setColorNavbar = useGlobalContext((state) => state.setColorNavbar)

    const checkIfFullViewport = useCallback(() => {
        const container = ref.current
        if (!container) return

        const rect = container.getBoundingClientRect() //recuperamos la informacion del contenedor

        console.log('Altura del contenedor:', rect.top, rect.bottom)

        const isFullViewport = rect.top <= 10 // quiere decir que esta al maximo

        setColorNavbar(isFullViewport)
    }, [])

    useEffect(() => {
        // Throttle: ejecuta máximo cada 100ms
        let timeoutId: NodeJS.Timeout
        const throttledCheck = () => {
            if (timeoutId) return

            timeoutId = setTimeout(() => {
                checkIfFullViewport()
                timeoutId = null as any
            }, 100)
        }

        window.addEventListener('scroll', throttledCheck, { passive: true })
        checkIfFullViewport() // Check inicial

        return () => {
            window.removeEventListener('scroll', throttledCheck)
            if (timeoutId) clearTimeout(timeoutId)
        }
    }, [])

    return { ref }
}
