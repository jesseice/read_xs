<template>
	<view class="content">
		<view class="banner">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="img in state.bannerImgs" :key="img">
					<img :src="img" style="width: 100%;">
				</swiper-item>
			</swiper>
		</view>
		<view>
			{{ signData.sign }}
		</view>
		<!-- item模板 -->
		<view class="" style="padding: 10px;">
			<ListItem />
		</view>
		<button @click="getS">请求</button>
		<button type="primary" style="width: 100px; margin: 20px auto;" @click="loginWX">登录微信</button>
	</view>
</template>

<script setup lang="ts">
import { onBeforeMount, reactive, ref } from 'vue'
import { getSign, catchBanner } from '../../api';
import ListItem from '../../components/listItem/index.vue'
const state: any = reactive({
	bannerImgs: []
})
const signData: any = ref({})

onBeforeMount(() => {
	getBanner()
})
const getS = async () => {
	console.log(22222222222)
	const res = await getSign()
	console.log('res', res)
	signData.value = res.data
}

const loginWX = () => {
	uni.login({ 
		"provider": "weixin",
		"onlyAuthorize": true, // 微信登录仅请求授权认证
		success: function(event){
			console.log(event);
			const {code} = event
			//客户端成功获取授权临时票据（code）,向业务服务器发起登录请求。
			uni.request({
				url: 'https://api.weixin.qq.com/sns/jscode2session', //仅为示例，并非真实接口地址。
				data: {
					code
				},
				success: (res: any) => {
					//获得token完成登录
					console.log('res', res)
					uni.setStorageSync('token',res.token)
				}
			});
		},
		fail: function (err) {
			console.log('err', err);
			// 登录授权失败  
			// err.code是错误码
		}
	})
	
}

const getBanner = async () => {
	const res: any = await catchBanner()
	console.log(res);
	if (res.code === 0) {
		state.bannerImgs = res.data
	}
}
</script>

<style>
	.banner {
		margin: 10px;
		box-sizing: border-box;
		box-shadow: 1px 0px 3px gray;
		border-radius: 6px;
		overflow: hidden;
	}
</style>