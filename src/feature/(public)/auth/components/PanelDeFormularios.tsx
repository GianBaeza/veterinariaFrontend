'use client'
import React from 'react'
import Formulario from './Formulario'
import HeaderPanelFormulario from './HeaderPanelFormulario'
import {
    formulario_externo_iniciarSession,
    formulario_externo_regristrar,
} from '../constants/formularios'
import { iniciarSessionConValidacion } from '../services/server'
import {
    TabsList,
    Tabs,
    TabsTrigger,
    TabsContent,
} from '@/shared/components/ui/tabs'
import { mensajes_externos, mensajes_internos } from '../constants/mensajes'

const tabs = [
    { value: 'iniciarSession', label: 'Iniciar Sesión' },
    { value: 'crear', label: 'Crear Cuenta' },
]

type UsuarioRol = 'empleado' | 'cliente' | 'admin'

export default function PanelDeFormularios() {
    const usuarioRol: UsuarioRol = 'cliente'

    return (
        <Tabs
            defaultValue="iniciarSession"
            className="w-auto h-fit rounded-lg p-5 BackgroundCardLogin bg-black/80 backdrop-blur-3xl flex flex-col justify-start items-center space-y-sm"
        >
            <span className="w-full flex justify-start ">
                <TabsList className="bg-primary/80 backdrop-blur-sm rounded-sm p-xs flex gap-xs">
                    {tabs.map((tab) => (
                        <TabsTrigger
                            value={tab.value}
                            key={tab.value}
                            className="text-white/70 cursor-pointer   data-[state=active]:text-primary data-[state=inactive]:text-zinc-200 data-[state=active]:bg-white data-[state=active]:shadow-soft rounded-sm px-lg py-sm text-small font-medium font-sans transition-all duration-200"
                        >
                            {tab.label}
                        </TabsTrigger>
                    ))}
                </TabsList>
            </span>

            <TabsContent value="iniciarSession" className="space-y-sm w-full">
                <HeaderPanelFormulario
                    titulo="Iniciar Sesión"
                    descripcion={
                        usuarioRol === 'cliente'
                            ? mensajes_externos.iniciarSession
                            : mensajes_internos.iniciarSession
                    }
                />
                <Formulario
                    formulario={formulario_externo_iniciarSession}
                    formAccion={iniciarSessionConValidacion}
                    gridCols={1}
                    tipoForm={'iniciarSession'}
                />
                <footer className="w-full flex justify-center text-center text-white/80 hover:text-white cursor-pointer transition-all">
                    <p className="pt-1">Olvide mi contraseña</p>
                </footer>
            </TabsContent>

            <TabsContent value="crear" className="space-y-sm w-full">
                <HeaderPanelFormulario
                    titulo="Crear Cuenta"
                    descripcion={
                        usuarioRol === 'cliente'
                            ? mensajes_externos.crearCuenta
                            : mensajes_internos.crearCuenta
                    }
                />
                <Formulario
                    formulario={formulario_externo_regristrar}
                    formAccion={iniciarSessionConValidacion}
                    gridCols={4}
                    tipoForm={'crear'}
                />
            </TabsContent>
        </Tabs>
    )
}
