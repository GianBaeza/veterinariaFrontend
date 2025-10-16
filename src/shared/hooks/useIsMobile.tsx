import { useEffect, useState } from 'react'

export function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        // Función para verificar si es móvil
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768) // 768px es el breakpoint típico de Tailwind para 'md'
        }

        // Verificar al montar
        checkIsMobile()

        // Agregar listener para cambios de tamaño
        window.addEventListener('resize', checkIsMobile)

        // Cleanup
        return () => window.removeEventListener('resize', checkIsMobile)
    }, [])

    return isMobile
}
