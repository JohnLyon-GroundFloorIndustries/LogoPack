import type { Meta, StoryObj } from '@storybook/react-vite';
import { logoComponents, logoMeta, colors } from '../index';
import type { LogoComponentName } from '../index';

const meta = {
  title: 'Brand/All logos',
  parameters: { layout: 'padded' },
} satisfies Meta;

export default meta;

/** Every generated component, with the vector master it comes from. Import any of them by name. */
export const Gallery: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
      {(Object.keys(logoComponents) as LogoComponentName[]).map((name) => {
        const Component = logoComponents[name];
        const dark = /Dark/.test(name) && !/WithBackground/.test(name);
        return (
          <figure
            key={name}
            style={{
              margin: 0, padding: 20, borderRadius: 10, display: 'grid', gap: 12, justifyItems: 'center',
              background: dark ? colors.charcoal : '#FFFFFF', border: '1px solid #E0DACB',
              color: dark ? colors.cream : colors.charcoal, fontFamily: 'Montserrat, sans-serif',
            }}
          >
            <Component height={120} style={{ maxWidth: '100%' }} />
            <figcaption style={{ fontSize: 12, textAlign: 'center', lineHeight: 1.5 }}>
              <strong>{`<${name} />`}</strong>
              <br />
              <span style={{ opacity: 0.7 }}>{logoMeta[name].file}</span>
            </figcaption>
          </figure>
        );
      })}
    </div>
  ),
};
