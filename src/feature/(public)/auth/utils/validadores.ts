import z from 'zod'

export const validarEmail = z.object({
    email: z.string().email('Correo electrónico inválido'),
})
