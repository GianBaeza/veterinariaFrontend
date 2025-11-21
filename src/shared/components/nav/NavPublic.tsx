'use client'
import { MENU_PUBLICO } from '@/shared/constants/Navbar'
import { includesString } from '@/shared/utils/general'
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
} from '@/lib/components/navigation-menu'
import Link from 'next/link'
import React from 'react'
import useGlobalContext from '@/context/globalContext'
import ModalContainer from '../containerModal/ModalContainer'
import Auth from '@/feature/(public)/auth/Auth'

export default function NavPublic() {
    const { colorNavbar, iniciarSession, setIniciarSession } =
        useGlobalContext()
    const colorText = colorNavbar
        ? 'text-gray-100 hover:text-gray-300'
        : 'text-gray-800 hover:text-gray-700 '

    console.log(colorText)
    return (
        <NavigationMenu className={`w-full text-white justify-center`}>
            <NavigationMenuList
                className={`flex gap-6 justify-center items-center w-full`}
            >
                {MENU_PUBLICO.slice(0, 3).map((nav, i) => (
                    <NavigationMenuItem key={i}>
                        <NavigationMenuLink asChild>
                            <Link
                                href={nav.href}
                                className={`cursor-pointer scale-100 transition-all ease-in-out hover:scale-110 ${
                                    includesString(nav.label, 'iniciar') ||
                                    includesString(nav.label, 'crear')
                                        ? 'shadow bg-gray-300 hover:bg-gray-600 text-gray-800 hover:text-white px-2 py-1 rounded-lg'
                                        : colorText
                                }`}
                            >
                                {nav.label}
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                ))}

                <li className="list-none">
                    <button
                        onClick={() => setIniciarSession(!iniciarSession)}
                        className={`cursor-pointer scale-100 transition-all ease-in-out hover:scale-110 shadow bg-gray-300 hover:bg-gray-600 text-gray-800 hover:text-white px-2 py-1 rounded-lg`}
                    >
                        Iniciar Sesión
                    </button>
                </li>

                <li className="list-none">
                    <button
                        // onClick={() => setIniciarSession(!iniciarSession)}
                        className={`cursor-pointer scale-100 transition-all ease-in-out hover:scale-110 shadow bg-gray-300 hover:bg-gray-600 text-gray-800 hover:text-white px-2 py-1 rounded-lg`}
                    >
                        Crear Cuenta
                    </button>
                </li>
            </NavigationMenuList>

            {iniciarSession && (
                <ModalContainer closeModal={() => setIniciarSession(false)}>
                    <Auth closeModal={() => setIniciarSession(false)} />
                </ModalContainer>
            )}
        </NavigationMenu>
    )
}
