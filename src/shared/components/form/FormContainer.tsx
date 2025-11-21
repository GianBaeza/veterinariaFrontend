'use client'
import { StylesGlobales } from '@/shared/constants/style'
import React from 'react'

const Label = ({
    children,
    ...props
}: {
    children: React.ReactNode
} & React.LabelHTMLAttributes<HTMLLabelElement>) => {
    return (
        <label className="flex flex-col items-start " {...props}>
            {children}
        </label>
    )
}

const Field = ({ children }: { children: React.ReactNode }) => {
    return <div className="flex flex-col space-y-2">{children}</div>
}

const Input = (
    props: { error?: boolean } & React.InputHTMLAttributes<HTMLInputElement>,
) => {
    const { error, ...inputProps } = props
    return (
        <input
            className={` border border-gray-600 rounded-md p-2 w-full placeholder:text-gray-400 ${
                error
                    ? 'focus:outline-none focus:ring-2 focus:ring-red-500'
                    : 'focus:outline-none focus:ring-2 focus:ring-blue-500'
            }`}
            {...inputProps}
        />
    )
}

const Textarea = (
    props: {
        error?: boolean
    } & React.TextareaHTMLAttributes<HTMLTextAreaElement>,
) => {
    const { error, ...textareaProps } = props
    return (
        <textarea
            className={` border border-gray-300 rounded-md p-2 w-full ${
                error
                    ? 'focus:outline-none focus:ring-2 focus:ring-red-500'
                    : 'focus:outline-none focus:ring-2 focus:ring-blue-500'
            }`}
            {...textareaProps}
        />
    )
}
const Error = ({
    children,
    ...props
}: {
    children: React.ReactNode
} & React.HTMLAttributes<HTMLParagraphElement>) => {
    return (
        <p
            className={`text-red-500 text-sm mt-1 ${props.className} `}
            {...props}
        >
            {children}
        </p>
    )
}

const ButtonSubmit = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button type="submit" className={props.className} {...props} />
)

function FormComponent({
    children,
    ...props
}: {
    children: React.ReactNode
    [x: string]: any
}) {
    console.log('RENDER FORM CONTAINER')
    return (
        <form className={` ${props.className} `} {...props}>
            {children}
        </form>
    )
}

interface FormCompoundComponent
    extends React.FC<{
        children: React.ReactNode
        [x: string]: any
    }> {
    Label: typeof Label
    Field: typeof Field
    Input: typeof Input
    Textarea: typeof Textarea
    ButtonSubmit: typeof ButtonSubmit
    Error: typeof Error
}

// Crear el componente compuesto
const Form = FormComponent as FormCompoundComponent
Form.Label = Label
Form.Field = Field
Form.Input = Input
Form.Textarea = Textarea
Form.ButtonSubmit = ButtonSubmit
Form.Error = Error

export default Form
