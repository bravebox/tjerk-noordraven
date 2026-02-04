require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const linkResolver = (doc) => {
  if (doc.type === 'serie') return `/${doc.uid}`
  if (doc.type === 'book') return `/${doc.uid}`
  if (doc.type === 'page') return `/${doc.uid}`
  return '/'
}

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.tjerknoordraven.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `tjerknoordraven`,
        accessToken: process.env.API_KEY,
        linkResolver,
        customTypeModels: [
          {
            id: 'serie',
            label: 'Serie',
            repeatable: true,
            json: require('./src/schemas/serie.json'),
          },
          {
            id: 'book',
            label: 'Book',
            repeatable: true,
            json: require('./src/schemas/book.json'),
          },
          {
            id: 'page',
            label: 'Page',
            repeatable: true,
            json: require('./src/schemas/page.json'),
          },
          {
            id: 'home',
            label: 'Home',
            repeatable: false,
            json: require('./src/schemas/home.json'),
          },
          {
            id: 'agenda',
            label: 'Agenda',
            repeatable: false,
            json: require('./src/schemas/agenda.json'),
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["UA-100716819-1"],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          silenceDeprecations: ["legacy-js-api", "import"],
        },
      },
    },
    `gatsby-plugin-sitemap`,
  ],
}