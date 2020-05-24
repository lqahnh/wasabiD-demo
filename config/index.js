/**
 * create by wangzhiyong
 * date:2017-08-15
 * desc webpack打包时的入口的脚本文件
 * 如果是单页面，请只写一个入口脚本文件
 *  */

//如果是单页面
let entry = [
  {
    filename: "index", //文件名，
    title: "后台管理系统", // 标题
    src: "./view/index/index.jsx", //脚本路径
  },
  {
    filename: "login", //文件名，
    title: "后台管理系统-登陆", // 标题
    src: "./view/login/index.jsx", //登陆页面
  },
  {
    filename: "flex", //文件名，
    title: "测试页面", // 标题
    src: "./view/test/index.jsx", //登陆页面
  },
  {
    filename: "device", //文件名，
    title: "手机端布局", // 标题
    src: "./view/device/index.jsx", //登陆页面
  },
  {
    filename: "heart", //文件名，
    title: "手机端布局", // 标题
    src: "./view/device/heart.jsx", //登陆页面
  },
  {
    filename: "refresh", //文件名，
    title: "手机端布局", // 标题
    src: "./view/device/refresh.jsx", //登陆页面
  },
  {
    filename: "prompt", //文件名，
    title: "webUI", // 标题
    src: "./view/webui/index.jsx", //登陆页面
  },
  {
    filename: "new", //文件名，
    title: "webUI", // 标题
    src: "./view/webui/new.jsx", //登陆页面
  },
  {
    filename: "lottery", //文件名，
    title: "彩票", // 标题
    src: "./view/lottery/index.jsx", //登陆页面
  },
];

module.exports = entry;
