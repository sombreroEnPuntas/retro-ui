const docgen = require('react-docgen-typescript')
const path = require('path')

module.exports = {
  propsParser: docgen.withCustomConfig('./tsconfig.json').parse,
  ribbon: {
    url: 'https://github.com/sombreroEnPuntas/retro-ui',
    text: 'Fork me on GitHub',
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/theme/ThemeWrapper'),
  },
  styleguideDir: 'docs',
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Press+Start+2P',
        },
        { rel: 'shortcut icon', type: 'image/x-icon', href: 'favicon.ico' },
      ],
    },
  },
}
