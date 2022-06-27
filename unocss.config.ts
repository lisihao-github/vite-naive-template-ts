/*
 * @Author: 李思豪
 * @Date: 2022-06-27 11:02:16
 * @LastEditTime: 2022-06-27 11:11:39
 * @Description: file content
 * @LastEditors: 李思豪
 */
/**
 * 组件化 CSS
 */
import {
  transformerVariantGroup,
  transformerDirectives,
  presetAttributify,
  defineConfig,
  presetMini,
  presetUno
} from "unocss";

export default defineConfig({
  presets: [presetMini({ dark: "class" }), presetAttributify(), presetUno()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  exclude: [`${__dirname}/node_modules/**/*`],
  shortcuts: {
    "wh-full": "w-full h-full",
    "flex-ac": "flex justify-around items-center",
    "flex-bc": "flex justify-between items-center"
  },
  theme: {}
});
