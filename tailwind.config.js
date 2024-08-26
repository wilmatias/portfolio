/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors")

export default {
    content: [
        './index.html', 
        './src/**/*.{vue,js,ts,jsx,tsx}',
        "./node_modules/vue-tailwind-datepicker/**/*.js"
    ],
    darkMode: 'class',
    theme: {
      	extend: {
            colors: {
                'dark-text': '#e4e6eb',
                'dark-text-link': '#f1a802',
                'dark-text-hed': '#808080',

                'dark-bg': '#100f15',
                'dark-bg-sec': '#1b1b23',
                
                'dark-btn': '#f1a802',
            },
        },
    },
    plugins: [],
}

