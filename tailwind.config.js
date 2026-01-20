/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: {
                    deep: '#0F172A',
                    card: '#1E293B',
                    subtle: '#334155',
                },
                primary: '#C084FC',
                secondary: '#818CF8',
                success: '#34D399',
                text: {
                    main: '#F1F5F9',
                    muted: '#94A3B8',
                }
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
            },
            borderRadius: {
                '3xl': '24px',
            }
        },
    },
    plugins: [],
}
