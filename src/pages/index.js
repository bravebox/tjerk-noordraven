import React, { useContext } from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import Home from "../layouts/Home"
import PageBlock from "../components/PageBlock"
import PageBlockSpecial from "../components/PageBlockSpecial"
import PageBlockSeries from "../components/PageBlockSeries"
import SiteContext from '../context/SiteContext'

const Index = ({ data: { prismicHome, allPrismicSerie } }) => {
  const context = useContext(SiteContext);
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{context._meta.title}</title>
        <meta name="description" content="De officiële website van kinderboekenschrijver Tjerk Noordraven, auteur van o.a. De Engste Serie Ooit en Giel en de Geesten: horror voor kinderen." />
        <link rel="canonical" href="http://www.tjerknoordraven.com/" />
      </Helmet>
      <Home>
        <PageBlock body={prismicHome.data.home_content.html}></PageBlock>

        <PageBlockSpecial
          image="/img/tjerk-noordraven-home.png"
          title={prismicHome.data.about_title.text}
          content={prismicHome.data.about_content.html}
          link={prismicHome.data.about_link.url}
        ></PageBlockSpecial>

        <PageBlock body={prismicHome.data.home_content_after.html}></PageBlock>

        <PageBlockSeries series={allPrismicSerie}></PageBlockSeries>
      </Home>
    </React.Fragment>
  )
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    prismicHome {
      data {
        home_title {
          text
        }
        home_content {
          html
        }
        home_content_about {
          html
        }
        home_content_after {
          html
        }
        about_title {
          html
          text
        }
        about_link {
          link_type
          target
          url
        }
        about_content {
          text
          html
        }
      }
    }
    allPrismicSerie {
      edges {
        node {
          uid
          data {
            serie_title {
              text
            }
            serie_description {
              text
            }
            serie_cover {
              url
            }
          }
        }
      }
    }
  }
`
