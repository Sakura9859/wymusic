import request from "@/utils/request";
export const recomMusic = (params) =>
  request({
    url: "/personalized",
    params,
  });
//推荐最新音乐
export const newMusic = (params) =>
  request({
    url: "/personalized/newsong",
    params,
  });
