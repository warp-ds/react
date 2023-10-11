import type { LinguiConfig } from '@lingui/conf';
import { supportedLocales } from './packages/i18n';

const config: LinguiConfig = {
  locales: supportedLocales as unknown as string[],
  sourceLocale: 'en',
  catalogs: [
    {
      include: ['packages/_helpers/**/*.{ts,tsx}'],
      path: 'packages/_helpers/locales/{locale}/messages',
    },
    {
      include: ['packages/breadcrumbs/src/**/*.{ts,tsx}'],
      path: 'packages/breadcrumbs/src/locales/{locale}/messages',
    },
    {
      include: ['packages/button/src/**/*.{ts,tsx}'],
      path: 'packages/button/src/locales/{locale}/messages',
    },
    {
      include: ['packages/combobox/src/**/*.{ts,tsx}'],
      path: 'packages/combobox/src/locales/{locale}/messages',
    },
    {
      include: ['packages/modal/src/**/*.{ts,tsx}'],
      path: 'packages/modal/src/locales/{locale}/messages',
    },
    {
      include: ['packages/pill/src/**/*.{ts,tsx}'],
      path: 'packages/pill/src/locales/{locale}/messages',
    },
    {
      include: ['packages/textarea/src/**/*.{ts,tsx}'],
      path: 'packages/textarea/src/locales/{locale}/messages',
    },
    {
      include: ['packages/textfield/src/**/*.{ts,tsx}'],
      path: 'packages/textfield/src/locales/{locale}/messages',
    },
    {
      include: ['packages/select/src/**/*.{ts,tsx}'],
      path: 'packages/select/src/locales/{locale}/messages',
    },
    {
      include: ['packages/toggle/src/**/*.{ts,tsx}'],
      path: 'packages/toggle/src/locales/{locale}/messages',
    },
  ],
  compileNamespace: 'es',
};

export default config;
