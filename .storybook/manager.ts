import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Ground Floor Industries — LogoPack',
    brandUrl: 'https://github.com/JohnLyon-GroundFloorIndustries/LogoPack',
    brandImage: 'logos/svg/gfi-horizontal-for-light-bg.svg',
    brandTarget: '_blank',
    colorPrimary: '#1F5C5B',
    colorSecondary: '#1F5C5B',
    appBg: '#F4F1E8',
    appContentBg: '#FFFFFF',
    appBorderColor: '#E0DACB',
    textColor: '#2B2B2B',
    barSelectedColor: '#1F5C5B',
    fontBase: "'Montserrat', 'Helvetica Neue', Arial, sans-serif",
  }),
});
