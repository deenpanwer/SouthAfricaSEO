// tailwind.config.js
import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                },
                sidebar: {
                    DEFAULT: 'hsl(var(--sidebar-background))',
                    foreground: 'hsl(var(--sidebar-foreground))',
                    primary: 'hsl(var(--sidebar-primary))',
                    'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
                    accent: 'hsl(var(--sidebar-accent))',
                    'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
                    border: 'hsl(var(--sidebar-border))',
                    ring: 'hsl(var(--sidebar-ring))'
                },
                // EnviroPainting Theme
                'enviro-background': 'hsl(var(--enviro-background))',
                'enviro-text': 'hsl(var(--enviro-text))',
                'enviro-green': 'hsl(var(--enviro-green))',
                'enviro-pink': 'hsl(var(--enviro-pink))',
                'enviro-card-background': 'hsl(var(--enviro-card-background))',
                // Palantir-inspired theme colors
                'ph-black': '#000000',
                'ph-dark-gray': '#111111',
                'ph-white': '#FFFFFF',
                'ph-light-gray': '#AAAAAA',
                'ph-accent': '#00BFFF',
                'ph-border': '#333333',
                'ph-translucent-white': 'rgba(255, 255, 255, 0.1)', // Translucent white for header
                'ph-menu-overlay': 'rgba(0, 0, 0, 1)', // Pitch black for menu overlay
                // Linkinator Custom Colors
                "primary-orange": "#E67E22", // Your chosen orange
                "success-green": "#2ECC71",
                "error-red": "#E74C3C",
                "warning-yellow": "#F1C40F",
            },
            fontFamily: {
              sans: ['var(--font-geist-sans)', 'sans-serif'],
              poppins: ['var(--font-poppins)', 'sans-serif'],
              playfair: ['var(--font-playfair)', 'serif'],
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            keyframes: {
                'accordion-down': {
                    from: {
                        height: '0'
                    },
                    to: {
                        height: 'var(--radix-accordion-content-height)'
                    }
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)'
                    },
                    to: {
                        height: '0'
                    }
                },
                'fade-in': {
                  'from': { opacity: '0' },
                  'to': { opacity: '1' },
                },
                'pulse-dot': {
                  '0%, 80%, 100%': { transform: 'scale(0.5)', opacity: '0.5' },
                  '40%': { transform: 'scale(1)', opacity: '1' },
                },
                'animated-gradient': {
                  '0%': { 'background-position': '0% 50%' },
                  '50%': { 'background-position': '100% 50%' },
                  '100%': { 'background-position': '0% 50%' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.5s ease-out',
                'pulse-dot': 'pulse-dot 1.2s infinite ease-in-out',
                'animated-gradient': 'animated-gradient 3s ease-in-out infinite',
            },
            // --- START OF TYPOGRAPHY EXTENSION FOR TABLES ---
            typography: ({ theme }: { theme: any }) => ({
                DEFAULT: {
                    css: {
                        // General Prose styles (keep your existing or add more if needed)
                        // For example, you might want to ensure headings match your foreground color:
                        // 'h1, h2, h3, h4, h5, h6': {
                        //   color: theme('colors.foreground'),
                        // },
                        // a: {
                        //   color: theme('colors.primary.DEFAULT'),
                        //   '&:hover': {
                        //     color: theme('colors.primary.foreground'),
                        //   },
                        // },
                        // strong: {
                        //   color: theme('colors.foreground'),
                        // },

                        // Table specific styles for Markdown tables
                        table: {
                            width: '100%',
                            'border-collapse': 'collapse', // Ensures borders merge nicely
                            'margin-top': theme('spacing.8'),
                            'margin-bottom': theme('spacing.8'),
                            'font-size': theme('fontSize.sm'), // Slightly smaller font for table content
                            'line-height': theme('lineHeight.normal'),
                            'text-align': 'left', // Ensures text aligns left by default
                            'border-radius': theme('borderRadius.md'), // Applies rounded corners to the table
                            'overflow': 'hidden', // Crucial to make border-radius work with borders
                            'box-shadow': theme('boxShadow.sm'), // Optional: Adds a subtle shadow
                        },
                        thead: {
                            'border-bottom': `2px solid ${theme('colors.border')}`, // Uses your theme's border color
                            'vertical-align': 'bottom',
                        },
                        'thead th': {
                            'font-weight': theme('fontWeight.semibold'),
                            'padding-top': theme('spacing.3'),
                            'padding-bottom': theme('spacing.3'),
                            'padding-left': theme('spacing.4'),
                            'padding-right': theme('spacing.4'),
                            'background-color': theme('colors.muted.DEFAULT'), // Uses your muted background for header
                            'color': theme('colors.muted.foreground'), // Uses your muted foreground for header text
                            'white-space': 'nowrap', // Tries to keep header text on one line
                        },
                        'tbody tr': {
                            'border-bottom': `1px solid ${theme('colors.border')}`, // Uses your theme's border color for row dividers
                        },
                        'tbody tr:last-child': {
                            'border-bottom-width': '0px', // Removes the border from the very last row
                        },
                        'tbody td': {
                            'padding-top': theme('spacing.3'),
                            'padding-bottom': theme('spacing.3'),
                            'padding-left': theme('spacing.4'),
                            'padding-right': theme('spacing.4'),
                            'vertical-align': 'top', // Aligns cell content to the top
                        },
                        // Dark mode adjustments for tables
                        '.dark &': {
                            thead: {
                                'border-bottom-color': theme('colors.border'), // Dark mode border color
                            },
                            'thead th': {
                                'background-color': theme('colors.card.DEFAULT'), // Dark mode header background
                                'color': theme('colors.card.foreground'), // Dark mode header text color
                            },
                            'tbody tr': {
                                'border-bottom-color': theme('colors.border'), // Dark mode row border
                            },
                        },
                    },
                },
            }),
            // --- END OF TYPOGRAPHY EXTENSION FOR TABLES ---
        }
    },
    plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;