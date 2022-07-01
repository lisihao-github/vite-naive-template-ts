<!--
 * @Author: 李思豪
 * @Date: 2022-06-29 15:47:31
 * @LastEditTime: 2022-07-01 10:44:36
 * @Description: file content
 * @LastEditors: 李思豪
-->
<script setup lang="ts">
import Motion from "../utils/motion";
import MyQrcode from "/@/components/MyQrcode";
import { useUserStoreHook } from "/@/store/modules/user";
</script>

<template>
  <Motion class="-mt-2 -mb-2"> <MyQrcode text="模拟测试" /> </Motion>
  <Motion :delay="100">
    <el-divider>
      <p class="text-gray-500 text-xs">扫码后点击"确认"，即可完成登录</p>
    </el-divider>
  </Motion>
  <Motion :delay="150">
    <el-button
      class="w-full mt-4"
      @click="useUserStoreHook().SET_CURRENTPAGE(0)"
    >
      返回
    </el-button>
  </Motion>
</template>
