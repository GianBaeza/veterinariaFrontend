'use client'
import useGlobalContext from '@/context/globalContext'
import React from 'react'
import useViewport from '../masInformacion/hooks/useViewport'

export default function ContainerRelative({
    children,
}: {
    children: React.ReactNode
}) {
    const { ref } = useViewport()
    const { colorNavbar } = useGlobalContext()

    console.log('colorNavbar en ContainerRelative:', colorNavbar)
    return (
        <div
            id="container-descripcion"
            className={`w-full min-h-screen relative z-20 flex items-center justify-center ${
                colorNavbar ? 'rounded-none ' : 'rounded-tl-3xl rounded-tr-3xl'
            }  bg-gradient-to-b from-[#000000]   to-[#566ba7] flex-col gap-6 px-4 py-8`}
            ref={ref}
        >
            <div className="absolute w-full h-full bg-black/20  rounded-tl-3xl rounded-tr-3xl"></div>
            {children}
        </div>
    )
}
