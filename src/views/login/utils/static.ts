/*
 * @Author: 李思豪
 * @Date: 2022-06-29 13:39:05
 * @LastEditTime: 2022-06-29 13:42:15
 * @Description: file content
 * @LastEditors: 李思豪
 */
import { computed } from "vue";
import bg from "/@/assets/login/bg.png";
import avatar from "/@/assets/login/avatar.svg?component";
import illustration0 from "/@/assets/login/illustration0.svg?component";
import illustration1 from "/@/assets/login/illustration1.svg?component";
import illustration2 from "/@/assets/login/illustration2.svg?component";
import illustration3 from "/@/assets/login/illustration3.svg?component";
import illustration4 from "/@/assets/login/illustration4.svg?component";
import illustration5 from "/@/assets/login/illustration5.svg?component";
import illustration6 from "/@/assets/login/illustration6.svg?component";

// 每天展示不同的背景图
const currentWeek = computed(() => {
  switch (String(new Date().getDay())) {
    case "0":
      return illustration0;
    case "1":
      return illustration1;
    case "2":
      return illustration2;
    case "3":
      return illustration3;
    case "4":
      return illustration4;
    case "5":
      return illustration5;
    case "6":
      return illustration6;
    default:
      return illustration4;
  }
});

export { bg, avatar, currentWeek };
