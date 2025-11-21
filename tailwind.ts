const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0F172A',
                    light: '#1E293B',
                    dark: '#0A0E1A',
                },
                secondary: {
                    DEFAULT: '#38BDF8',
                    hover: '#0EA5E9',
                },
                neutral: {
                    light: '#F9FAFB',
                    DEFAULT: '#F3F4F6',
                    dark: '#1E293B',
                },
                success: '#22C55E',
                error: '#EF4444',
            },

            // ✍️ TIPOGRAFÍAS
            fontFamily: {
                inter: [
                    'var(--font-inter)',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'Segoe UI',
                    'Roboto',
                    'sans-serif',
                ],
                sans: [
                    'var(--font-inter)',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'Segoe UI',
                    'Roboto',
                    'sans-serif',
                ],
            },

            // 🔠 TAMAÑOS DE TEXTO (Design tokens)

            // 📏 ESPACIADO PERSONALIZADO
            spacing: {
                xs: '4px',
                sm: '8px',
                md: '16px',
                lg: '24px',
                xl: '32px',
            },

            // 🟣 RADIOS Y SOMBRAS
            borderRadius: {
                sm: '8px',
                md: '12px',
                lg: '20px',
            },
            boxShadow: {
                soft: '0 4px 12px rgba(0, 0, 0, 0.05)',
                medium: '0 6px 20px rgba(0, 0, 0, 0.1)',
            },
        },
    },
    plugins: [],
})
