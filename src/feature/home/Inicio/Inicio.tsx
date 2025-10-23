import React from 'react'
import Home from '../Home'
import Image from 'next/image'
import { Button } from '@/lib/button'

export default function Inicio() {
    return (
        <main className="flex flex-col min-h-screen w-full sticky top-0 z-0 items-center justify-start bg-[#FFFFFF] gap-10 lg:gap-2 ">
            <div className="flex flex-col items-center justify-start w-full">
                <div className="w-10/12 lg:w-11/12 h-[70vh] flex items-center justify-start pl-10 gap-5 pt-16 ">
                    <span className="flex flex-col  items-start justify-start gap-5  lg:pt-2  w-8/12 pl-20  relative ">
                        <h1 className=" font-inter font-bold  text-black  text-center text-3xl md:text-4xl lg:text-6xl  md:text-start ">
                            Gestión Veterinaria Inteligente Gestioná toda tu
                            veterinaria desde un solo lugar 🐾
                        </h1>
                        <p className="text-lg text-gray-500 font-inter font-semibold w-full md:w-full ">
                            Controlá empleados, horarios, turnos, productos,
                            ventas y atenciones en una sola plataforma pensada
                            para que no pierdas ningún detalle de tu día a día.
                        </p>
                        <span className="flex items-start gap-2 justify-start w-full   bg-trasparent">
                            <Button className="bg-violet-400 hover:bg-violet-800 text-white cursor-pointer shadow-2xl">
                                Comenzar
                            </Button>
                            <Button className="bg-gray-400 hover:bg-gray-600 text-white cursor-pointer shadow-2xl">
                                Mas Detalles
                            </Button>
                        </span>
                    </span>

                    <Image
                        src={'/perroHome.png'}
                        alt="Portada"
                        className="hidden lg:block absolute right-0 top-0 sombra-logoHome"
                        width={560}
                        height={0}
                    />
                </div>
            </div>
        </main>
    )
}
