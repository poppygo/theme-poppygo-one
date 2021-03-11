module.exports = {
  purge: {
  //  content: ['./layouts/**/*.html'],
  },
  theme: {
    extend: {
      colors: {
        poppycolor1: 'var(--poppy-color-1)',
        poppycolor2: 'var(--poppy-color-2)',
        poppycolor3: 'var(--poppy-color-3)',
        poppycolor4: 'var(--poppy-color-4)',
        poppycolor5: 'var(--poppy-color-5)',
        poppycolor6: 'var(--poppy-color-6)',
      }
    },
    fontFamily: {
      display: "var(--font-display)",
      body: "var(--font-body)"
    },
    fontWeights: {
      normal: "var(--font-weight-normal)",
      display: "var(--font-weight-display)",
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
};
