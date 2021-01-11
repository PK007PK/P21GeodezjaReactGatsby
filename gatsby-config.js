require("dotenv").config()

const bootstrapQueries = {
  xs_down: "(max-width: 576x)",
  sm_down: "(max-width: 768px)",
  md_down: "(max-width: 992px)",
  lg_down: "(max-width: 1200px)",
  xxl_down: "(max-width: 1550px)",
  xs_up: "(min-width: 576x)",
  sm_up: "(min-width: 768px)",
  md_up: "(min-width: 992px)",
  lg_up: "(min-width: 1200px)",
  xxl_up: "(min-width: 1550px)",
  portrait: "(orientation: portrait)",
}

module.exports = {
  siteMetadata: {
    title: `GPI Usługi Geodezyjne`,
    description: `zzz`,
    author: `Piotr Krasny`,
    language: "pl",
  },
  plugins: [
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.API_DATO_CMS,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/data/articles`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat\:500,700`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-breakpoints`,
      options: {
        queries: bootstrapQueries,
      },
    },
    `gatsby-plugin-layout`,
    `gatsby-plugin-mdx`,

    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
