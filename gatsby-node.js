const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const prismicContent = await graphql(`
    {
      allPrismicSerie {
        edges {
          node {
            id
            uid
          }
        }
      }
      allPrismicBook {
        edges {
          node {
            id
            uid
          }
        }
      }
      allPrismicPage {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `)

  // Serie
  const serieTemplate = path.resolve("src/templates/serie.jsx")
  prismicContent.data.allPrismicSerie.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: serieTemplate,
      context: {
        uid: edge.node.uid,
      },
    })
  })

  // Books
  const bookTemplate = path.resolve("src/templates/book.jsx")
  prismicContent.data.allPrismicBook.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: bookTemplate,
      context: {
        uid: edge.node.uid,
      },
    })
  })

  // Pages
  const pageTemplate = path.resolve("src/templates/page.jsx")
  prismicContent.data.allPrismicPage.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: pageTemplate,
      context: {
        uid: edge.node.uid,
      },
    })
  })
}
