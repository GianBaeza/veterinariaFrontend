import { EmailService } from '@/lib/services/Email'
import Form from '@/shared/components/form/FormContainer'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { Fragment } from 'react'
import { DataForm } from '../interface/interface'
import { customAlert } from '@/shared/components/ui/alert'
import { CheckCheckIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { ResolverContacto } from '../schema/schemaZod'

const DefaultValues = {
    name: '',
    email: '',
    message: '',
}

export default function Formulario() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: DefaultValues,
        resolver: zodResolver(ResolverContacto),
    })

    const onSubmit = async (data: DataForm) => {
        const services = new EmailService()
        const response = await services.sendEmail(
            data as unknown as Record<string, unknown>,
        )
        if (response) {
            customAlert(
                'Email enviado correctamente',
                3000,
                <CheckCheckIcon size={16} color="green" />,
            )
            reset()
        }
    }

    return (
        <Fragment>
            <article className="w-full max-w-[550px] bg-white shadow-2xl rounded-2xl px-8 py-12 flex flex-col mx-auto border border-gray-100">
                <h2 className="font-inter font-bold text-gray-800 text-center text-3xl md:text-4xl mb-8">
                    Contacto
                </h2>

                <Form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full flex flex-col gap-6"
                >
                    {/* Campo Nombre */}
                    <Form.Field>
                        <label className="block text-gray-700 font-semibold mb-2 text-sm">
                            Nombre
                        </label>
                        <Form.Input
                            type="text"
                            placeholder="Ingresa tu nombre"
                            {...register('name')}
                            error={!!errors.name}
                        />
                        {errors.name?.message && (
                            <Form.Error>{errors.name.message}</Form.Error>
                        )}
                    </Form.Field>

                    {/* Campo Email */}
                    <Form.Field>
                        <label className="block text-gray-700 font-semibold mb-2 text-sm">
                            Email
                        </label>
                        <Form.Input
                            type="email"
                            placeholder="tu@email.com"
                            {...register('email')}
                            error={!!errors.email}
                        />
                        {errors.email?.message && (
                            <Form.Error>{errors.email.message}</Form.Error>
                        )}
                    </Form.Field>

                    {/* Campo Mensaje */}
                    <Form.Field>
                        <label className="block text-gray-700 font-semibold mb-2 text-sm">
                            Mensaje
                        </label>
                        <Form.Textarea
                            placeholder="Escribe tu mensaje aquí..."
                            autoComplete="off"
                            error={!!errors.message}
                            {...register('message')}
                        />
                        {errors.message?.message && (
                            <Form.Error>{errors.message.message}</Form.Error>
                        )}
                    </Form.Field>

                    {/* Botón Enviar */}
                    <Form.ButtonSubmit>Enviar Mensaje</Form.ButtonSubmit>
                </Form>
            </article>
        </Fragment>
    )
}
