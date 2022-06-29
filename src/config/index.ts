/*
 * @Author: 李思豪
 * @Date: 2022-06-29 10:48:04
 * @LastEditTime: 2022-06-29 10:51:13
 * @Description: file content
 * @LastEditors: 李思豪
 */
import { App } from "vue";
import axios from "axios";
import { loadEnv } from "@build/index";

let config: object = {};
const { VITE_PUBLIC_PATH } = loadEnv();

const setConfig = (cfg?: unknown) => {
  config = Object.assign(config, cfg);
};

const getConfig = (key?: string): ServerConfigs => {
  if (typeof key === "string") {
    const arr = key.split(".");
    if (arr && arr.length) {
      let data = config;
      arr.forEach(v => {
        if (data && typeof data[v] !== "undefined") {
          data = data[v];
        } else {
          data = null;
        }
      });
      return data;
    }
  }
  return config;
};

// 获取项目动态全局配置
export const getServerConfig = async (app: App): Promise<undefined> => {
  app.config.globalProperties.$config = getConfig();
  return axios({
    baseURL: "",
    method: "get",
    url: `${VITE_PUBLIC_PATH}serverConfig.json`
  })
    .then(({ data: config }) => {
      let $config = app.config.globalProperties.$config;
      // 自动注入项目配置
      if (app && $config && typeof config === "object") {
        $config = Object.assign($config, config);
        app.config.globalProperties.$config = $config;
        // 设置全局配置
        setConfig($config);
      }
      // 设置全局baseURL
      app.config.globalProperties.$baseUrl = $config.baseURL;
      return $config;
    })
    .catch(() => {
      throw "请在public文件夹下添加serverConfig.json配置文件";
    });
};

export { getConfig, setConfig };
