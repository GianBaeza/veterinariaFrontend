'use server'

import { cookies } from 'next/headers'

interface FetchOptions {
    method?: string
    headers?: Record<string, string>
    body?: string | FormData
    cache?: RequestCache
    next?: NextFetchRequestConfig
}

interface ErrorResponse {
    detail?: string
}

export const fetchGlobal = async (
    url: string,
    opciones: FetchOptions,
): Promise<any> => {
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
            const errorData: ErrorResponse = await response.json()
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
