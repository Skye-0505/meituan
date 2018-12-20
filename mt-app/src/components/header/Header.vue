<template>
  <div class="header">
	<span>this is {{poiInfo.name}}!</span>
  </div>
</template>

<script>
export default {
	props:{
		poiInfo:{
			type:Object,
			default:{}
		}
	}

}
</script>

<style scoped>

</style>
