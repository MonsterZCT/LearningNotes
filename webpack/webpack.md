# webpack 
参考 
https://segmentfault.com/a/1190000006178770
https://mp.weixin.qq.com/s/nhZNvKd_L8GoGjr00Nxbcw

//全局安装
npm install -g webpack
//安装到你的项目目录
npm install --save-dev webpack

npm init

## 打包
# {extry file}出填写入口文件的路径，本文中就是上述main.js的路径，
# {destination for bundled file}处填写打包文件的存放路径
# 填写路径的时候不用添加{}
webpack {entry file} {destination for bundled file}

配置webpack.config.js后
webpack 即可

## loader
loader 用于对模块的源代码进行转换
such as npm install --save-dev css-loader ts-loader


## plugin
插件目的在于解决 loader 无法实现的其他事
需要安装，例如
npm install --save-dev html-webpack-plugin
var HtmlWebpackPlugin = require('html-webpack-plugin');