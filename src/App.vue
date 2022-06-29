<!--
 * @Author: 李思豪
 * @Date: 2022-06-01 15:56:14
 * @LastEditTime: 2022-06-29 13:31:29
 * @Description: file content
 * @LastEditors: 李思豪
-->
<script lang="ts">
import { defineComponent } from "vue";
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import en from "element-plus/lib/locale/lang/en";
export default defineComponent({
  name: "app",
  components: {
    [ElConfigProvider.name]: ElConfigProvider
  },
  computed: {
    currentLocale() {
      return this.$storage.locale?.locale === "zh" ? zhCn : en;
    }
  }
});
</script>

<template>
  <el-config-provider :locale="currentLocale">
    <router-view />
  </el-config-provider>
</template>

<style></style>
