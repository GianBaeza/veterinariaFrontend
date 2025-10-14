'use client'
import React from 'react'
import { useFormState } from 'react-dom'
import { FormProps } from '../interface/auth'

const style_Auth = {
    container: 'flex flex-col items-center gap-4 w-full px-4   overflow-y-auto',
    label: 'flex flex-col items-start justify-start text-white font-medium text-sm font-sans w-full',
    input: 'w-full px-3 py-2 sm:px-4 sm:py-3 border border-white/20 bg-white/10 backdrop-blur-sm rounded-sm focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all text-white placeholder-white/50 text-sm sm:text-base',
    error: 'text-error text-xs sm:text-sm font-sans mt-1',
    button: 'w-full max-w-sm cursor-pointer bg-blue-500 text-white font-medium py-2 px-4 sm:py-3 sm:px-6 rounded transition-all duration-300 shadow hover:bg-blue-600 hover:scale-105 active:scale-100 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base',
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
        <div
            className={`${style_Auth.container} ${
                cardActual ? 'h-[60vh] ' : 'h-fit'
            }`}
        >
            {state?.errors?.general && (
                <div className="bg-error/10 border border-error/30 text-error px-3 py-2 sm:px-4 sm:py-3 rounded-sm backdrop-blur-sm w-full">
                    <span className="text-xs sm:text-sm font-sans">
                        {state.errors.general}
                    </span>
                </div>
            )}

            <form
                action={formAction}
                className={`flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 mt-4 sm:mt-6 w-full`}
            >
                <div
                    className={`grid gap-4 sm:gap-5 w-full justify-center ${
                        cardActual
                            ? 'grid-cols-1 sm:grid-cols-2'
                            : 'grid-cols-1'
                    } ${
                        gridCols && cardActual
                            ? `lg:${
                                  gridColsClasses[
                                      gridCols as keyof typeof gridColsClasses
                                  ]
                              }`
                            : ''
                    }`}
                >
                    {formulario.map((item, i) => (
                        <label
                            key={i}
                            htmlFor={item.name}
                            className={style_Auth.label}
                        >
                            {item.label}
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
                        </label>
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
                            <span className="text-sm sm:text-base font-sans">
                                Enviando...
                            </span>
                        </div>
                    ) : (
                        <span className="text-sm sm:text-base font-sans font-medium">
                            {tipoForm === 'iniciarSession'
                                ? 'Iniciar Sesión'
                                : 'Crear Cuenta'}
                        </span>
                    )}
                </button>
            </form>

            {state?.success && (
                <div className="bg-success/10 border border-success/30 text-success px-3 py-2 sm:px-4 sm:py-3 rounded-sm backdrop-blur-sm w-full">
                    <span className="text-xs sm:text-sm font-sans">
                        ¡Operación exitosa!
                    </span>
                </div>
            )}
        </div>
    )
}
