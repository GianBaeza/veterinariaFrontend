import { FormField } from '../interface/auth'

export const formulario_externo_regristrar: FormField[] = [
    {
        label: 'Nombre de Usuario',
        name: 'name',
        type: 'text',
        id: 1,
        col: 'col-span-1',
    },
    {
        label: 'DNI',
        name: 'dni',
        type: 'text',
        id: 2,
        col: 'col-span-1',
    },
    {
        label: 'Apellido',
        name: 'surname',
        type: 'text',
        id: 3,
        col: 'col-span-1',
    },
    {
        label: 'Nombre',
        name: 'firstName',
        type: 'text',
        id: 4,
        col: 'col-span-1',
    },
    {
        label: 'Género',
        name: 'gender',
        type: 'text',
        id: 5,
        col: 'col-span-1',
    },
    {
        label: 'Teléfono',
        name: 'phone',
        type: 'tel',
        id: 6,
        col: 'col-span-1',
    },
    {
        label: 'Dirección',
        name: 'address',
        type: 'text',
        id: 7,
        col: 'col-span-2',
    },
    {
        label: 'Email',
        name: 'email',
        type: 'email',
        id: 8,
        col: 'col-span-2',
    },
    {
        label: 'Contraseña',
        name: 'password',
        type: 'password',
        id: 9,
        col: 'col-span-1',
    },
    {
        label: 'Confirmar Contraseña',
        name: 'confirmPassword',
        type: 'password',
        id: 10,
        col: 'col-span-1',
    },
]

export const formulario_externo_iniciarSession: FormField[] = [
    {
        label: 'Usuario',
        name: 'username',
        type: 'text',
        id: 1,
        col: 'col-span-1',
    },
    {
        label: 'Contraseña',
        name: 'password',
        type: 'password',
        id: 2,
        col: 'col-span-1',
    },
]

export const formulario_interno_registrar: FormField[] = [
    { label: 'Nombre', name: 'name', type: 'text', id: 1, col: 'col-span-1' },
    {
        label: 'Apellido',
        name: 'surname',
        type: 'text',
        id: 2,
        col: 'col-span-1',
    },
    {
        label: 'Correo Electrónico',
        name: 'email',
        type: 'email',
        id: 3,
        col: 'col-span-1',
    },
    {
        label: 'Contraseña',
        name: 'password',
        type: 'password',
        id: 4,
        col: 'col-span-1',
    },
]

export const formulario_interno_iniciarSession: FormField[] = [
    {
        label: 'Usuario',
        name: 'username',
        type: 'text',
        id: 1,
        col: 'col-span-1',
    },
    {
        label: 'Contraseña',
        name: 'password',
        type: 'password',
        id: 2,
        col: 'col-span-1',
    },
]
