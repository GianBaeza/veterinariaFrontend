import React from 'react'
import { createRoot } from 'react-dom/client'

export function customAlert(
    message: string,
    duration = 1500,
    icon?: string | React.ReactNode,
) {
    const alert = document.createElement('div')

    // Estilos del contenedor
    alert.style.position = 'fixed'
    alert.style.top = '20px'
    alert.style.right = '20px'
    alert.style.background = '#ffffff'
    alert.style.color = '#1a1a1a'
    alert.style.padding = '12px 24px'
    alert.style.borderRadius = '4px'
    alert.style.opacity = '0'
    alert.style.transition = 'opacity 0.3s'
    alert.style.zIndex = '999'
    alert.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)'
    alert.style.fontSize = '14px'
    alert.style.fontWeight = '500'
    alert.style.border = '1px solid #e5e5e5'
    alert.style.display = 'flex'
    alert.style.alignItems = 'center'
    alert.style.gap = '8px'

    document.body.appendChild(alert)

    if (icon && typeof icon !== 'string') {
        const root = createRoot(alert)
        root.render(
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {icon}
                <span>{message}</span>
            </div>,
        )
    } else if (icon && typeof icon === 'string') {
        // Si es un string (emoji), usamos innerHTML
        alert.innerHTML = `<span style="margin-right: 8px;">${icon}</span>${message}`
    } else {
        // Sin icono
        alert.textContent = message
    }

    requestAnimationFrame(() => (alert.style.opacity = '1'))

    setTimeout(() => {
        alert.style.opacity = '0'
        setTimeout(() => alert.remove(), 400)
    }, duration)
}
