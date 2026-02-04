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

  let meta_title = data.home.data.meta_title.text || context._meta.title;
  let meta_desc = data.home.data.meta_description.text || "Tjerk Noordraven, schrijver van spannende kinderboeken als De Engste Serie Ooit en Monster Zoo. Informatie, boeken, boekbespreking tips, schrijversbezoek.";

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{meta_title}</title>
        <meta name="description" content={meta_desc} />
        <link rel="canonical" href="http://www.tjerknoordraven.com/" />
      </Helmet>
      <Home>
        <PageBlock body={data.home.data.home_content.html}></PageBlock>
        <PageBlockSeries series={data.series} grouped_books_by_serie={data.grouped_books_by_serie}></PageBlockSeries>
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
        meta_title {
          text
        }
        meta_description {
          text
        }
      }
    }
    series: allPrismicSerie(sort: {data: {order: ASC}}) {
      edges {
        node {
          url
          data {
            serie_title {
              text
            }
            serie_description {
              text
            }
            serie_long_description {
              text
              html
            }
            serie_cover {
              url
            }
            show_read_more
          }
        }
      }
    }
    grouped_books_by_serie: allPrismicBook(sort: {data: {order: ASC}}) {
      group(field: {data: {link: {url: SELECT}}}) {
        fieldValue
        edges {
          node {
            url
            data {
              book_title {
                text
              }
              book_description {
                html
              }
              book_cover {
                url
              }
              book_cover_flat {
                url
              }
              book_affiniate_link {
                link_type
                url
                target
              }
              order
              link {
                url
              }
            }
          }
        }
      }
    }
  }
`
