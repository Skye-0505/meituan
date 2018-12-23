# 美团
（本地地址 yuanyuan->git->meituan）

## 笔记
一、组件在app.vue中引入：
1. import组件
2. 在components中注册组件，格式为"自定义标签名":组件名
3. 在temple中使用自定义标签

二、插件在main.js中引入：
1. npm install 要用的插件
2. 在main.js中import 插件
3. vue.use(插件)

三、老版本的创建路由也在main.js中，步骤为创建-->实例化-->挂在到vue对象中。随着vue的更新不需要再main.js中创建路由，而是在router目录下的index.js创建路由。

四、在创建或注册模板的时候，传入一个data属性作为用来绑定的数据。但是在组件中，data必须是一个函数，而不能直接把一个对象赋值给它。因为在定义组件时，同一定义将创建多个实例，此时 data 必须是一个函数，返回原始数据对象。如果 data 仍然是一个普通对象，则所有的实例将指向同一个对象！换成函数后，每当创建一个实例时，会调用这个函数，返回一个新的原始数据对象的副本。

## 问题
一、CSS中设置backgroud-size和background-position无效，这部分对应html和css如下：
    
    猜想：由于background
