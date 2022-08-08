const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.{js,jsx}",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        fontFamily: {
            serif: ['Merriweather', 'serif'],
            poppins: ['Poppins', 'sans-serif'],
            charter: ['Charter BT', 'sans-serif'],
        },
        colors: {
            ...colors,
            white: '#FFFFFF',
            black: '#000000',
            light: '#F5F5F5',
            secondary: '#D9D9D9',
            dark: '#18181BFF',
            primary: '#215dd0',
            success: '#52b63d',
            warning: '#c9a939',
            danger: '#dc3b3b',
        },
        fontSize: {
            'xs': '.75rem',
            'sm': '.875rem',
            'base': '1rem',
            'p': '0.87rem',
            'h5': '0.87rem',
            'h4': '0.98rem',
            'h3': '1.1rem',
            'h2': '1.575rem',
            'h1': '1.9rem',
        },

        extend: {

        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}
