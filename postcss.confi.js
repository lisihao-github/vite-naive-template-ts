/*
 * @Author: 李思豪
 * @Date: 2022-06-29 09:59:39
 * @LastEditTime: 2022-06-29 10:03:35
 * @Description: file content
 * @LastEditors: 李思豪
 */
// autoprefixer 自动给兼容性差 的属性增加浏览器前缀，提高代码兼容性
// postcss-import 遵循@import规则，你可以将reset.css样式合并到你的主样式表中，减少http请求
module.exports = {
  plugins: [require("autoprefixer"), require("postcss-import")]
};
