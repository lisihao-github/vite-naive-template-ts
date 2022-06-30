<!--
 * @Author: 李思豪
 * @Date: 2022-06-01 17:27:47
 * @LastEditTime: 2022-06-30 14:58:05
 * @Description: file content
 * @LastEditors: 李思豪
-->
<script setup lang="ts">
import { unref } from "vue";
import { useRouter } from "vue-router";

defineOptions({
  name: "Redirect"
});

const { currentRoute, replace } = useRouter();

const { params, query } = unref(currentRoute);
const { path } = params;

const _path = Array.isArray(path) ? path.join("/") : path;

replace({
  path: "/" + _path,
  query
});
</script>

<template>
  <div />
</template>
