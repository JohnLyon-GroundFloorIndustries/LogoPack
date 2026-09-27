import type { Meta, StoryObj } from '@storybook/react-vite';
import { LogoIcon } from '../index';

const meta = {
  title: 'Brand/LogoIcon',
  component: LogoIcon,
  args: { background: 'light', simple: false, width: 200 },
  argTypes: {
    background: { control: 'inline-radio', options: ['light', 'dark'] },
    width: { control: { type: 'range', min: 16, max: 400, step: 4 } },
  },
} satisfies Meta<typeof LogoIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

/** The building mark on its own — profile pictures, app icons, stamps. */
export const Default: Story = {};

export const OnDark: Story = {
  args: { background: 'dark' },
  globals: { backgrounds: { value: 'charcoal' } },
};

/** No hairline highlights. Use below ~64px, and for embroidery, stamps, and one-color jobs. */
export const Simple: Story = { args: { simple: true } };

/** Detailed vs. simple at small sizes. */
export const SmallSizes: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'auto repeat(4, 72px)', gap: 12, alignItems: 'center' }}>
      <span />
      {[16, 24, 32, 64].map((s) => (
        <code key={s} style={{ fontSize: 12 }}>{s}px</code>
      ))}
      {[false, true].map((simple) => [
        <code key={`l${simple}`} style={{ fontSize: 12 }}>{simple ? 'simple' : 'detailed'}</code>,
        ...[16, 24, 32, 64].map((s) => <LogoIcon key={`${simple}${s}`} {...args} simple={simple} width={s} />),
      ])}
    </div>
  ),
};
