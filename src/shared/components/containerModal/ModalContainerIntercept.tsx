'use client'
import React from 'react'
import { createPortal } from 'react-dom'
import { useRouter } from 'next/navigation'

export default function ModalContainerIntercept({
    children,
}: {
    children: React.ReactNode
}) {
    const router = useRouter()

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            router.back()
        }
    }

    return (
        <div
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 bg-opacity-50"
            onClick={handleBackdropClick}
        >
            {children}
        </div>
    )
}
