/*
 * @Author: 李思豪
 * @Date: 2022-06-29 16:20:24
 * @LastEditTime: 2022-06-30 15:29:45
 * @Description: file content
 * @LastEditors: 李思豪
 */
// 根据角色动态生成路由
import { MockMethod } from "vite-plugin-mock";

// http://mockjs.com/examples.html#Object
// const systemRouter = {};

// const permissionRouter = {};

// const frameRouter = {};

// const tabsRouter = {};

// // 添加不同按钮权限到/permission/button页面中
// function setDifAuthority(authority, routes) {
//   routes.children[1].meta.authority = [authority];
//   return routes;
// }

export default [
  {
    url: "/getAsyncRoutes",
    method: "get",
    response: ({ query }) => {
      if (query.name === "admin") {
        return {
          code: 0,
          info: []
        };
      } else {
        return {
          code: 0,
          info: []
        };
      }
    }
  }
] as MockMethod[];
