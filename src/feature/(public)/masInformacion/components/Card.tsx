'use client'
import { CardBody, Card, Typography } from '@material-tailwind/react'
import React from 'react'

// Define las props de tu componente

interface CardContainerProps {
    titulo: string
    className?: string
    subTitulo: string
    descripcion: string
}
export default function CardContainer({
    titulo,
    subTitulo,
    className,
    descripcion,
}: CardContainerProps) {
    return (
        <Card
            className={`overflow-hidden rounded-xl shadow-sm glass-card font-inter ${
                className ?? ''
            }`}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
        >
            <CardBody
                className="p-4"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
            >
                <Typography
                    color="blue-gray"
                    className="mb-1  !font-semibold text-xl text-white"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                >
                    {titulo}
                </Typography>
                <div className="my-4 flex items-start justify-between">
                    <div className="flex flex-col w-full  items-start justify-center gap-3">
                        <Typography
                            color="gray"
                            variant="h6"
                            className="text-gray-100 text-md  font-medium"
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                            onResize={undefined}
                            onResizeCapture={undefined}
                        >
                            {subTitulo}
                        </Typography>
                        <Typography
                            variant="small"
                            color="gray"
                            className="text-gray-100 text-md  font-normal"
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                            onResize={undefined}
                            onResizeCapture={undefined}
                        >
                            {descripcion}
                        </Typography>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}
