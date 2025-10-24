import ContainerRelative from '@/feature/(public)/components/ContainerRelative'
import Contacto from '@/feature/(public)/contacto/Contacto'
import Inicio from '@/feature/(public)/Inicio/Inicio'
import MasInformacion from '@/feature/(public)/masInformacion/MasInformacion'

export default function page() {
    return (
        <main className="flex flex-col items-center justify-center gap-2">
            <Inicio />

            <ContainerRelative>
                <MasInformacion />
                <Contacto />
            </ContainerRelative>
        </main>
    )
}
