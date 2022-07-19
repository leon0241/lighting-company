// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  // Source locations to build files from
  mount: {
    // Input folder : Output Folder (Relative to buildOptions.out)
    "src": "/"
  },

  // Additional plugins apart from JS/TS
  plugins: [
    [
      '@snowpack/plugin-sass',
      {
        compilerOptions: {
          sourceMap: true,
          embedSourceMap: true,
        }
      }
    ]
  ],

  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },

  // Development Server options
  devOptions: {
    // Port to open dev server on (can always be changed)
    port: 9009
  },

  // Build options 
  buildOptions: {
    // Output folder relative to root
    out: 'dist',
    sourcemap: true,
  },

  // Build optimisations
  optimize: {
    // Bundle multiple JS files into one
    bundle: true,

    // Minify the files
    minify: true,

    // Source map (links minified JS to the properly formatted one)
    sourcemap: 'external',

    // Removes unnceccesary classes and stuff
    treeshake: true,

    // Target ECMAScript version (doesn't really matter)
    target: 'es2018',
  },
};
