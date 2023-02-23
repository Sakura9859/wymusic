import request from "@/utils/request";
export const searchMusic = (params) =>
  request({
    url: "/search/hot",
    params,
  });
export const search = (params) =>
  request({
    url: "/cloudsearch",
    params,
  });
