/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#040914',
          900: '#0A192F', // Primary brand deep navy (from logo mark)
          850: '#0D2040',
          800: '#112A4F',
          700: '#1A365D',
          600: '#234E70',
          500: '#2B6CB0',
          100: '#E2E8F0',
          50: '#F1F5F9',
        },
        gold: {
          50: '#FFFDF5',
          100: '#FEF9E7',
          200: '#FDECB4',
          300: '#FCD87D',
          400: '#F5C142',
          500: '#D4AF37', // Brand accent metallic gold
          600: '#B89326',
          700: '#947217',
          800: '#755610',
          900: '#5A400B',
        },
        cream: {
          50: '#FDFBF7', // Warm off-white background from brief
          100: '#FAF7F2',
          200: '#F4EFE6',
          300: '#EBE3D5',
        },
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.25)',
        'navy-card': '0 10px 30px -10px rgba(10, 25, 47, 0.08)',
        'luxury': '0 20px 40px -15px rgba(10, 25, 47, 0.12)',
      },
    },
  },
  plugins: [],
}
