/*
 * @Author: 李思豪
 * @Date: 2022-06-29 15:57:01
 * @LastEditTime: 2022-07-01 10:43:45
 * @Description: file content
 * @LastEditors: 李思豪
 */
import myQrcode from "./src/index";
import { withInstall } from "/@/utils";

/** 二维码组件 */
export const MyQrcode = withInstall(myQrcode);

export default MyQrcode;
