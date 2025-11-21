export const enviarMensajeContacto = async (data: FormData) => {
    const name = data.get('name') as string
    const email = data.get('email') as string
    const message = data.get('message') as string

    console.log({ name, email, message })

    // Aquí puedes agregar la lógica para enviar el mensaje
}
