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
                    deep: 'var(--val-bg-deep)',
                    card: 'var(--val-bg-card)',
                    subtle: 'var(--val-bg-subtle)',
                },
                primary: 'var(--val-primary)',
                secondary: 'var(--val-secondary)',
                success: 'var(--val-success)',
                text: {
                    main: 'var(--val-text-main)',
                    muted: 'var(--val-text-muted)',
                },
                // User Specifics not previously in config but needed
                ring: {
                    active: 'var(--val-ring-active)',
                    inactive: 'var(--val-ring-inactive)',
                },
                gold: {
                    border: 'var(--val-gold-border)',
                },
                dashed: 'var(--val-dashed)',
                block: {
                    text: 'var(--val-text-block)',
                },
                duration: {
                    bg: 'var(--val-duration-bg)',
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
