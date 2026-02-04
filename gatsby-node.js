const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const prismicContent = await graphql(`{
    allPrismicSerie {
      nodes {
        id
        url
      }
    }
    allPrismicBook {
      nodes {
        id
        url
      }
    }
    allPrismicPage {
      nodes {
        id
        url
      }
    }
  }`)

  // Serie
  const serieTemplate = path.resolve("src/templates/serie.jsx")
  prismicContent.data.allPrismicSerie.nodes.forEach(node => {
    if (node.url) {
      createPage({
        path: node.url,
        component: serieTemplate,
        context: {
          id: node.id,
        },
      })
    }
  })

  // Books
  const bookTemplate = path.resolve("src/templates/book.jsx")
  prismicContent.data.allPrismicBook.nodes.forEach(node => {
    if (node.url) {
      createPage({
        path: node.url,
        component: bookTemplate,
        context: {
          id: node.id,
        },
      })
    }
  })

  // Pages
  const pageTemplate = path.resolve("src/templates/page.jsx")
  prismicContent.data.allPrismicPage.nodes.forEach(node => {
    if (node.url) {
      createPage({
        path: node.url,
        component: pageTemplate,
        context: {
          id: node.id,
        },
      })
    }
  })
}
