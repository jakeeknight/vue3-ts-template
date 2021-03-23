// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@/assets/scss/_variables.scss";`,
      },
    },
    configureWebpack: {
      output: {
        crossOriginLoading: "anonymous",
      },
    },
  },
};
