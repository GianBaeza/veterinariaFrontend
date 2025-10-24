'use client'
import React, { memo } from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from '@/lib/navigation-menu'
import { menuItems } from '@/shared/constants/Navbar'
import Link from 'next/link'
import NavPublic from './NavPublic'
import useGlobalContext from '@/context/globalContext'
function NavBarDesktop({ isSession }: { isSession?: boolean }) {
    const { colorNavbar } = useGlobalContext()
    const colorText = colorNavbar
        ? 'text-gray-100 hover:text-gray-300'
        : 'text-gray-800 hover:text-gray-700 '
    return (
        <NavigationMenu
            className={`w-full text-white  ${
                isSession ? 'justify-center' : 'justify-end'
            }`}
            viewport={false}
        >
            <NavigationMenuList
                className={`flex gap-6 justify-center items-center w-full`}
            >
                {isSession ? (
                    menuItems.map((nav, i) => (
                        <NavigationMenuItem key={i}>
                            <NavigationMenuTrigger
                                icon={!!nav.submenu}
                                className={`mix-blend-color:white cursor-pointer  scale-100 transition-all ease-in-out hover:scale-110  ${colorText}`}
                            >
                                {nav.label}
                            </NavigationMenuTrigger>
                            {nav.submenu && (
                                <NavigationMenuContent className=" p-4 rounded-lg z-10 submenu-navbar text-start">
                                    <ul className="flex flex-col item-start justify-items-start gap-3 w-[200px] text-start">
                                        {nav.submenu.map((subItem, j) => (
                                            <li key={j}>
                                                <NavigationMenuLink
                                                    asChild
                                                    className=""
                                                >
                                                    <Link
                                                        href={subItem.href}
                                                        className=" gap-2 text-gray-800 hover:text-gray-700 scale-100 ease-in-out hover:scale-105"
                                                    >
                                                        {subItem.label}
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            )}
                        </NavigationMenuItem>
                    ))
                ) : (
                    <NavPublic />
                )}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default memo(NavBarDesktop)
