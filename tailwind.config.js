const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.{js,jsx}",
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
        extend: {

        },
    },
}
