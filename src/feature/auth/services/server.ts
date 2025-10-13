'use server'
import { z } from 'zod'
import { authSchema } from '../schema/schemaAuth'

export async function iniciarSessionConValidacion(
    prevState: any,
    formData: FormData,
) {
    try {
        const data = {
            usuario: formData.get('usuario') as string,
            password: formData.get('password') as string,
        }

        const validatedData = authSchema.parse(data)

        console.log(validatedData)

        return { success: true, errors: null }
    } catch (err) {
        if (err instanceof z.ZodError) {
            // Mapear errores de Zod
            const errorMap: Record<string, string> = {}
            err.issues.forEach((issue) => {
                if (issue.path[0]) {
                    errorMap[issue.path[0] as string] = issue.message
                }
            })
            return { success: false, errors: errorMap }
        }
        return {
            success: false,
            errors: { general: 'Error al iniciar sesión' },
        }
    }
}
