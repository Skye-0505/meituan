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

五、background-position属性两个参数分别表示水平方向和竖直方向，参数为负数时表示向右或向下移动。

六、应用组件的vue给被应用的组件vue传值：
1. 在应用组件的vue中的组件标签里绑定属性和值，该属性和值会被传递到组件中。例如 （app-star :score="poiInfo.wm_poi_score"）（/app-star）
2. 在被应用的组件vue中的props里接收此属性，例如   
   props:{
      score:{
        type:Number
      }
    }
## 问题
一、CSS中设置backgroud-size和background-position无效，这部分对应html和css如下：
![](https://github.com/Skye-0505/meituan/blob/master/issueimg/issue1.jpg)

![](https://github.com/Skye-0505/meituan/blob/master/issueimg/issue2.jpg)

    查询资料得知，造成这种backgroud-xxx失效的常见原因有background属性默认值会覆盖background-xxx单个属性值，故要将background改写为backgroud-image。但这里并没有在css中引入图片而是在html中引入图片。猜想background-size和background-position失效原因是因为在css中没有找到背景图片的url，而css本身无法更改html中引入的图片属性。此猜想尚未论证。

* 解决方案
在vue中添加计算属性computed将html中的图片url包装成一个属性，由computed计算属性return给html标签，问题得以解决。
