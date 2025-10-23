'use client'
import React from 'react'
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
import NavBarSinSession from './NavBarSinSession'
export default function NavBarDesktop() {
    const isSession = false
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
                                className="cursor-pointer text-gray-800 hover:text-gray-700 scale-100 transition-all ease-in-out hover:scale-110 "
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
                    <NavBarSinSession />
                )}
            </NavigationMenuList>
        </NavigationMenu>
    )
}
