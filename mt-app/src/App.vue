<template>
  <div id="app">
  	<!-- header -->
  	<app-header :poiInfo="poiInfo"></app-header>
  	<!-- nav -->
  	<app-nav :commentNum="commentNum"></app-nav>
  	<!-- cotent -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

import Header from './components/header/Header.vue'
import Nav from './components/nav/Nav.vue'

export default {
  name: 'App',
  data(){
  	return{
  		poiInfo:{},
      commentNum:0
  	}
  },
  components:{
  	"app-header":Header,
  	"app-nav":Nav
  },
  created(){
  	fetch("/api/goods").then(res=>{
  		return res.json();
  	})
  	.then(response=>{
  		//code为0表示fetch到了数据
  		if(response.code == 0){
  			this.poiInfo = response.data.poi_info
  		}
  	});

    fetch("/api/ratings")
      .then(res => {
        return res.json()
      })
      .then(response =>{
        if(response.code == 0){
          this.commentNum = response.data.comment_num
        }
    })
  }
}
</script>

<style>

</style>
