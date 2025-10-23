import React from 'react'
import { utilidades } from '../constantes/Descripcion'
import { Button } from '@/lib/button'
import CardContainer from '../components/Card'

export default function Descripcion() {
    return (
        <div className="w-full h-full relative z-20 flex items-center justify-center rounded-tl-3xl rounded-tr-3xl bg-gradient-to-b from-[#0752a7]   to-[#566ba7] flex-col gap-6 px-4 py-8">
            <div className="absolute w-full h-full bg-black/20  rounded-tl-3xl rounded-tr-3xl"></div>

            <main className="w-10/12 h-full flex flex-col items-center gap-10 justify-center z-10 pt-28">
                <article className="flex flex-col items-center w-full ">
                    <h2 className="text-shadow font-inter font-bold  text-white  text-center text-3xl md:text-4xl lg:text-6xl w-11/12 md:text-center text-shadow-2">
                        Todo lo que necesitás para administrar tu veterinaria
                    </h2>
                    <span className="flex flex-col items-center justify-center gap-4 w-10/12  rounded-2xl pl-4 text-center pt-6">
                        <p className=" font-inter text-xl   text-gray-300 ">
                            Nuestra aplicación <strong>centraliza</strong> cada
                            área Nuestra aplicación <strong>centraliza</strong>{' '}
                            cada área de tu negocio veterinario. Desde la
                            gestión del personal y sus horarios, hasta la
                            administración de productos, ventas y{' '}
                            <strong>atención a los clientes</strong>. Cada
                            módulo fue diseñado para{' '}
                            <strong>conectarse entre sí</strong>, de modo que
                            siempre tengas una{' '}
                            <strong>visión completa y actualizada</strong> de lo
                            que sucede en tu clínica.
                        </p>
                    </span>
                </article>
                <section className="w-full grid grid-cols-3 gap-4">
                    {utilidades.map((utilidad, i) => {
                        return (
                            <CardContainer
                                key={i}
                                className="col-span-1"
                                titulo={utilidad.title}
                                subTitulo={utilidad.subTitulo}
                                descripcion={utilidad.description}
                            />
                        )
                    })}
                </section>
            </main>
        </div>
    )
}
