'use client'
import ContainerRelative from '@/feature/(public)/components/ContainerRelative'
import Contacto from '@/feature/(public)/contacto/Contacto'
import Inicio from '@/feature/(public)/Inicio/Inicio'
import MasInformacion from '@/feature/(public)/masInformacion/MasInformacion'
import CurvedLoop from '@/lib/components/CurvedLoop'

export default function page() {
    return (
        <main className="flex flex-col h-full w-full items-center justify-center gap-0">
            <Inicio />

            <ContainerRelative>
                <MasInformacion />
                <section className="w-full flex flex-col gap-6 justify-center items-center py-5 z-10">
                    <h2 className="font-inter font-bold text-white text-center lg:text-start text-4xl">
                        Veterinarias que usan nuestra plataforma
                    </h2>
                    <span className="bg-trasparent   w-10/12 block h-20 relative overflow-hidden mt-10 ">
                        <CurvedLoop
                            items={[
                                { text: 'Veterinaria Profesional', icon: '' },
                                { text: 'Cuidado Animal', icon: '' },
                                { text: 'Consultas 24/7', icon: '' },
                                { text: 'Cirugías Especializadas', icon: '' },
                                { text: 'Vacunación', icon: '' },
                                { text: 'Emergencias', icon: '' },
                            ]}
                            speed={1}
                            interactive={false}
                        />
                    </span>
                </section>
            </ContainerRelative>
            <Contacto />
        </main>
    )
}
