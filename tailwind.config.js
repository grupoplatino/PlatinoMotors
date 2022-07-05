/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend:{
      fontFamily:{
        'pop': ['Poppins','sans-serif'],
      },
      colors:{
        primary : '#FA2E0A',
        pirmaryScarlet: {
         50  : '#F39A7A',
         100 : '#F38968',
         200 : '#F17854',
         300 : '#EF6642',
         400 : '#EF4F31',
         500 : '#FA2E0A',
         600 : '#E12909',
         700 : '#C82508',
         800 : '#AF2007',
         900 : '#961C06',
        },
  
        secondary: '#050C44',
        secondaryDeepCove: {
          50  : '#6F6885',
          100 : '#5B5676',
          200 : '#494468',
          300 : '#37335A',
          400 : '#25244F',
          500 : '#050C44',
          600 : '#050B3D',
          700 : '#040A36',
          800 : '#040830',
          900 : '#030729',
        },
        
        black:'#091033',
        blackPearl: {
          50 : '#848899',
          100 : '#6B7085',
          200 : '#535870',
          300 : '#3A405C',
          400 : '#222847',
          500 : '#091033',
          600 : '#080E2E',
          700 : '#070D29',
          800 : '#060B24',
          900 : '#050A1F',
        },
        white:'#FFFFFF',
  
        fiord:'#42506E',
        fiord:{
          50  : '#A1A8B7',
          100 : '#8E96A8',
          200 : '#7B859A',
          300 : '#68738B',
          400 : '#55627D',
          500 : '#42506E',
          600 : '#3B4863',
          700 : '#354058',
          800 : '#2E384D',
          900 : '#283042',
        },
        
  
        'bermudaGray':'#6C80AB',
        bermudaGray:{
          50  : '#B6C0D5',
          100 : '#A7B3CD',
          200 : '#98A6C4',
          300 : '#8999BC',
          400 : '#7B8DB3',
          500 : '#6C80AB',
          600 : '#61739A',
          700 : '#566689',
          800 : '#4C5A78',
          900 : '#414D67',
        },
        
        
        lightPlaceHolder:'#E2E6EE',
        otherLight:{
          50  : '#F9FAFC',
          100 : '#F6F8FA',
          200 : '#F1F3F7',
          300 : '#EBEEF3',
          400 : '#E5E9F0',
          500 : '#E2E6EE',
          600 : '#CBCFD6',
          700 : '#B5B8BE',
          800 : '#9EA1A7',
          900 : '#888A8F',
        },
        
  
        success:'#18AD19',
        otherSuccess:{
          50  : '#D1EFD1',
          100 : '#BAE6BA',
          200 : '#8CD68C',
          300 : '#5DC65E',
          400 : '#2FB530',
          500 : '#18AD19',
          600 : '#169C17',
          700 : '#138A14',
          800 : '#117912',
          900 : '#0E680F',
        },
        
  
        background:'#F9FAFC',
        blue: '#1C4ED8',
        startGradiant:'#F72F26',
        endGradiant:'#B50D21',
        extends:{
          backgroundImage: (theme) =>({
            'hero-img': "url('./src/assets/images/landing_hero.jpg')",
          })
        }
      }
    },
    
  },
  plugins: [],
}
