/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");
module.exports = {
  root: true,
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier/skip-formatting",
    "plugin:storybook/recommended",
    "plugin:cypress/recommended"
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  env: {
    "jest": true,
    "node": true
  },
  "rules": {
    "quotes": [2, "double", { "avoidEscape": true }]
  }
};