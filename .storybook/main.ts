import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-docs'],
  framework: { name: '@storybook/react-vite', options: {} },
  // Serve the vector masters so the Storybook sidebar can show the real logo.
  staticDirs: [{ from: '../logos', to: '/logos' }, { from: '../favicon', to: '/favicon' }],
};

export default config;
