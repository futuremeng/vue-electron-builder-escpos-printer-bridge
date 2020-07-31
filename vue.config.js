/*
 * @Date: 2020-07-31 13:30:35
 * @LastEditors: Future Meng
 * @LastEditTime: 2020-07-31 17:49:49
 */
module.exports = {
  configureWebpack: {
    devtool: "source-map"
  },
  pluginOptions: {
    electronBuilder: {
      // List native deps here if they don't work
      externals: ["escpos", "escpos-usb"]
      // If you are using Yarn Workspaces, you may have multiple node_modules folders
      // List them all here so that VCP Electron Builder can find them
    }
  }
  // chainWebpack: config => {
  //   config.module
  //     .rule("js")
  //     .test(/\.jsx?$/)
  //     .exclude.clear()
  //     .end()
  //     .include.add(function() {
  //       return ["./node_modules/escpos", "./node_modules/escpos-usb", "src"];
  //     })
  //     .end();
  // }
};
