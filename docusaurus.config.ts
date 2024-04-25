import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Nyrna',
  tagline: 'Suspend games and applications',
  favicon: 'icons/favicon.ico',

  // Set the production url of your site here
  url: 'https://nyrna.merritt.codes',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'merrit', // Usually your GitHub org/user name.
  projectName: 'nyrna-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/merrit/nyrna-website/edit/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/merrit/nyrna-website/edit/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    // Replace with your project's social card
    image: 'images/promo/promo.jpg',
    navbar: {
      title: 'Nyrna',
      logo: {
        alt: 'Nyrna Logo',
        src: 'icons/icon.svg',
      },
      items: [
        {to: '/features', label: 'Features', position: 'left'},
        {to: '/download', label: 'Download', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/Merrit/nyrna',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://merritt.codes/support',
          label: 'Donate',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          label: 'Nyrna',
          to: '/',
        },
        {
          label: 'Features',
          to: '/features',
        },
        {
          label: 'Download',
          to: '/download',
        },
        {
          label: 'Documentation',
          href: '/docs/hotkey',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/Merrit/nyrna',
        },
        {
          label: 'Donate',
          href: 'https://merritt.codes/support',
        },

      ],
      copyright: `Copyright © ${new Date().getFullYear()} 
      <a href="https://merritt.codes" target="_blank">Merritt Codes</a>.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
