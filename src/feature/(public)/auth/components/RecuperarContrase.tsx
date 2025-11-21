import React, { useState } from 'react'
import { validarEmail } from '../utils/validadores'
import Form from '@/shared/components/form/FormContainer'
import { Button } from '@/lib/components/button'
import { StylesGlobales } from '@/shared/constants/style'

export default function RecuperarContrase() {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const schema = validarEmail.safeParse({ email })
            if (!schema.success) {
                setError(schema.error.issues[0].message)
                return
            }
            // Lógica para enviar el correo de recuperación
        } catch (error) {
            console.log('Error de validación:', error)
        }
    }
    return (
        <div className="w-full max-w-md mx-auto mt-10 p-6 bg-transparent rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-center">
                Recuperar Contraseña
            </h2>
            <Form className="space-y-4" onSubmit={handleSubmit}>
                <div className="flex justify-center items-center gap-2">
                    <Form.Label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Correo Electrónico
                        <Form.Input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="usuario@gmail.com"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                                setError('')
                            }}
                        />
                        {error && (
                            <p className="text-red-500 text-sm mt-1">{error}</p>
                        )}
                    </Form.Label>
                    <Button
                        type="submit"
                        className={`${StylesGlobales.buttonPrimary} w-20`}
                    >
                        Enviar
                    </Button>
                </div>
            </Form>
        </div>
    )
}
