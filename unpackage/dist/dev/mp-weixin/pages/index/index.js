"use strict";
const common_vendor = require("../../common/vendor.js");
const api_banner = require("../../api/banner.js");
const api_sign = require("../../api/sign.js");
require("../../api/request.js");
if (!Math) {
  ListItem();
}
const ListItem = () => "../../components/listItem/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const state = common_vendor.reactive({
      bannerImgs: []
    });
    const signData = common_vendor.ref({});
    common_vendor.onBeforeMount(() => {
      getBanner();
    });
    const getS = async () => {
      console.log(22222222222);
      const res = await api_sign.getSign();
      console.log("res", res);
      signData.value = res.data;
    };
    const loginWX = () => {
      common_vendor.index.login({
        "provider": "weixin",
        "onlyAuthorize": true,
        success: function(event) {
          console.log(event);
          const { code } = event;
          common_vendor.index.request({
            url: "https://api.weixin.qq.com/sns/jscode2session",
            data: {
              code
            },
            success: (res) => {
              console.log("res", res);
              common_vendor.index.setStorageSync("token", res.token);
            }
          });
        },
        fail: function(err) {
          console.log("err", err);
        }
      });
    };
    const getBanner = async () => {
      const res = await api_banner.catchBanner();
      console.log(res);
      if (res.code === 0) {
        state.bannerImgs = res.data;
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(state.bannerImgs, (img, k0, i0) => {
          return {
            a: img,
            b: img
          };
        }),
        b: common_vendor.t(signData.value.sign),
        c: common_vendor.o(getS),
        d: common_vendor.o(loginWX)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/Administrator/Documents/HBuilderProjects/vue3XCX/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
