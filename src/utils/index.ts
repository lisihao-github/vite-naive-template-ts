/*
 * @Author: 李思豪
 * @Date: 2022-06-29 10:43:18
 * @LastEditTime: 2022-06-29 15:54:54
 * @Description: file content
 * @LastEditors: 李思豪
 */
import type { App, Plugin } from "vue";

export const withInstall = <T>(component: T) => {
  const comp = component as any;
  comp.install = (app: App) => {
    app.component(comp.name, component);
  };
  return component as T & Plugin;
};
