import Image from 'next/image'
import React from 'react'
const listado = ['Gestión de pacientes', 'Control de citas', 'Historial médico']

export default function PanelDeBienvenida() {
    return (
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 relative h-[500px] w-full lg:w-1/2 p-12 rounded-2xl shadow-2xl overflow-hidden">
            <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        Bienvenido al
                        <span className="block text-blue-200">
                            Sistema Veterinario
                        </span>
                    </h1>
                    <p className="text-blue-100 text-lg mb-6">
                        Gestiona tu clínica veterinaria de manera eficiente y
                        profesional
                    </p>
                    <div className="flex flex-col gap-2 text-blue-100">
                        {listado.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center">
                    <Image
                        src="/perroLogin.png"
                        alt="Mascota"
                        width={280}
                        height={280}
                        className="drop-shadow-2xl"
                        priority
                    />
                </div>
            </div>
        </div>
    )
}
