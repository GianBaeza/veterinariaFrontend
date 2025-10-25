import React from 'react'
import Image from 'next/image'
import { Button } from '@/lib/components/button'

export default function Inicio() {
    return (
        <main className="flex flex-col min-h-screen w-full sticky top-0 z-0 items-center justify-start bg-[#FFFFFF] gap-10 lg:gap-2 ">
            <div className="flex flex-col items-center justify-start w-full">
                <div className="w-11/12 lg:w-11/12 h-[70vh] flex flex-col lg:flex-row items-center justify-start lg:pl-10 gap-5 pt-4 md:pt-16">
                    <span className="flex flex-col items-center lg:items-start justify-center lg:justify-start gap-10 lg:gap-5 lg:pt-2 w-full lg:w-8/12 px-4 lg:pl-20 relative">
                        <h1 className="font-inter font-bold text-black text-center lg:text-start text-4xl md:text-5xl lg:text-6xl">
                            Gestión Veterinaria Inteligente Gestioná toda tu
                            veterinaria desde un solo lugar 🐾
                        </h1>

                        <p className=" text-xl lg:text-lg text-gray-500 font-inter font-semibold w-full text-center lg:text-start">
                            Controlá empleados, horarios, turnos, productos,
                            ventas y atenciones en una sola plataforma pensada
                            para que no pierdas ningún detalle de tu día a día.
                        </p>
                        <span className="flex  items-center lg:items-start gap-2 justify-center lg:justify-start  bg-transparent">
                            <Button className="bg-violet-400 hover:bg-violet-800 text-white cursor-pointer shadow-2xl w-full sm:w-auto">
                                Comenzar
                            </Button>
                            <Button className="bg-gray-400 hover:bg-gray-600 text-white cursor-pointer shadow-2xl w-full sm:w-auto">
                                Mas Detalles
                            </Button>
                        </span>
                    </span>

                    <div className="w-3/12 lg:w-4/12 hidden md:flex  justify-center lg:justify-end  md:relative ">
                        <Image
                            src={'/perroHome.png'}
                            alt="Portada"
                            width={0}
                            height={0}
                            sizes="100vh"
                            style={{
                                width: '100%',
                                maxWidth: '560px',
                                height: 'auto',
                            }}
                            className="sombra-logoHome hidden lg:block "
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
