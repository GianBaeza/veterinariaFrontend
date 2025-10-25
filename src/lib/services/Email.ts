import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'

export class EmailService {
    private serviceId: string
    private templateId: string
    private publicKey: string

    constructor() {
        // Las claves deberían estar en tu archivo .env
        this.serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
        this.templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
        this.publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    }

    async sendEmail(
        params: Record<string, unknown>,
    ): Promise<EmailJSResponseStatus> {
        try {
            const response = await emailjs.send(
                this.serviceId,
                this.templateId,
                params,
                {
                    publicKey: this.publicKey,
                },
            )

            console.log('✅ Email enviado:', response.status)
            return response
        } catch (error) {
            console.error('❌ Error al enviar email:', error)
            throw error
        }
    }
}
