'use client'
import { menuSinSesion } from '@/shared/constants/Navbar'
import { includesString } from '@/shared/utils/general'
import {
    NavigationMenuItem,
    NavigationMenuLink,
} from '@/lib/components/navigation-menu'
import Link from 'next/link'
import React from 'react'
import useGlobalContext from '@/context/globalContext'

export default function NavPublic() {
    const { colorNavbar } = useGlobalContext()
    const colorText = colorNavbar
        ? 'text-gray-100 hover:text-gray-300'
        : 'text-gray-800 hover:text-gray-700 '

    console.log(colorText)
    return (
        <>
            {menuSinSesion.map((nav, i) => (
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
        </>
    )
}
