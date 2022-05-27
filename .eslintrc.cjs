/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
  ],
  env: {
    "vue/setup-compiler-macros": true,
  },
  rules: {
    "vue/multi-word-component-names": ["error", {
      "ignores": ["index"]
    }],
    '@typescript-eslint/no-var-requires': 0,
    "no-label-var": 2,
    "no-labels": [
      2,
      {
        allowLoop: true,
        allowSwitch: true,
      },
    ],
  },
};
