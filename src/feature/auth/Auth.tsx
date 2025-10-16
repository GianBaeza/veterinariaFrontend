import React from 'react'

import PanelDeFormularios from './components/PanelDeFormularios'

export default function Auth() {
    return (
        <div className="flex items-center justify-center min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden p-4">
            <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl z-10 bg-trasparent">
                {/* <PanelDeBienvenida /> */}
                <PanelDeFormularios />
            </div>
        </div>
    )
}
