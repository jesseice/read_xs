"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "user",
  setup(__props) {
    const mapState = common_vendor.reactive({
      markers: [{
        latitude: 39.909,
        longitude: 116.39742
      }, {
        latitude: 39.9,
        longitude: 116.39
      }]
    });
    return (_ctx, _cache) => {
      return {
        a: mapState.markers
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/Administrator/Documents/HBuilderProjects/vue3XCX/pages/user/user.vue"]]);
wx.createPage(MiniProgramPage);
