module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ["vue-style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.svg$/,
        use: ["babel-loader", "vue-svg-loader"],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "file-loader",
          },
          {
            loader: "svgo-loader",
            options: {
              configFile: "./scripts/svgo.config.js",
              multipass: true,
              js2svg: {
                indent: 2,
                pretty: true,
              },
            },
          },
        ],
      },
    ],
  },
};
