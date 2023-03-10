"use strict";
const common_vendor = require("../common/vendor.js");
const reqConfig = {
  baseUrl: "http://43.136.95.32",
  port: "3000",
  timeout: 1e4
};
const codeMessage = {
  200: "\u670D\u52A1\u5668\u6210\u529F\u8FD4\u56DE\u8BF7\u6C42\u7684\u6570\u636E\u3002",
  201: "\u65B0\u5EFA\u6216\u4FEE\u6539\u6570\u636E\u6210\u529F\u3002",
  202: "\u4E00\u4E2A\u8BF7\u6C42\u5DF2\u7ECF\u8FDB\u5165\u540E\u53F0\u6392\u961F\uFF08\u5F02\u6B65\u4EFB\u52A1\uFF09\u3002",
  204: "\u5220\u9664\u6570\u636E\u6210\u529F\u3002",
  400: "\u53D1\u51FA\u7684\u8BF7\u6C42\u6709\u9519\u8BEF\uFF0C\u670D\u52A1\u5668\u6CA1\u6709\u8FDB\u884C\u65B0\u5EFA\u6216\u4FEE\u6539\u6570\u636E\u7684\u64CD\u4F5C\u3002",
  401: "\u7528\u6237\u6CA1\u6709\u6743\u9650\uFF08\u4EE4\u724C\u3001\u7528\u6237\u540D\u3001\u5BC6\u7801\u9519\u8BEF\uFF09\u3002",
  403: "\u7528\u6237\u5F97\u5230\u6388\u6743\uFF0C\u4F46\u662F\u8BBF\u95EE\u662F\u88AB\u7981\u6B62\u7684\u3002",
  404: "\u53D1\u51FA\u7684\u8BF7\u6C42\u9488\u5BF9\u7684\u662F\u4E0D\u5B58\u5728\u7684\u8BB0\u5F55\uFF0C\u670D\u52A1\u5668\u6CA1\u6709\u8FDB\u884C\u64CD\u4F5C\u3002",
  406: "\u8BF7\u6C42\u7684\u683C\u5F0F\u4E0D\u53EF\u5F97\u3002",
  410: "\u8BF7\u6C42\u7684\u8D44\u6E90\u88AB\u6C38\u4E45\u5220\u9664\uFF0C\u4E14\u4E0D\u4F1A\u518D\u5F97\u5230\u7684\u3002",
  422: "\u5F53\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\u65F6\uFF0C\u53D1\u751F\u4E00\u4E2A\u9A8C\u8BC1\u9519\u8BEF\u3002",
  500: "\u670D\u52A1\u5668\u53D1\u751F\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5\u670D\u52A1\u5668\u3002",
  502: "\u7F51\u5173\u9519\u8BEF\u3002",
  503: "\u670D\u52A1\u4E0D\u53EF\u7528\uFF0C\u670D\u52A1\u5668\u6682\u65F6\u8FC7\u8F7D\u6216\u7EF4\u62A4\u3002",
  504: "\u7F51\u5173\u8D85\u65F6\u3002"
};
const request = async (props) => {
  try {
    const { url, method, data } = props;
    let tempUrl = url;
    if (tempUrl[0] !== "/")
      tempUrl = "/" + tempUrl;
    const endUrl = reqConfig.baseUrl + ":" + reqConfig.port + tempUrl;
    const res = await common_vendor.index.request({
      url: endUrl,
      method: method || "GET",
      data
    });
    if (res.statusCode === 200)
      return res.data;
    console.log(res);
    throw new Error(codeMessage[res.statusCode]);
  } catch (e) {
    return {
      code: -1,
      msg: e.message || ""
    };
  }
};
exports.request = request;
