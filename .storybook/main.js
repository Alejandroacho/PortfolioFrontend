module.exports = {
  "stories": [
    "../docs/introduction.mdx",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../docs/**/*.mdx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-dark-mode",
    "@storybook/addon-mdx-gfm"
  ],
  "framework": {
    name: "@storybook/vue3-vite",
    options: {}
  },
  "features": {
    "storyStoreV7": true
  },
  docs: {
    autodocs: true
  }
};