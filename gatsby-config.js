require("dotenv").config()

const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS)

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Voices of Hope`,
    description: `Devotionals and resources to inspire and encourage.`,
    author: `Voices of Hope Team`,
    siteUrl: `https://voices-of-hope.com`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-google-spreadsheet`,
      options: {
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        worksheetTitle: `Hoja2`,
        credentials,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Devocionales`,
        short_name: `Devocionales`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4b5563`, // gris neutro
        display: `standalone`,
        icon: `src/images/icon.jpg`, // crea este ícono
      },
    },
    `gatsby-plugin-offline`,
  ],
}
