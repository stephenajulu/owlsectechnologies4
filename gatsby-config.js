const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'OwlSec Technologies | An I.T Product and Service Provider in Nairobi, Kenya',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'OwlSec Technologies',
        short_name: 'OwlSec Technologies',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#000',
        display: 'standalone',
        icon: 'src/assets/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: path.resolve(__dirname, 'src/assets/svg'),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/app-layout/AppLayout.tsx'),
      },
    },
  ],
};
