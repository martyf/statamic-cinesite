const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        './app/Providers/ViewServiceProvider.php',
        './app/Tags/*.php',
        './resources/**/*.antlers.html',
        './resources/**/*.blade.php',
        './resources/**/*.html',
        './resources/**/*.js',
        './resources/**/*.vue',
        './content/**/*.md',
    ],
    theme: {
        fontFamily: {
            sans: ['Inter', ...defaultTheme.fontFamily.sans],
        },
        extend: {
            colors: {
                gray: colors.zinc,
                orange: {
                    DEFAULT: '#FF5023',
                    50: '#FFE2DB',
                    100: '#FFD2C6',
                    200: '#FFB19D',
                    300: '#FF9175',
                    400: '#FF704C',
                    500: '#FF5023',
                    600: '#EA3000',
                    700: '#B22400',
                    800: '#7A1900',
                    900: '#420D00',
                    950: '#260800'
                },
            },
            gridTemplateColumns: {
                'sessions': 'min-content 1fr'
            },
            minWidth: {
                available: 'stretch'
            },
            screens: {
                '2xl': '1408px',
                '3xl': '1600px',
                '4xl': '1800px'
            },
            typography: {
                DEFAULT: {
                    css: {
                        a: {
                            color: colors.yellow[500],
                            fontWeight: 700,
                            '&:hover': {
                                color: colors.yellow[700],
                                transition: 'color',
                                transitionDuration: '150ms',
                                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                            },
                        },
                        li: {
                            marginBottom: '0',
                            marginTop: '0',
                            '> p': {
                                marginTop: '0.25rem !important',
                                marginBottom: '0.25rem !important'
                            }
                        },
                        'li::before': {
                            top: 'calc(0.9em - 0.275em) !important'
                        },
                        'ul ul': {
                            marginBottom: '0 !important',
                            marginTop: '0 !important'
                        }
                    },
                },
            }

        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
}
