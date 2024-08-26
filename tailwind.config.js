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
                'custom-primaryBG': '#fff',
                'custom-secondaryBG': '#f4f6f8',
                
                'custom-primaryTEXT': '#666',
                'custom-secondaryTEXT': '#333',
                'custom-darkmode': '#fef',

                'custom-fontSizeSM': '12px',
                'custom-fontSizeMD': '16px',
                'custom-fontSizeLG': '20px',
            },
        },
    },
    plugins: [],
}

