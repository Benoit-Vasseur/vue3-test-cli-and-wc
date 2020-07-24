module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap((options) => {
        // modify the options...
        return {
          ...options,
          compiler: require("@vue/compiler-sfc"),
          compilerOptions: { isCustomElement: (tag) => tag === "my-input" },
        };
      });
  },
};
