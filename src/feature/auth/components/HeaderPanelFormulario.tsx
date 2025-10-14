import React from 'react'

interface HeaderPanelFormularioProps {
    titulo: string
    descripcion: string
}

export default function HeaderPanelFormulario({
    titulo,
    descripcion,
}: HeaderPanelFormularioProps) {
    return (
        <div className="text-center  space-y-3 w-full">
            <h2 className=" text-xl lg:text-3xl text-white font-heading">
                {titulo}
            </h2>
            <p className="text-md lg:text-base text-white/80 font-sans">
                {descripcion}
            </p>
        </div>
    )
}
