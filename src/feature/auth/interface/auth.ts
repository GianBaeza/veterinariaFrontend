export interface FormField {
    name: string
    label: string
    type: string
    id: number
    col: number | string
}

export interface FormProps {
    formulario: FormField[]
    formAccion: (
        prevState: any,
        formData: FormData,
    ) => Promise<{
        success: boolean
        errors: Record<string, string> | null
    }>
    gridCols?: number | string
    tipoForm?: 'crear' | 'iniciarSession'
}
