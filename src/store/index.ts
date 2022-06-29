/*
 * @Author: 李思豪
 * @Date: 2022-06-29 10:46:29
 * @LastEditTime: 2022-06-29 10:46:43
 * @Description: file content
 * @LastEditors: 李思豪
 */
import type { App } from "vue";
import { createPinia } from "pinia";
const store = createPinia();

export function setupStore(app: App<Element>) {
  app.use(store);
}

export { store };
