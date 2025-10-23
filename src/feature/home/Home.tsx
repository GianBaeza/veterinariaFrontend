import Image from 'next/image'
import React from 'react'
import Inicio from './Inicio/Inicio'
import Descripcion from './Descripcion/Descripcion'

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center gap-2">
            <Inicio />
            <Descripcion />
            {/* PONER UN CARRUSEL EL CUAL MUESTRE LOGOS DE VETERINARIAS QUE USAN EL SOFTWARE */}
        </main>
    )
}
