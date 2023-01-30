import request from './request.js'

export const getSign = () => {
	return request({
		url:'get/sign'
	})
}