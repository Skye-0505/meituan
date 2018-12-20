<template>
  <div id="app">
	<!-- header -->
	<app-header :poiInfo="poiInfo"></app-header>
	<!-- nav -->
	<app-nav></app-nav>
	<!-- cotent -->
	<router-view></router-view>
  </div>
</template>

<script>

import Header from './components/header/Header.vue'
import Nav from './components/nav/Nav.vue'

export default {
  name: 'App',
  data(){
  	return{
  		poiInfo:{}
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
  }
}
</script>

<style>

</style>
