export default {
  title: 'SageUI',
  description: 'A modern, accessible, and customizable component library for Tailwind CSS',
  base: '/',
  themeConfig: {
    logo: '/favicon.ico',
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Components', link: '/components/' },
      { text: 'GitHub', link: 'https://github.com/SeijiV13/sageui' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Quick Start', link: '/guide/quick-start' },
            { text: 'Customization', link: '/guide/customization' }
          ]
        }
      ],
      '/components/': [
        {
          text: 'Components',
          items: [
            { text: 'Overview', link: '/components/' }
          ]
        },
        {
          text: 'Form Controls',
          items: [
            { text: 'Button', link: '/components/button' },
            { text: 'Input', link: '/components/input' },
            { text: 'Textarea', link: '/components/textarea' },
            { text: 'Checkbox', link: '/components/checkbox' },
            { text: 'Radio', link: '/components/radio' },
            { text: 'Select', link: '/components/select' }
          ]
        },
        {
          text: 'Data Display',
          items: [
            { text: 'Card', link: '/components/card' },
            { text: 'Badge', link: '/components/badge' },
            { text: 'Avatar', link: '/components/avatar' },
            { text: 'Table', link: '/components/table' }
          ]
        },
        {
          text: 'Feedback',
          items: [
            { text: 'Alert', link: '/components/alert' },
            { text: 'Loading', link: '/components/loading' },
            { text: 'Progress', link: '/components/progress' }
          ]
        },
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/SeijiV13/sageui' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 SageUI'
    }
  }
}
