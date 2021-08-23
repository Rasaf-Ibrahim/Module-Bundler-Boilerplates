module.exports = {
  mode: 'jit',


  purge: ['./index.html', './src/index.html', './src/**/*.{html,js,ts,jsx,tsx,vue}'],

  // purge: {
  //   content: [
  //     `components/**/*.{vue,js}`,
  //     `layouts/**/*.vue`,
  //     `pages/**/*.vue`,
  //     `plugins/**/*.{js,ts}`,
  //     `nuxt.config.{js,ts}`
  //   ]
  // },


  darkMode: 'class', // or 'media' or 'class'

  theme: {






    /*  
    
    --- TABLE OF CONTENTS ---   (Search with following keywords)
   
   
   
     **backgroundColor**
   
     **textColor**
   
     **borderColor**
   
     **breakpoints**
   
     **fontFamily**
   
     **padding,margin,height,width**
   
     *** maxWidth  ***
   
     *** minHeight  ***
   
    
   
   
   
   
    */





    /* **breakpoints** */

    screens: {
      'sm': '688px',

      'md': '688px',

      'lg': '1024px',

      'xl': '1360px',

      '2xl': '1696px',


      //  (320x2)+(16x3) = 688px
      //  (320x3)+(16x4) = 1024px
      //  (320x4)+(16x5) = 1360px
      //  (320x5)+(16x6) = 1696px


      /* According to tailwind CSS documentation, sm and md breakpoints are respectively  640px and 768px. That means the values of sm and md breakpoints are close. I don't want separate values for sm and md breakpoints. So, using same value for both sm and md breakpoint.*/


      /* We have defined style for breakpoints is in the 'theme.screens' section of our tailwind.config.js file. Because we don't want to extend breakpoints style. But we will extend every other style. */



    },





    extend: {

      /* **backgroundColor** */

      backgroundColor: {

        //  surface color

        s: {

          t1a1: 'var(--surface-type-1-alpha-1)',
          t1a2: 'var(--surface-type-1-alpha-2)',
          t1a3: 'var(--surface-type-1-alpha-3)',
          t1a4: 'var(--surface-type-1-alpha-4)',
          t1a5: 'var(--surface-type-1-alpha-5)',


          t2a1: 'var(--surface-type-2-alpha-1)',
          t2a2: 'var(--surface-type-2-alpha-2)',
          t2a3: 'var(--surface-type-2-alpha-3)',
          t2a4: 'var(--surface-type-2-alpha-4)',
          t2a5: 'var(--surface-type-2-alpha-5)',

        },



        //  brand color

        b: {

          t1l1a1: 'var(--brand-type-1-layer-1-alpha-1)',
          t1l1a2: 'var(--brand-type-1-layer-1-alpha-2)',
          t1l1a3: 'var(--brand-type-1-layer-1-alpha-3)',

          t1l2a1: 'var(--brand-type-1-layer-2-alpha-1)',
          t1l2a2: 'var(--brand-type-1-layer-2-alpha-2)',
          t1l2a3: 'var(--brand-type-1-layer-2-alpha-3)',





          t2l1a1: 'var(--brand-type-2-layer-1-alpha-1)',
          t2l1a2: 'var(--brand-type-2-layer-1-alpha-2)',
          t2l1a3: 'var(--brand-type-2-layer-1-alpha-3)',

          t2l2a1: 'var(--brand-type-2-layer-2-alpha-1)',
          t2l2a2: 'var(--brand-type-2-layer-2-alpha-2)',
          t2l2a3: 'var(--brand-type-2-layer-2-alpha-3)',


        },


        //  specific color

        red: {

          l1a1: 'var(--red-layer-1-alpha-1)',
          l1a2: 'var(--red-layer-1-alpha-2)',
          l1a3: 'var(--red-layer-1-alpha-3)',


          l2a1: 'var(--red-layer-2-alpha-1)',
          l2a2: 'var(--red-layer-2-alpha-2)',
          l2a3: 'var(--red-layer-2-alpha-3)',


        },


        green: {

          l1a1: 'var(--green-layer-1-alpha-1)',
          l1a2: 'var(--green-layer-1-alpha-2)',
          l1a3: 'var(--green-layer-1-alpha-3)',


          l2a1: 'var(--green-layer-2-alpha-1)',
          l2a2: 'var(--green-layer-2-alpha-2)',
          l2a3: 'var(--green-layer-2-alpha-3)',


        },


        blue: {

          l1a1: 'var(--blue-layer-1-alpha-1)',
          l1a2: 'var(--blue-layer-1-alpha-2)',
          l1a3: 'var(--blue-layer-1-alpha-3)',


          l2a1: 'var(--blue-layer-2-alpha-1)',
          l2a2: 'var(--blue-layer-2-alpha-2)',
          l2a3: 'var(--blue-layer-2-alpha-3)',

        },


        yellow: {

          l1a1: 'var(--yellow-layer-1-alpha-1)',
          l1a2: 'var(--yellow-layer-1-alpha-2)',
          l1a3: 'var(--yellow-layer-1-alpha-3)',


          l2a1: 'var(--yellow-layer-2-alpha-1)',
          l2a2: 'var(--yellow-layer-2-alpha-2)',
          l2a3: 'var(--yellow-layer-2-alpha-3)',


        },



      },



      /* **textColor** */

      textColor: {

        //  default color

        l1: {

          a1: 'var(--layer-1-alpha-1)',
          a2: 'var(--layer-1-alpha-2)',
          a3: 'var(--layer-1-alpha-3)',

        },


        l2: {

          a1: 'var(--layer-2-alpha-1)',
          a2: 'var(--layer-2-alpha-2)',
          a3: 'var(--layer-2-alpha-3)',

        },


        //  brand color

        b: {

          t1l1a1: 'var(--brand-type-1-layer-1-alpha-1)',
          t1l1a2: 'var(--brand-type-1-layer-1-alpha-2)',
          t1l1a3: 'var(--brand-type-1-layer-1-alpha-3)',

          t1l2a1: 'var(--brand-type-1-layer-2-alpha-1)',
          t1l2a2: 'var(--brand-type-1-layer-2-alpha-2)',
          t1l2a3: 'var(--brand-type-1-layer-2-alpha-3)',





          t2l1a1: 'var(--brand-type-2-layer-1-alpha-1)',
          t2l1a2: 'var(--brand-type-2-layer-1-alpha-2)',
          t2l1a3: 'var(--brand-type-2-layer-1-alpha-3)',

          t2l2a1: 'var(--brand-type-2-layer-2-alpha-1)',
          t2l2a2: 'var(--brand-type-2-layer-2-alpha-2)',
          t2l2a3: 'var(--brand-type-2-layer-2-alpha-3)',


        },








        //  specific color

        red: {

          l1a1: 'var(--red-layer-1-alpha-1)',
          l1a2: 'var(--red-layer-1-alpha-2)',
          l1a3: 'var(--red-layer-1-alpha-3)',


          l2a1: 'var(--red-layer-2-alpha-1)',
          l2a2: 'var(--red-layer-2-alpha-2)',
          l2a3: 'var(--red-layer-2-alpha-3)',


        },


        green: {

          l1a1: 'var(--green-layer-1-alpha-1)',
          l1a2: 'var(--green-layer-1-alpha-2)',
          l1a3: 'var(--green-layer-1-alpha-3)',


          l2a1: 'var(--green-layer-2-alpha-1)',
          l2a2: 'var(--green-layer-2-alpha-2)',
          l2a3: 'var(--green-layer-2-alpha-3)',


        },

        blue: {

          l1a1: 'var(--blue-layer-1-alpha-1)',
          l1a2: 'var(--blue-layer-1-alpha-2)',
          l1a3: 'var(--blue-layer-1-alpha-3)',


          l2a1: 'var(--blue-layer-2-alpha-1)',
          l2a2: 'var(--blue-layer-2-alpha-2)',
          l2a3: 'var(--blue-layer-2-alpha-3)',


        },

        yellow: {

          l1a1: 'var(--yellow-layer-1-alpha-1)',
          l1a2: 'var(--yellow-layer-1-alpha-2)',
          l1a3: 'var(--yellow-layer-1-alpha-3)',


          l2a1: 'var(--yellow-layer-2-alpha-1)',
          l2a2: 'var(--yellow-layer-2-alpha-2)',
          l2a3: 'var(--yellow-layer-2-alpha-3)',


        },


        //  surface color  (Just for SVG)

        s: {

          t1a1: 'var(--surface-type-1-alpha-1)',
          t1a2: 'var(--surface-type-1-alpha-2)',
          t1a3: 'var(--surface-type-1-alpha-3)',
          t1a4: 'var(--surface-type-1-alpha-4)',
          t1a5: 'var(--surface-type-1-alpha-5)',


          t2a1: 'var(--surface-type-2-alpha-1)',
          t2a2: 'var(--surface-type-2-alpha-2)',
          t2a3: 'var(--surface-type-2-alpha-3)',
          t2a4: 'var(--surface-type-2-alpha-4)',
          t2a5: 'var(--surface-type-2-alpha-5)',

        },



      },


      /* **brandColor** */

      borderColor: {


        // surface color

        s: {

          t1a1: 'var(--surface-type-1-alpha-1)',
          t1a2: 'var(--surface-type-1-alpha-2)',
          t1a3: 'var(--surface-type-1-alpha-3)',
          t1a4: 'var(--surface-type-1-alpha-4)',
          t1a5: 'var(--surface-type-1-alpha-5)',


          t2a1: 'var(--surface-type-2-alpha-1)',
          t2a2: 'var(--surface-type-2-alpha-2)',
          t2a3: 'var(--surface-type-2-alpha-3)',
          t2a4: 'var(--surface-type-2-alpha-4)',
          t2a5: 'var(--surface-type-2-alpha-5)',

        },



        //  brand color

        brand: {
          /* can't name it 'b'. Because that  will clash with 'border bottom'. So, we've named it 'brand' instead of 'b' */

          t1l1a1: 'var(--brand-type-1-layer-1-alpha-1)',
          t1l1a2: 'var(--brand-type-1-layer-1-alpha-2)',
          t1l1a3: 'var(--brand-type-1-layer-1-alpha-3)',

          t1l2a1: 'var(--brand-type-1-layer-2-alpha-1)',
          t1l2a2: 'var(--brand-type-1-layer-2-alpha-2)',
          t1l2a3: 'var(--brand-type-1-layer-2-alpha-3)',





          t2l1a1: 'var(--brand-type-2-layer-1-alpha-1)',
          t2l1a2: 'var(--brand-type-2-layer-1-alpha-2)',
          t2l1a3: 'var(--brand-type-2-layer-1-alpha-3)',

          t2l2a1: 'var(--brand-type-2-layer-2-alpha-1)',
          t2l2a2: 'var(--brand-type-2-layer-2-alpha-2)',
          t2l2a3: 'var(--brand-type-2-layer-2-alpha-3)',


        },









        //  specific color

        red: {

          l1a1: 'var(--red-layer-1-alpha-1)',
          l1a2: 'var(--red-layer-1-alpha-2)',
          l1a3: 'var(--red-layer-1-alpha-3)',


          l2a1: 'var(--red-layer-2-alpha-1)',
          l2a2: 'var(--red-layer-2-alpha-2)',
          l2a3: 'var(--red-layer-2-alpha-3)',


        },


        green: {

          l1a1: 'var(--green-layer-1-alpha-1)',
          l1a2: 'var(--green-layer-1-alpha-2)',
          l1a3: 'var(--green-layer-1-alpha-3)',


          l2a1: 'var(--green-layer-2-alpha-1)',
          l2a2: 'var(--green-layer-2-alpha-2)',
          l2a3: 'var(--green-layer-2-alpha-3)',


        },

        blue: {

          l1a1: 'var(--blue-layer-1-alpha-1)',
          l1a2: 'var(--blue-layer-1-alpha-2)',
          l1a3: 'var(--blue-layer-1-alpha-3)',


          l2a1: 'var(--blue-layer-2-alpha-1)',
          l2a2: 'var(--blue-layer-2-alpha-2)',
          l2a3: 'var(--blue-layer-2-alpha-3)',


        },


        yellow: {

          l1a1: 'var(--yellow-layer-1-alpha-1)',
          l1a2: 'var(--yellow-layer-1-alpha-2)',
          l1a3: 'var(--yellow-layer-1-alpha-3)',


          l2a1: 'var(--yellow-layer-2-alpha-1)',
          l2a2: 'var(--yellow-layer-2-alpha-2)',
          l2a3: 'var(--yellow-layer-2-alpha-3)',


        },




      },










      /* **fontFamily** */


      fontFamily: {
        'regularem': ['Lato', 'sans-serif'],
        'regular-space': ['Roboto Mono', 'monospace'],
        'cursive-1': ['Lobster Two', 'cursive'],
        'cursive-2': ['Kaushan Script', 'cursive'],
        'cursive-3': ['Yatra One', 'cursive'],
        'cursive-4': ['Train One', 'cursive'],
        'handwriting': ['Indie Flower', 'cursive'],
        'bangla-cursive': ['Atma', 'cursive'],
        // Use 'Lato' to write any language's regular writing.
        // 'lobster-two' in italic format looks better.  
      },



      /* **padding,margin,height,width** */


      spacing: {

        '0px': '0rem',
        '2px': '0.125rem',
        '4px': '0.25rem',
        '6px': '0.375rem',
        '8px': '0.5rem',
        '10px': '0.625rem',
        '12px': '0.75rem',
        '14px': '0.875rem',


        '1rem': '1rem', //16px
        '1.25rem': '1.25rem',
        '1.5rem': '1.5rem',
        '1.75rem': '1.75rem',


        '2rem': '2rem',
        '2.25rem': '2.25rem',
        '2.5rem': '2.5rem',
        '2.75rem': '2.75rem',


        '3rem': '3rem',
        '3.5rem': '3.5rem',


        '4rem': '4rem',
        '5rem': '5rem',
        '6rem': '6rem',
        '7rem': '7rem',
        '8rem': '8rem',
        '9rem': '9rem',
        '10rem': '10rem',

        '11rem': '11rem',
        '12rem': '12rem',
        '13rem': '13rem',
        '14rem': '14rem',
        '15rem': '15rem',
        '16rem': '16rem',
        '17rem': '16rem',
        '18rem': '18rem',
        '19rem': '19rem',
        '20rem': '20rem',

        '21rem': '21rem',
        '22rem': '22rem',
        '23rem': '23rem',
        '24rem': '24rem',
        '25rem': '25rem',
        '26rem': '26rem',
        '27rem': '27rem',
        '28rem': '28rem',
        '29rem': '29rem',
        '30rem': '30rem',

        '31rem': '31rem',
        '32rem': '32rem',
        '33rem': '33rem',
        '34rem': '34rem',
        '35rem': '35rem',
        '36rem': '36rem',
        '37rem': '37rem',
        '38rem': '38rem',
        '39rem': '39rem',
        '40rem': '40rem',

        '41rem': '41rem',
        '42rem': '42rem',
        '43rem': '43rem',
        '44rem': '44rem',
        '45rem': '45rem',
        '46rem': '46rem',
        '47rem': '47rem',
        '48rem': '48rem',
        '49rem': '49rem',
        '50rem': '50rem',


        '51rem': '51rem',
        '52rem': '52rem',
        '53rem': '53rem',
        '54rem': '54rem',
        '55rem': '55rem',
        '56rem': '56rem',
        '57rem': '57rem',
        '58rem': '58rem',
        '59rem': '59rem',
        '60rem': '60rem',


        '61rem': '61rem',
        '62rem': '62rem',
        '63rem': '63rem',
        '64rem': '64rem',
        '65rem': '65rem',
        '66rem': '66rem',
        '67rem': '67rem',
        '68rem': '68rem',
        '69rem': '69rem',
        '70rem': '70rem',


        '71rem': '71rem',
        '72rem': '72rem',
        '73rem': '73rem',
        '74rem': '74rem',
        '75rem': '75rem',
        '76rem': '76rem',
        '77rem': '77rem',
        '78rem': '78rem',
        '79rem': '79rem',
        '80rem': '80rem',

      },




      // Max-width

      maxWidth: {
        '25%': '25%',
        '40%': "40%",
        '50%': '50%',
        '60%': '60%',
        '75%': '75%',
        '90%': '90%',
        '98%': '98%',


        '11rem': '11rem',
        '12rem': '12rem',
        '13rem': '13rem',
        '14rem': '14rem',
        '15rem': '15rem',
        '16rem': '16rem',
        '17rem': '17rem',
        '18rem': '18rem',
        '19rem': '19rem',
        '20rem': '20rem',

        '21rem': '21rem',
        '22rem': '22rem',
        '23rem': '23rem',
        '24rem': '24rem',
        '25rem': '25rem',
        '26rem': '26rem',
        '27rem': '27rem',
        '28rem': '28rem',
        '29rem': '29rem',
        '30rem': '30rem',

        '31rem': '31rem',
        '32rem': '32rem',
        '33rem': '33rem',
        '34rem': '34rem',
        '35rem': '35rem',
        '36rem': '36rem',
        '37rem': '37rem',
        '38rem': '38rem',
        '39rem': '39rem',
        '40rem': '40rem',

        '41rem': '41rem',
        '42rem': '42rem',
        '43rem': '43rem',
        '44rem': '44rem',
        '45rem': '45rem',
        '46rem': '46rem',
        '47rem': '47rem',
        '48rem': '48rem',
        '49rem': '49rem',
        '50rem': '50rem',


        '51rem': '51rem',
        '52rem': '52rem',
        '53rem': '53rem',
        '54rem': '54rem',
        '55rem': '55rem',
        '56rem': '56rem',
        '57rem': '57rem',
        '58rem': '58rem',
        '59rem': '59rem',
        '60rem': '60rem',


        '61rem': '61rem',
        '62rem': '62rem',
        '63rem': '63rem',
        '64rem': '64rem',
        '65rem': '65rem',
        '66rem': '66rem',
        '67rem': '67rem',
        '68rem': '68rem',
        '69rem': '69rem',
        '70rem': '70rem',


        '71rem': '71rem',
        '72rem': '72rem',
        '73rem': '73rem',
        '74rem': '74rem',
        '75rem': '75rem',
        '76rem': '76rem',
        '77rem': '77rem',
        '78rem': '78rem',
        '79rem': '79rem',
        '80rem': '80rem',


      },



      // Min-width

      minWidth: {
        '25%': '25%',
        '40%': "40%",
        '50%': '50%',
        '60%': '60%',
        '75%': '75%',
        '90%': '90%',
        '98%': '98%',


        '11rem': '11rem',
        '12rem': '12rem',
        '13rem': '13rem',
        '14rem': '14rem',
        '15rem': '15rem',
        '16rem': '16rem',
        '17rem': '16rem',
        '18rem': '18rem',
        '19rem': '19rem',
        '20rem': '20rem',

        '21rem': '21rem',
        '22rem': '22rem',
        '23rem': '23rem',
        '24rem': '24rem',
        '25rem': '25rem',
        '26rem': '26rem',
        '27rem': '27rem',
        '28rem': '28rem',
        '29rem': '29rem',
        '30rem': '30rem',

        '31rem': '31rem',
        '32rem': '32rem',
        '33rem': '33rem',
        '34rem': '34rem',
        '35rem': '35rem',
        '36rem': '36rem',
        '37rem': '37rem',
        '38rem': '38rem',
        '39rem': '39rem',
        '40rem': '40rem',

        '41rem': '41rem',
        '42rem': '42rem',
        '43rem': '43rem',
        '44rem': '44rem',
        '45rem': '45rem',
        '46rem': '46rem',
        '47rem': '47rem',
        '48rem': '48rem',
        '49rem': '49rem',
        '50rem': '50rem',


        '51rem': '51rem',
        '52rem': '52rem',
        '53rem': '53rem',
        '54rem': '54rem',
        '55rem': '55rem',
        '56rem': '56rem',
        '57rem': '57rem',
        '58rem': '58rem',
        '59rem': '59rem',
        '60rem': '60rem',


        '61rem': '61rem',
        '62rem': '62rem',
        '63rem': '63rem',
        '64rem': '64rem',
        '65rem': '65rem',
        '66rem': '66rem',
        '67rem': '67rem',
        '68rem': '68rem',
        '69rem': '69rem',
        '70rem': '70rem',


        '71rem': '71rem',
        '72rem': '72rem',
        '73rem': '73rem',
        '74rem': '74rem',
        '75rem': '75rem',
        '76rem': '76rem',
        '77rem': '77rem',
        '78rem': '78rem',
        '79rem': '79rem',
        '80rem': '80rem',


      },

      //  Min-Height
      minHeight: {
        '1.5rem': '1.5rem',
        '1.75rem': '1.75rem',
        '2rem': '2rem',


        '25%': '25%',
        '50%': '50%',
        '75%': '75%',
        'full': '100%',
      }



    },
  },

  

  plugins: [],
}