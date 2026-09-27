import type { Preview } from '@storybook/react-vite';
import '../colors/palette.css';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    backgrounds: {
      options: {
        cream: { name: 'Cream (light)', value: '#F4F1E8' },
        white: { name: 'White', value: '#FFFFFF' },
        charcoal: { name: 'Charcoal (dark)', value: '#2B2B2B' },
      },
    },
    options: { storySort: { order: ['Introduction', 'Brand', ['Logo', 'LogoIcon', 'All logos', 'Colors', 'Typography']] } },
  },
  initialGlobals: { backgrounds: { value: 'cream' } },
  tags: ['autodocs'],
};

export default preview;
