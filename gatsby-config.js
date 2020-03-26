module.exports = {
  siteMetadata: {
    title: `Hello, I'm Rafa. || Diseñador y Desarrollador Front-end`,
        description: `Soy Rafael Alberola, Diseñador y Desarrollador Front-end. Trabajo en la creación de Proyectos Digitales y Experiencias de Usuario.`,
    author: `Rafael Alberola | www.helloimrafa.com`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/helloiamrafa`,
      },
      {
        name: `github`,
        url: `https://github.com/helloimrafa`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/helloimrafa`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/rafaelalberola/`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/helloimrafa`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
        resolve: 'gatsby-source-prismic-graphql',
        options: {
            repositoryName: 'rafaelalberola', // (REQUIRED, replace with your own)
            linkResolver: () => post => `/${post.uid}`,
        }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `rafaelalberola`,
        short_name: `rafaelalberola`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/rafa-icon.png`, // This path is relative to the root of the site.
      },
    },
    // https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/
    {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
            trackingId: "YUA-123753765-1",
            head: true,
        },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
       `gatsby-plugin-offline`,
  ],
}
