'use client'
import { Button } from '@/lib/components/button'
import Image from 'next/image'
import React from 'react'

export default function ButtonWhatsap() {
    return (
        <Button className=" fixed bottom-8 right-8 z-50 ">
            <Image
                className="cursor-pointer transition-all hover:scale-110 shadow-icon-whatsapp rounded-full"
                src={'/whatsapp.svg'}
                alt="WhatsApp Icon"
                width={34}
                height={34}
            />
        </Button>
    )
}
