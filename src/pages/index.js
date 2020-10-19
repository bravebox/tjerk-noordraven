import React, { useContext } from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import Home from "../layouts/Home"
import PageBlock from "../components/PageBlock"
import PageBlockSpecial from "../components/PageBlockSpecial"
import PageBlockSeries from "../components/PageBlockSeries"
import SiteContext from '../context/SiteContext'

const Index = ({data}) => {
  const context = useContext(SiteContext);
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{context._meta.title}</title>
        <meta name="description" content="Tjerk Noordraven, schrijver van spannende kinderboeken als De Engste Serie Ooit en Monster Zoo. Informatie, boeken, boekbespreking tips, schrijversbezoek." />
        <link rel="canonical" href="http://www.tjerknoordraven.com/" />
      </Helmet>
      <Home series={data.series} grouped_books_by_serie={data.grouped_books_by_serie}>
        <PageBlock body={data.home.data.home_content.html}></PageBlock>

        <PageBlockSpecial
          image="/img/tjerk-noordraven-home.png"
          title={data.home.data.about_title.text}
          content={data.home.data.about_content.html}
          link={data.home.data.about_link.url}
        ></PageBlockSpecial>

        <PageBlock body={data.home.data.home_content_after.html}></PageBlock>

        <PageBlockSeries series={data.series}></PageBlockSeries>
      </Home>
    </React.Fragment>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    home: prismicHome {
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
    series: allPrismicSerie(sort: {fields: data___order}) {
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
    books: allPrismicBook {
      edges {
        node {
          uid
          data {
            book_title {
              text
            }
            book_description {
              text
            }
            book_cover {
              url
            }
          }
        }
      }
    }
  }
`
