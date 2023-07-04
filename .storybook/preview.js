import { themes } from '@storybook/theming';
import '../src/assets/main.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: {
      ...themes.dark,
      brandTitle: 'Design system',
      brandUrl: "",
      brandImage: '/design-system-dark.png',
      brandTarget: '_self',
    },
    light: {
      ...themes.normal,
      brandTitle: 'Design system',
      brandUrl: "",
      brandImage: '/design-system-light.png',
      brandTarget: '_self',
    },
  },
}