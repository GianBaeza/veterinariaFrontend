'use client'
import React, { memo } from 'react'
import Formulario from './components/Formulario'
import { Formulario_Iniciar_Session } from './constants/formularios'
import { Iconos } from '@/shared/constants/Iconos'

function Auth({ closeModal }: { closeModal?: () => void }) {
    return (
        <section className="shadow-lg p-8 rounded-lg border relative border-gray-200 bg-white max-w-[400px] w-full">
            {closeModal && (
                <button onClick={closeModal} className="absolute top-2 right-5">
                    <Iconos.X
                        size={24}
                        className="cursor-pointer hover:text-gray-500"
                    />
                </button>
            )}

            <h2 className="text-2xl text-center mb-4">Iniciar Sesión</h2>

            <Formulario Formulario={Formulario_Iniciar_Session} />
        </section>
    )
}
export default memo(Auth)
