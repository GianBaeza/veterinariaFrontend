import { EmailService } from '@/lib/services/Email'
import Form from '@/shared/components/form/FormContainer'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { Fragment } from 'react'
import { DataForm } from '../interface/interface'
import { customAlert } from '@/shared/components/ui/alert'
import { CheckCheckIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { ResolverContacto } from '../schema/schemaZod'
interface ContactoForm {
    name: 'name' | 'email' | 'message'
    label: string
    type: string
}
const FORM_CONTACTO: ContactoForm[] = [
    { name: 'name', label: 'Nombre', type: 'text' },
    { name: 'apellido', label: 'Apellido', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
]

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
        <Fragment>
            <article className="w-6/12  card-contacto  max-w-[400px] h-fit bg-white relative  bottom-16 py-10 gap-5   rounded-2xl flex flex-col items-center justify-center">
                <h2 className="text-shadow font-inter font-bold  text-gray-800  text-center text-2xl md:text-4xl  w-11/12 md:text-center text-shadow-2">
                    Contacto
                </h2>
                <Form
                    onSubmit={handleSubmit(onSubmit)}
                    className=" w-11/12 flex flex-col gap-4 "
                >
                    {FORM_CONTACTO.slice(0, 2).map((campo, i) => {
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
                    {FORM_CONTACTO.slice(2).map((campo, i) => {
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
            </article>
        </Fragment>
    )
}
