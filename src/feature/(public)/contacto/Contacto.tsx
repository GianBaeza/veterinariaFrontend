'use client'
import React from 'react'
import Formulario from './component/Formulario'
import Image from 'next/image'

export default function Contacto() {
    return (
        <div className="w-[98%]  z-20 rounded-tl-lg  rounded-tr-lg px-5 bg-white flex items-center justify-center gap-20  py-10">
            <Formulario />
            <span className="flex flex-col items-start justify-start bg-amber-200 h-full ">
                <ul className="space-y -3">
                    <li>Contacto</li>
                    <li>Contacto</li>
                    <li>Contacto</li>
                    <li>Contacto</li>
                </ul>
            </span>

            <Image
                src={'/veterinariaContacto.png'}
                width={800}
                height={400}
                alt="Veterinaria Contacto"
                className="rounded-lg hidden lg:block"
            />
        </div>
    )
}
