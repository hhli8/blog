<template>
</template>

<script>
</script>

<style>
</style>

1 安装最新npm
2 npm install -g vue-cli(第一次时)
3 vue init webpack name(项目名称)
4 cd name
5 npm install
6 npm run dev

安装其他东西
  axios，vue2.0后该取代vue-resource
  mint-ui/element-ui ui库
  vuex 管理
  style-样式编译 node-sass,sass-loader
  
其他设置
  no-eslint   webpack.base.conf.js,注释掉rules=> loader: 'eslint-loader'
  
打包
  out--打包时文件路径不对，在webpack.prod.conf.js文件中的webpackConfig找到output，添加一项 publicPath: './'
  

  