"use strict";
const api_request = require("./request.js");
const catchBanner = () => {
  return api_request.request({
    url: "get/banner"
  });
};
exports.catchBanner = catchBanner;
