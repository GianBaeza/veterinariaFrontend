'use server'

import { cookies } from 'next/headers'

export const fetchGlobal = async (url: string, opciones): Promise<any> => {
    const cookiesGet = await cookies()
    const token = cookiesGet.get('token')?.value || ''

    const isLogin = url.includes('auth')

    opciones.headers = {
        ...opciones?.headers,
        Authorization: isLogin ? '' : `Bearer ${token}`,
    }
    try {
        const response = await fetch(url, opciones)

        console.log('RESPUESTA DE FETCHGLOBAL', response)
        if (!response.ok) {
            const errorData = await response.json()
            throw new Error(
                `Error en la solicitud: ${
                    errorData.detail || response.statusText
                }`,
            )
        }
        return await response.json()
    } catch (error) {
        console.error('Error en fetchGlobal:', error)
        throw error
    }
}
