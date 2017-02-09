# Ionic2 App 种子项目

本项目是对Ionic2 App的基本封装，基本的使用方法请查看[http://ionicframework.com](http://ionicframework.com).

# Known Issues

## Android生成时指定 gradle 路径
在终端中(cmd\shell)生成Android时可能需要下载gradle：
``` bash
Downloading http://services.gradle.org/distributions/gradle-2.14.1-all.zip
```
若下载速度慢，可使用迅雷等下载工具把gradle下载后，放到本地服务器；然后通过环境变量指定gradle下载路径：
* windows:
``` bash
set CORDOVA_ANDROID_GRADLE_DISTRIBUTION_URL=http://localhost/gradle/gradle-2.14.1-all.zip
```
* Mac OS X & Linux
``` bash
export CORDOVA_ANDROID_GRADLE_DISTRIBUTION_URL=http://localhost/gradle/gradle-2.14.1-all.zip
```

## HttpClient
封装ng2的Http，实现拦截器、认证等功能，详见[./src/app/core/services/httpclient.ts](./src/app/core/services/httpclient.ts)。

## 统一导入rxjs的常用操作符
统一导入rxjs的常用操作符，不需要在业务模块中再次导入，详见[./src/app/core/rxjs-operators.ts](./src/app/core/rxjs-operators.ts)。

## Chrome 调试跨域
[解决chrome调试时不能跨域的问题](http://www.cnblogs.com/laden666666/p/5544572.html)

## npm install时，node-sass rebuild 卡
* 原因：node-sass依赖node-gyp，而安装node-gyp时需要从node下载头文件，非常慢。
* 解决方法：使用[cnpm](https://cnpmjs.org/)安装 @ionic/app-scripts@1.0.0。
    1. 删除目录下的node_modules; 
    2. 删除package.json中： "@ionic/app-scripts": "1.0.0"；
    3. npm install
    4. cnpm i @ionic/app-scripts@1.0.0
    5. 恢复package.json中： "@ionic/app-scripts": "1.0.0"；

https://www.npmjs.com/package/node-gyp

node-gyp list # 查询gyp是否安装成功，若失败使用node-gyp install 安装

这是网络的原因。改为使用cnpm安装node-sass:
``` bash
npm uninstall node-sass
npm install -g cnpm 
cnpm i node-sass
```

# License
[MIT](/LICENSE) by yangchao.
