const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
module.exports = {
  plugins: {
    cssnano: process.env.NODE_ENV === "production" ? {} : false,
  },
}
