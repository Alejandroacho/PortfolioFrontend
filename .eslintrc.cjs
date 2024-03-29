/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");
module.exports = {
  root: true,
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier/skip-formatting",
    "plugin:storybook/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    "sourceType": "module",
    parser: "@typescript-eslint/parser"
  },
  env: {
    "jest": true,
    "node": true
  },
  "rules": {
    "quotes": [2, "double", { "avoidEscape": true }],
    "no-unused-vars": 0
  }
};