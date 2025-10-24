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
import { CircleHelpIcon } from 'lucide-react'
import NavBarSinSession from './NavPublic'

function NavBarMobile({
    isOpen,
    isSession,
}: {
    isOpen: boolean
    isSession?: boolean
}) {
    return (
        <div
            className={`fixed top-0 left-0 h-screen ${
                isOpen ? 'flex ' : 'hidden '
            } w-4/6 bg-black/90 text-white flex-col pt-20 z-40 transition-all`}
        >
            {' '}
            <NavigationMenu
                className="w-full h-screen text-white flex items-start justify-start md:flex-row"
                viewport={false}
            >
                <NavigationMenuList className=" w-full flex  flex-col items-start justify-start  md:flex-row gap-6 ">
                    {isSession ? (
                        menuItems.map((nav, i) => (
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
                        ))
                    ) : (
                        <NavBarSinSession />
                    )}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

export default memo(NavBarMobile)
