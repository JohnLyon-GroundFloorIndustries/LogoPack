import type { Meta, StoryObj } from '@storybook/react-vite';
import { Logo } from '../index';

const meta = {
  title: 'Brand/Logo',
  component: Logo,
  args: { layout: 'horizontal', background: 'light', withBackground: false, height: 96 },
  argTypes: {
    layout: { control: 'inline-radio', options: ['horizontal', 'stacked'] },
    background: { control: 'inline-radio', options: ['light', 'dark'] },
    height: { control: { type: 'range', min: 24, max: 400, step: 4 } },
    width: { control: 'number' },
    title: { control: 'text' },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

/** The default: horizontal lock-up for light backgrounds. Use it in headers, letterhead, and email signatures. */
export const Horizontal: Story = {};

/** Centered lock-up for cover pages, signs, and banners. */
export const Stacked: Story = { args: { layout: 'stacked', height: 280 } };

/** Cream wordmark for charcoal or other dark backgrounds. */
export const OnDark: Story = {
  args: { background: 'dark' },
  globals: { backgrounds: { value: 'charcoal' } },
};

export const StackedOnDark: Story = {
  args: { layout: 'stacked', background: 'dark', height: 280 },
  globals: { backgrounds: { value: 'charcoal' } },
};

/** Paints the brand background behind the logo — for photos or off-brand colors. */
export const WithBackground: Story = {
  args: { withBackground: true, background: 'dark' },
  globals: { backgrounds: { value: 'white' } },
};

/** Common header sizes. Pass only `height` (or only `width`) and the other follows the artwork's proportions. */
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 24, justifyItems: 'start' }}>
      {[32, 48, 64, 96].map((h) => (
        <div key={h} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <code style={{ width: 90, fontSize: 12 }}>height={h}</code>
          <Logo {...args} height={h} />
        </div>
      ))}
    </div>
  ),
};
