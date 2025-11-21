import { obtenerUsuario } from '@/feature/(public)/auth/services/server'
import { RUTAS_PUBLICAS } from '@/shared/constants/Navbar'
import { redirect, RedirectType } from 'next/navigation'
import React from 'react'

export default async function page() {
    const usuario = await obtenerUsuario()
    console.log(usuario, '--- usuario en dashboard/page.tsx ---')
    if (!usuario || usuario.rol.toUpperCase() !== 'ADMIN') {
        return redirect(RUTAS_PUBLICAS.INICIO, RedirectType.push)
    }
    return <div className="w-8/12 bg-red-400">DASHOBAOARDDD</div>
}
