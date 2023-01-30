<template>
	<view>
		<map style="width: 100%; height: 100vh;" :latitude="39.909" :longitude="116.39742" :markers="mapState.markers">
		</map>
	</view>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const mapState = reactive({
	markers: [{
				latitude: 39.909,
				longitude: 116.39742,
			}, {
				latitude: 39.90,
				longitude: 116.39,
			}]
})
</script>

<style>

</style>
