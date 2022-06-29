/*
 * @Author: 李思豪
 * @Date: 2022-06-01 16:04:11
 * @LastEditTime: 2022-06-27 16:24:38
 * @Description: file content
 * @LastEditors: 李思豪
 */
module.exports = {
  ignores: [commit => commit.includes("init")],
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-leading-blank": [2, "always"], // body换行
    "footer-leading-blank": [1, "always"], // footer以空行开头
    "header-max-length": [2, "always", 108], // header最长72
    "subject-empty": [2, "never"], // subject不能为空
    "type-empty": [2, "never"], // never: type不能为空; always: type必须为空
    "type-enum": [
      // type枚举
      2,
      "always",
      [
        "feat",
        "fix",
        "perf",
        "style",
        "docs",
        "test",
        "refactor",
        "build",
        "ci",
        "chore",
        "revert",
        "wip",
        "workflow",
        "types",
        "release"
      ]
    ]
  }
};
