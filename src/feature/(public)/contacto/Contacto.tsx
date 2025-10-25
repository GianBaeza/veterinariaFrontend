'use client'
import Form from '@/shared/components/form/FormContainer'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ResolverContacto } from './schema/schemaZod'
import { EmailService } from '@/lib/services/Email'
import { customAlert } from '@/shared/components/ui/alert'
import { CheckCheckIcon } from 'lucide-react'
import { DataForm } from './interface/interface'

interface ContactoForm {
    name: 'name' | 'email' | 'message'
    label: string
    type: string
}
const FORM_CONTACTO: ContactoForm[] = [
    { name: 'name', label: 'Nombre', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
]

const DefaultValues = {
    name: '',
    email: '',
    message: '',
}

export default function Contacto() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: DefaultValues,
        resolver: zodResolver(ResolverContacto),
    })

    const onSubmit = async (data: DataForm) => {
        const services = new EmailService()
        const response = await services.sendEmail(
            data as unknown as Record<string, unknown>,
        )
        if (response)
            customAlert(
                'Email enviado correctamente',
                3000,
                <CheckCheckIcon size={16} color="green" />,
            )
    }

    return (
        <div className="w-full h-full flex flex-col items-center justify-center z-10 pt-20">
            <h1 className="text-shadow font-inter font-bold  text-white  text-center text-3xl md:text-4xl lg:text-6xl w-11/12 md:text-center text-shadow-2">
                Contacto
            </h1>
            <Form
                onSubmit={handleSubmit(onSubmit)}
                className=" w-7/12 lg:w-6/12  mt-10"
            >
                {FORM_CONTACTO.map((campo, i) => {
                    return (
                        <Form.Field key={i}>
                            {campo.label}
                            <Form.Input
                                {...campo}
                                {...register(campo.name)}
                                error={!!errors[campo.name]}
                            />
                            {errors[campo.name]?.message && (
                                <Form.Error>
                                    {errors[campo.name]?.message}
                                </Form.Error>
                            )}
                        </Form.Field>
                    )
                })}
                <Form.Field>
                    Mensaje
                    <Form.Textarea
                        autoComplete="off"
                        error={!!errors.message}
                        {...register('message')}
                    />
                    {errors.message?.message && (
                        <Form.Error>{errors.message?.message}</Form.Error>
                    )}
                </Form.Field>

                <Form.ButtonSubmit>Enviar</Form.ButtonSubmit>
            </Form>
        </div>
    )
}
