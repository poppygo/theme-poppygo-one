module.exports = {
  purge: {
    enabled: true,
    content: ['./layouts/**/*.html'],
  },
  theme: {
    extend: {
      colors: {
        pogocolor1: 'var(--pogo-color-1)',
        pogocolor2: 'var(--pogo-color-2)',
        pogocolor3: 'var(--pogo-color-3)',
        pogocolor4: 'var(--pogo-color-4)',
        pogocolor5: 'var(--pogo-color-5)',
        pogocolor6: 'var(--pogo-color-6)',
      }
    },
    fontFamily: {
      display: "var(--font-display)",
      body: "var(--font-body)"
    },
    fontWeights: {
      normal: "var(--font-weight-normal)",
      display: "var(--font-weight-display)",
      btn: "var(--font-weight-btn)"
    },
    borderRadius: {
      none: "0",
      btn: "var(--rounded-btn)"
    },
  },
  variants: {},
  plugins: []
};
