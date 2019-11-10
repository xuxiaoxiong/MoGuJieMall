module.exports = {
  plugins: {
     autoprefixer: {},
     "postcss-px-to-viewport": {
      viewportWidth: 375,
      viewportHeight: 667,
      unitPrecision: 5,
      viewportUnit: 'vw',
      //css中的类名等于selectorBlackList中的不转换。中间写的也是正则表达式.不过不需要//。
      selectorBlackList: ['ignore','tab-bar'],
      minPixelValue: 1,
      mediaQuery: false,
      //最新版本使用这个。匹配vue组件名是什么的不转换。并且注意有插槽的。特别注意
      exclude:[/TabBar/]

    //   在js中使用正则表达式用/正则表达式/
    },
  }
}
