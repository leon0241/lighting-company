// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    "dist": "/",
    "src": "/"
  },
  plugins: [
    '@snowpack/plugin-sass',
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  devOptions: {
    port: 9009
  },
  buildOptions: {
    baseUrl: './',
    out: 'dist',
  },
  optimize: {
    bundle: true,
    minify: true,
    treeshake: true,
    target: 'es2018',
  },
};
