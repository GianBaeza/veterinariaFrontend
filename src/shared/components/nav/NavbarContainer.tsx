import { cookies } from 'next/headers'
import React from 'react'
import { Navbar } from './Navbar'

export default async function NavbarContainer() {
    const cookiesGet = await cookies()
    const usuario = JSON.parse(cookiesGet.get('usuario')?.value || 'null')

    console.log('NavbarContainer - usuario:', usuario)
    return <Navbar usuario={usuario} />
}
