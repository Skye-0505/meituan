<template>
  <div class="header">
	<!-- 顶部通栏 开始 -->
    <div class="top-wrapper">
			<div class="back-wrapper">
				<span class="icon-arrow_lift"></span>
			</div>

			<form class="search-wrapper">
				<span class="search-icon"></span>
				<input class="search-bar" type="text" placeholder="搜索店内商品" />
			</form>

			<div class="more-wrapper">
				<a class="spelling-bt" href="#">拼单</a>
				<div class="more-bt">
					<i class="s-radius"></i>
					<i class="s-radius"></i>
					<i class="s-radius"></i>
				</div>
			</div>
		</div>
    <!-- 顶部通栏 结束 -->

    <!-- 主题内容 开始 -->
    <div class="content-wrapper">
			<div class="icon" :style="head_bg">
				<!--<img :src="poiInfo.pic_url" />-->
			</div>
			<div class="name">
				<h3>{{poiInfo.name}}</h3>
			</div>
			<div class="collect">
				<img src="./img/star.png" />
				<span>收藏</span>
			</div>
		</div>
    <!-- 主题内容 结束 --> 

    <!-- 背景内容 开始 -->
    <div class="bg-wrapper" :style="head_pic_url">
			<!-- <img :src="poiInfo.head_pic_url" /> -->
		</div>
    <!-- 背景内容 结束 -->
  </div>
</template>

<script>
export default {
	props:{
		poiInfo:{
			type:Object,
			default:{}
		}
	},
	computed:{
		head_pic_url(){
	      return "background-image: url(" + this.poiInfo.head_pic_url + ");"
	    },
	    head_bg(){
	      return "background-image: url(" + this.poiInfo.pic_url + ");"
	    }
	}

}
</script>

<style scoped>
@import url(../../common/css/icon.css);

.header{
  height: 130px;
  padding-top: 20px;
}

/* 顶部通栏样式 */
.header .top-wrapper {
	position: relative;
}

.header .top-wrapper .back-wrapper {
  width: 50px;
  height: 31px;
  position: absolute;
  left: 0;
  top: 0;
  text-align: center;
  line-height: 31px;
/*  background-color: red;*/
}

.header .top-wrapper .back-wrapper span {
  display: inline-block;
  color: white;
}

.header .top-wrapper .search-wrapper {
  width: 100%;
  height: 31px;
  /* background: pink; */
  padding: 0 104px 0 50px;
  /* 设置盒子从边框开始计算*/
  box-sizing: border-box;
}

.header .top-wrapper .search-wrapper .search-icon {
  width: 28px;
  height: 31px;
  background: url(./img/search.png) no-repeat 11px center;
  background-size: 13px 13px;
  position: absolute;
}

.header .top-wrapper .search-wrapper .search-bar {
  width: 100%;
  height: 31px;
  border: 0;
  /* 设置盒子从边框开始计算*/
  box-sizing: border-box;
  background: #cdcdcc;
  border-radius: 25px;
  padding-left: 28px;
  /* 去除选中时蓝色边框*/
  outline: none;
}

.header .top-wrapper .more-wrapper {
  width: 65px;
  height: 24px;
  /*background: orange; */
  position: absolute;
  right: 0;
  top: 0;
  padding: 7px 15px 0 24px;
}

.header .top-wrapper .more-wrapper .spelling-bt {
  width: 30px;
  height: 17px;
  color: white;
  line-height: 17px;
  border: 1px solid white;
  text-align: center;
  float: left;
  text-decoration: none;
  font-size: 10px;
}

.header .top-wrapper .more-wrapper .more-bt {
  float: right;
  width: 20px;
  height: 24px;
  margin-left: 13px;
  margin-top: 6px;
}

.header .top-wrapper .more-wrapper .more-bt .s-radius {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  border: 1px solid white;
  display: block;
  float: left;
  margin-right: 1px;
}

/* 背景图片样式 */
.header .bg-wrapper {
    width: 100%;
    height: 150px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    background-size: 100% 135%;
	background-position: center -12px;
}

/* 主题内容 样式 */
.header .content-wrapper {
  padding: 17px 10px 11px;
  height: 50px;
}

.header .content-wrapper .icon {
  width: 50px;
  height: 50px;
  background-size: 135% 100%;
  background-position: center;
  border-radius: 5px;
  float: left;
}

.header .content-wrapper .name {
  float: left;
  padding: 18px 0 0 12px;
}

.header .content-wrapper .name h3 {
  font-size: 16px;
  font-weight: bold;
  color: white;
}

.header .content-wrapper .collect {
  width: 25px;
  height: 37px;
  float: right;
  text-align: center;
  padding-top: 6px;
}

.header .content-wrapper .collect img {
  width: 20px;
  height: 20px;
}

.header .content-wrapper .collect span {
  margin-top: 7px;
  color: white;
  font-size: 11px;
}
</style>
