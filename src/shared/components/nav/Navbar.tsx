'use client'

import * as React from 'react'
import Link from 'next/link'
import { CircleHelpIcon, ChevronDown } from 'lucide-react'

import { menuItems } from '@/shared/constants/Navbar'
import { Squeeze as Hamburger } from 'hamburger-react'
import { useIsMobile } from '@/shared/hooks/useIsMobile'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/lib/navigation-menu'

export function Navbar() {
    const isMobile = useIsMobile()
    const [isOpen, setOpen] = React.useState(false)
    const [openIndex, setOpenIndex] = React.useState<number | null>(null)

    return (
        <nav className="w-full relative bg-black/80 shadow-md h-[80px] flex items-center px-4">
            {isMobile && (
                <span
                    className={`absolute left-0 cursor-pointer ${
                        isOpen ? 'hidden' : 'block'
                    }`}
                >
                    <Hamburger
                        toggled={isOpen}
                        toggle={setOpen}
                        color="white"
                    />
                </span>
            )}

            {/* Menú Desktop */}
            {!isMobile && (
                <NavigationMenu className="w-full text-white" viewport={false}>
                    <NavigationMenuList className="flex gap-6 justify-center">
                        {menuItems.map((nav, i) => (
                            <NavigationMenuItem key={i}>
                                <NavigationMenuTrigger
                                    icon={!!nav.submenu}
                                    className="cursor-pointer"
                                >
                                    {nav.label}
                                </NavigationMenuTrigger>
                                {nav.submenu && (
                                    <NavigationMenuContent className="bg-black/80 p-4 rounded-lg z-10">
                                        <ul className="grid gap-3 w-[200px]">
                                            {nav.submenu.map((subItem, j) => (
                                                <li key={j}>
                                                    <NavigationMenuLink asChild>
                                                        <Link
                                                            href={subItem.href}
                                                            className="flex items-center gap-2 hover:text-gray-300 transition-colors"
                                                        >
                                                            <CircleHelpIcon
                                                                size={16}
                                                            />
                                                            {subItem.label}
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                )}
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            )}

            {/* Menú Mobile */}
            {isMobile && (
                <div
                    className={`fixed top-0 left-0 h-screen ${
                        isOpen ? 'flex ' : 'hidden '
                    } w-4/6 bg-black/90 text-white flex-col pt-20 z-50 transition-all`}
                >
                    {' '}
                    {isMobile && (
                        <span className="absolute right-0 top-0 cursor-pointer">
                            <Hamburger
                                toggled={isOpen}
                                toggle={setOpen}
                                color="white"
                            />
                        </span>
                    )}
                    <NavigationMenu className="w-full h-screen text-white flex items-start justify-start md:flex-row" viewport={false}>
                        <NavigationMenuList className=" w-full flex  flex-col items-start justify-start  md:flex-row gap-6 ">
                            {menuItems.map((nav, i) => (
                                <NavigationMenuItem key={i}>
                                    <NavigationMenuTrigger
                                        icon={!!nav.submenu}
                                        className="cursor-pointer"
                                    >
                                        {nav.label}
                                    </NavigationMenuTrigger>
                                    {nav.submenu && (
                                        <NavigationMenuContent className="bg-black/80 p-4 rounded-lg z-10">
                                            <ul className="grid gap-3 w-[200px]">
                                                {nav.submenu.map(
                                                    (subItem, j) => (
                                                        <li key={j}>
                                                            <NavigationMenuLink
                                                                asChild
                                                            >
                                                                <Link
                                                                    href={
                                                                        subItem.href
                                                                    }
                                                                    className="flex items-center gap-2 hover:text-gray-300 transition-colors"
                                                                >
                                                                    <CircleHelpIcon
                                                                        size={
                                                                            16
                                                                        }
                                                                    />
                                                                    {
                                                                        subItem.label
                                                                    }
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </NavigationMenuContent>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            )}
        </nav>
    )
}
