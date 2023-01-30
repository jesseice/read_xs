<template>
	<view class="list_item">
		<img src="" alt="" style="width: 70px; height: 70px;">
		<view class="item__txt">
			<text calss="item_title"></text>
			<text calss="item_dsr"></text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.list_item {
	width: 100%;
	height: 1rem;
	padding: 15px;
	box-sizing: border-box;
	border-radius: 4px;
	box-shadow: 0px 0px 3px gray;
	overflow: hidden;
	display: flex;
	justify-content: space-between;
}
</style>
