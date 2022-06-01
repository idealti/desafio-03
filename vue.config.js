const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    /\bvue-awesome\b/
  ],
  publicPath: ''
})
