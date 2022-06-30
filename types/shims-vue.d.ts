/*
 * @Author: 李思豪
 * @Date: 2022-06-01 17:03:29
 * @LastEditTime: 2022-06-30 14:31:07
 * @Description: file content
 * @LastEditors: 李思豪
 */
declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "*.scss" {
  const scss: Record<string, string>;
  export default scss;
}

declare module "vuedraggable/src/vuedraggable";
