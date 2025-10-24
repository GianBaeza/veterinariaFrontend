'use client'
import { useRef, useEffect, useState, FC, PointerEvent, ReactNode } from 'react'

interface MarqueeItem {
    text: string
    icon?: ReactNode
}

interface CurvedLoopProps {
    items: MarqueeItem[]
    speed?: number
    className?: string
    interactive?: boolean
    iconSize?: number
    gap?: number
}

const CurvedLoop: FC<CurvedLoopProps> = ({
    items = [],
    speed = 1,
    className = '',
    interactive = false,
    iconSize = 48,
    gap = 80,
}) => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const contentRef = useRef<HTMLDivElement | null>(null)
    const [offset, setOffset] = useState(0)
    const [contentWidth, setContentWidth] = useState(0)
    const dragRef = useRef(false)
    const lastXRef = useRef(0)

    // Medir el ancho total del contenido original (una sola copia)
    useEffect(() => {
        if (contentRef.current && items.length > 0) {
            // Esperar a que el DOM se actualice
            const timer = setTimeout(() => {
                if (contentRef.current) {
                    // Calcular el ancho de todos los items originales
                    const children = Array.from(contentRef.current.children)
                    const singleSetWidth = children
                        .slice(0, items.length)
                        .reduce((acc, child) => {
                            return (
                                acc + (child as HTMLElement).offsetWidth + gap
                            )
                        }, 0)
                    setContentWidth(singleSetWidth)
                }
            }, 100)
            return () => clearTimeout(timer)
        }
    }, [items, gap])

    // Animación continua infinita y suave
    useEffect(() => {
        if (!contentWidth || items.length === 0) return

        let animationFrame: number

        const animate = () => {
            if (!dragRef.current) {
                setOffset((prev) => {
                    const newOffset = prev - speed

                    // Cuando completa un ciclo completo, resetea sin saltos
                    if (Math.abs(newOffset) >= contentWidth) {
                        return newOffset + contentWidth
                    }

                    return newOffset
                })
            }
            animationFrame = requestAnimationFrame(animate)
        }

        animationFrame = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(animationFrame)
    }, [contentWidth, items.length, speed])

    // Handlers de interacción
    const onPointerDown = (e: PointerEvent) => {
        if (!interactive) return
        dragRef.current = true
        lastXRef.current = e.clientX
        ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
    }

    const onPointerMove = (e: PointerEvent) => {
        if (!interactive || !dragRef.current) return
        const dx = e.clientX - lastXRef.current
        lastXRef.current = e.clientX
        setOffset((prev) => {
            const newOffset = prev + dx
            // Mantener el offset en un rango válido durante el drag
            if (Math.abs(newOffset) >= contentWidth) {
                return (
                    newOffset + (newOffset < 0 ? contentWidth : -contentWidth)
                )
            }
            return newOffset
        })
    }

    const endDrag = () => {
        if (!interactive) return
        dragRef.current = false
    }

    // Duplicamos los items para un loop seamless perfecto
    const displayItems = [...items, ...items]

    return (
        <div
            ref={containerRef}
            className="w-full relative overflow-hidden"
            style={{
                cursor: interactive
                    ? dragRef.current
                        ? 'grabbing'
                        : 'grab'
                    : 'default',
                touchAction: 'none',
            }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
        >
            <div
                ref={contentRef}
                className="flex items-start py-0"
                style={{
                    transform: `translateX(${offset}px)`,
                    gap: `${gap}px`,
                    willChange: 'transform',
                }}
            >
                {displayItems.map((item, idx) => (
                    <div
                        key={`${item.text}-${idx}`}
                        className="flex flex-col items-center justify-center min-w-fit transition-opacity hover:opacity-80"
                    >
                        {item.icon && (
                            <div
                                className="flex items-center "
                                style={{
                                    width: iconSize,
                                    height: iconSize,
                                }}
                            >
                                {item.icon}
                            </div>
                        )}
                        <span
                            className={`text-lg text-center font-medium tracking-wide text-white ${className}`}
                        >
                            {item.text}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CurvedLoop
