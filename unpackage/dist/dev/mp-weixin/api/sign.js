"use strict";
const api_request = require("./request.js");
const getSign = () => {
  return api_request.request({
    url: "get/sign"
  });
};
exports.getSign = getSign;
