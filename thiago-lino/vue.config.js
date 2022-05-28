module.exports = {
  css: {
    loaderOptions: {
      less: {
        additionalData: `@import "@/assets/css/variables.less";`,
      },
    },
  },
  chainWebpack: (config) => {
    config.module.rules.delete("svg");
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: "vue-svg-loader",
        },
      ],
    },
  },
}
