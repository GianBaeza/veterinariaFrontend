'use client'
import Form from '@/shared/components/form/FormContainer'
import React, { useActionState, useEffect, useRef, useState } from 'react'
import { iniciarSessionConValidacion } from '../services/server'
import type { Formulario as FormularioType } from '../interface/forms'
import { StylesGlobales } from '@/shared/constants/style'
import RecuperarContrase from './RecuperarContrase'
import { createPortal } from 'react-dom'
import ModalContainer from '@/shared/components/containerModal/ModalContainer'
import { useRouter } from 'next/navigation'
import { RUTAS_PRIVADAS } from '@/shared/constants/Navbar'
import useGlobalContext from '@/context/globalContext'

interface FormularioProps {
    Formulario: FormularioType[]
}

const initialState = {
    success: false,
    errors: null,
}
export default function Formulario({ Formulario }: FormularioProps) {
    const [state, formAction, pending] = useActionState(
        iniciarSessionConValidacion,
        initialState,
    )
    // const { setIniciarSession } = useGlobalContext()
    const router = useRouter()

    const [recuperarPass, setRecuperarPass] = useState(false)

    return (
        <Form action={formAction} className="flex flex-col gap-4 font-inter">
            {Formulario.map((campo) => {
                return (
                    <Form.Label key={campo.id}>
                        {campo.label}
                        <Form.Input
                            type={campo.type}
                            name={campo.name}
                            id={campo.name}
                            className={campo.style}
                        />
                        {state.errors?.fieldErrors?.[campo.name] && (
                            <Form.Error key={campo.id}>
                                {state.errors.fieldErrors[campo.name][0]}
                            </Form.Error>
                        )}
                    </Form.Label>
                )
            })}
            {state.errors?.fieldErrors?.backend && (
                <Form.Error className="text-center text-sm text-red-400">
                    {state.errors.fieldErrors.backend[0].replace(
                        state.errors.fieldErrors.backend[0],
                        'Credenciales Invalidas',
                    )}
                </Form.Error>
            )}
            <p className="text-center text-sm flex flex-col ">
                ¿Olvidé mi contraseña?{' '}
                <strong
                    className="cursor-pointer text-xs"
                    onClick={() => setRecuperarPass(true)}
                >
                    Recuperar
                </strong>
                {recuperarPass &&
                    createPortal(
                        <ModalContainer
                            closeModal={() => setRecuperarPass(false)}
                        >
                            <RecuperarContrase />
                        </ModalContainer>,
                        document.body,
                    )}
            </p>
            <Form.ButtonSubmit
                disabled={pending}
                className={StylesGlobales.buttonPrimary}
            >
                {pending ? 'Enviando...' : 'Enviar'}
            </Form.ButtonSubmit>
        </Form>
    )
}
