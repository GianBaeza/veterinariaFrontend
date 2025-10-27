import React from 'react'

export default function Form({
    children,
    ...props
}: {
    children: React.ReactNode
    [x: string]: any
}) {
    console.log('RENDER FORM CONTAINER')
    return (
        <form className="bg-amber-300  w-[400px] max-w-[400px]" {...props}>
            {children}
        </form>
    )
}

const Field = ({ children }: { children: React.ReactNode }) => {
    return <label className="flex flex-col items-start ">{children}</label>
}

const Input = (
    props: { error?: boolean } & React.InputHTMLAttributes<HTMLInputElement>,
) => {
    return (
        <input
            className={` border border-gray-300 rounded-md p-2 w-full ${
                props.error
                    ? 'focus:outline-none focus:ring-2 focus:ring-red-500'
                    : 'focus:outline-none focus:ring-2 focus:ring-blue-500'
            }`}
            {...props}
        />
    )
}

const Textarea = (
    props: { error?: boolean } & React.InputHTMLAttributes<HTMLTextAreaElement>,
) => {
    return (
        <textarea
            className={` border border-gray-300 rounded-md p-2 w-full ${
                props.error
                    ? 'focus:outline-none focus:ring-2 focus:ring-red-500'
                    : 'focus:outline-none focus:ring-2 focus:ring-blue-500'
            }`}
            {...props}
        />
    )
}
const Error = ({ children }: { children: React.ReactNode }) => {
    return <p className="text-red-500 text-sm mt-1">{children}</p>
}

const ButtonSubmit = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button
        type="submit"
        className=" cursor-pointer bg-blue-500 mt-5 text-white rounded-md p-2 w-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...props}
    />
)

Form.Field = Field
Form.Input = Input
Form.Textarea = Textarea
Form.ButtonSubmit = ButtonSubmit
Form.Error = Error
