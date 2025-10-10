'use client'
import React from 'react'
import { useFormState } from 'react-dom'
import { FormProps } from '../interface/auth'

const style_Auth = {
    container: 'flex flex-col items-center gap-2 w-full ',
    field: 'flex flex-col gap-xs',
    label: 'text-white font-medium text-small font-sans',
    input: 'px-4 py-2 border border-white/20 bg-white/10 backdrop-blur-sm rounded-sm focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all text-white placeholder-white/50',
    error: 'text-error text-small font-sans',
    button: 'w-[400px] cursor-pointer bg-blue-500 text-white font-medium py-2 px-4 rounded transition-all duration-300 shadow hover:bg-blue-600 hover:scale-105 active:scale-100 disabled:opacity-50 disabled:cursor-not-allowed',
}

const initialState = {
    success: false,
    errors: null,
}

const gridColsClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
}

export default function Formulario({
    formulario,
    formAccion,
    gridCols,
    tipoForm,
}: FormProps) {
    const [state, formAction, isPending] = useFormState(
        formAccion,
        initialState,
    )

    const cardActual = tipoForm !== 'iniciarSession'
    return (
        <div className={style_Auth.container}>
            {state?.errors?.general && (
                <div className="bg-error/10 border border-error/30 text-error px-md py-sm rounded-sm backdrop-blur-sm">
                    <span className="text-small font-sans">
                        {state.errors.general}
                    </span>
                </div>
            )}

            <form
                action={formAction}
                className={`flex flex-col justify-center items-center ${
                    cardActual ? 'gap-10' : 'gap-10'
                } mt-6 $[${cardActual ? 'w-10/12' : 'w-9/12'}]`}
            >
                <div
                    className={`grid gap-5 w-full ${
                        cardActual ? 'grid-col-2' : 'grid-col-1'
                    } lg:${
                        gridCols
                            ? gridColsClasses[
                                  gridCols as keyof typeof gridColsClasses
                              ]
                            : 'grid-cols-1'
                    } `}
                >
                    {formulario.map((item, i) => (
                        <div
                            key={i}
                            className={`${style_Auth.field} ${item.col || ''}`}
                        >
                            <label
                                htmlFor={item.name}
                                className={style_Auth.label}
                            >
                                {item.label}
                            </label>
                            <input
                                id={item.name}
                                type={item.type}
                                name={item.name}
                                placeholder={`Ingresa tu ${item.label.toLowerCase()}`}
                                className={`${style_Auth.input} ${
                                    state?.errors?.[item.name]
                                        ? 'border-error focus:ring-error focus:border-error bg-error/10'
                                        : ''
                                }`}
                                disabled={isPending}
                                autoComplete="off"
                            />
                            {state?.errors?.[item.name] && (
                                <span className={style_Auth.error}>
                                    {state.errors[item.name]}
                                </span>
                            )}
                        </div>
                    ))}
                </div>

                <button
                    type="submit"
                    className={style_Auth.button}
                    disabled={isPending}
                >
                    {isPending ? (
                        <div className="flex items-center justify-center gap-sm">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span className="text-body font-sans">
                                Enviando...
                            </span>
                        </div>
                    ) : (
                        <span className="text-body font-sans font-medium">
                            {tipoForm === 'iniciarSession'
                                ? 'Iniciar Sesión'
                                : 'Crear Cuenta'}
                        </span>
                    )}
                </button>
            </form>

            {state?.success && (
                <div className="bg-success/10 border border-success/30 text-success px-md py-sm rounded-sm backdrop-blur-sm">
                    <span className="text-small font-sans">
                        ¡Operación exitosa!
                    </span>
                </div>
            )}
        </div>
    )
}
