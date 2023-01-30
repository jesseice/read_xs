import request from './request.js'
export const catchBanner = () => {
	return request({
		url: 'get/banner'
	})
}