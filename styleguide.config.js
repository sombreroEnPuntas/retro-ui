const path = require('path')

module.exports = {
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguide/ThemeWrapper'),
  },
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Press+Start+2P',
        },
      ],
    },
  },
}
