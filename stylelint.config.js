/*
 * @Author: 李思豪
 * @Date: 2022-06-27 11:19:16
 * @LastEditTime: 2022-06-27 13:30:24
 * @Description: file content
 * @LastEditors: 李思豪
 */
// 样式检查工具Stylelint

module.exports = {
  root: true,
  plugins: ["stylelint-order"],
  customSyntax: "postcss-html",
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  rules: {
    "selector-class-pattern": null, //命名规范
    "selector-pseudo-class-no-unknown": [
      // 禁止未知的伪类选择器
      true,
      {
        ignorePseudoClasses: ["global"]
      }
    ],
    "selector-pseudo-element-no-unknown": [
      // 禁止未知的伪元素选择器。
      true,
      {
        ignorePseudoElements: ["v-deep"]
      }
    ],
    "at-rule-no-unknown": [
      // 不允许未知的规则。
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
          "function",
          "if",
          "each",
          "include",
          "mixin"
        ]
      }
    ],
    "no-empty-source": null, // 禁止空源。
    "named-grid-areas-no-invalid": null, // 不允许无效的命名网格区域。
    "unicode-bom": "never", // 要求或禁止 Unicode BOM。
    "no-descending-specificity": null, // 不允许较低特异性的选择器出现在覆盖较高特异性的选择器之后。
    "font-family-no-missing-generic-family-keyword": null, // 不允许在字体系列名称列表中缺少通用系列
    "declaration-colon-space-after": "always-single-line", // 在声明的冒号后需要一个空格或不允许有空格（可自动修复）。
    "declaration-colon-space-before": "never", // 在声明的冒号之前需要一个空格或不允许空格
    "rule-empty-line-before": [
      // 要求或不允许在规则之前有一个空行
      "always",
      {
        ignore: ["after-comment", "first-nested"]
      }
    ],
    "unit-no-unknown": [true, { ignoreUnits: ["rpx"] }], // 禁止未知单位。
    "order/order": [
      [
        "dollar-variables",
        "custom-properties",
        "at-rules",
        "declarations",
        {
          type: "at-rule",
          name: "supports"
        },
        {
          type: "at-rule",
          name: "media"
        },
        "rules"
      ],
      { severity: "warning" }
    ]
  },
  ignoreFiles: ["**/*.js", "**/*.jsx", "**/*.tsx", "**/*.ts", "**/*.json"],
  overrides: [
    {
      files: ["*.vue", "**/*.vue", "*.html", "**/*.html"],
      extends: ["stylelint-config-recommended", "stylelint-config-html"],
      rules: {
        "keyframes-name-pattern": null,
        "selector-pseudo-class-no-unknown": [
          true,
          {
            ignorePseudoClasses: ["deep", "global"]
          }
        ],
        "selector-pseudo-element-no-unknown": [
          true,
          {
            ignorePseudoElements: ["v-deep", "v-global", "v-slotted"]
          }
        ]
      }
    }
  ]
};
