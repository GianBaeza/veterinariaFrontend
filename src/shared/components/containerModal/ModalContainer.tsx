import { Iconos } from '@/shared/constants/Iconos'
import { Card, CardProps } from '@material-tailwind/react'
import React from 'react'
import { createPortal } from 'react-dom'

export default function ModalContainer({
    children,
    closeModal,
    ...props
}: {
    children: React.ReactNode
    closeModal: () => void
} & CardProps) {
    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 bg-opacity-50">
            <Card
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
                className="w-[400px]"
                {...(props as CardProps)}
            >
                <header className="w-full relative">
                    <Iconos.X
                        onClick={closeModal}
                        className="absolute top-2 right-5 cursor-pointer"
                    />
                </header>
                {children}
            </Card>
        </div>,
        document.body,
    )
}
