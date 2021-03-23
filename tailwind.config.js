module.exports = {
  purge: {
    enabled: false,
    content: ['./layouts/**/*.html','./exampleSite/public/**/*.html' ,'./exampleSite/public/*.html' ,'./public/page-components/*.html'],
  },
  theme: {
    extend: {
      colors: {
        poppycolor1: 'var(--poppy-color1)',
        poppycolor2: 'var(--poppy-color2)',
        poppycolor3: 'var(--poppy-color3)',
        poppycolor4: 'var(--poppy-color4)',
        poppycolor5: 'var(--poppy-color5)',
        poppycolor6: 'var(--poppy-color6)',
        poppycolorlight: 'var(--poppy-colorlight)',
        poppycolordark: 'var(--poppy-colordark)',
      },
    },
    fontFamily: {
      display1: "var(--font-display1)",
      display2: "var(--font-display2)",
      body: "var(--font-body)",
      art: "var(--font-art)",
    },
    fontWeights: {
      art: "var(--font-weight-art)",
      body: "var(--font-weight-body)",
      display1: "var(--font-weight-display1)",
      display2: "var(--font-weight-display2)",
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
};
