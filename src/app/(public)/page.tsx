import ContainerRelative from '@/feature/(public)/components/ContainerRelative'
import Contacto from '@/feature/(public)/contacto/Contacto'
import Descripcion from '@/feature/(public)/descripcion/Descripcion'
import Inicio from '@/feature/(public)/Inicio/Inicio'

export default function page() {
    return (
        <main className="flex flex-col items-center justify-center gap-2">
            <Inicio />

            <ContainerRelative>
                <Descripcion />
                <Contacto />
            </ContainerRelative>
        </main>
    )
}
