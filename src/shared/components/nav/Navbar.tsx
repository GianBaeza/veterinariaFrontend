'use client'

import React, { useState } from 'react'
import { Squeeze as Hamburger } from 'hamburger-react'
import { useIsMobile } from '@/shared/hooks/useIsMobile'
import NavBarMobile from './NavBarMobile'
import NavBarDesktop from './NavBarDesktop'

export function Navbar({ usuario }: { usuario: any }) {
    const isMobile = useIsMobile()
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <nav className="w-4/6 md:w-full relative  h-[80px] flex items-center px-4 ">
                {isMobile && (
                    <span
                        className={`absolute ${
                            isOpen
                                ? 'z-50 right-0 text-white'
                                : 'block left-0 cursor-pointer text-black'
                        }`}
                    >
                        <Hamburger toggled={isOpen} toggle={setOpen} />
                    </span>
                )}
                {/* Menú Desktop */}
                {!isMobile && <NavBarDesktop isSession={!!usuario} />}

                {/* Menú Mobile */}
                {isMobile && (
                    <NavBarMobile isOpen={isOpen} isSession={!!usuario} />
                )}
            </nav>
        </>
    )
}
