/*
 * @Author: 李思豪
 * @Date: 2022-06-29 15:21:09
 * @LastEditTime: 2022-06-29 15:21:19
 * @Description: file content
 * @LastEditors: 李思豪
 */
import { $t } from "/@/plugins/i18n";
const Layout = () => import("/@/layout/index.vue");

const remainingRouter = [
  {
    path: "/login",
    name: "Login",
    component: () => import("/@/views/login/index.vue"),
    meta: {
      title: $t("menus.hslogin"),
      showLink: false,
      rank: 101
    }
  },
  {
    path: "/redirect",
    component: Layout,
    meta: {
      icon: "home-filled",
      title: $t("menus.hshome"),
      showLink: false,
      rank: 104
    },
    children: [
      {
        path: "/redirect/:path(.*)",
        name: "Redirect",
        component: () => import("/@/layout/redirect.vue")
      }
    ]
  }
];

export default remainingRouter;
