import React from "react"
import { graphql } from "gatsby"
import PageLayout from "../layouts/Page";
import SerieBooks from "../components/SerieBooks";
import { Helmet } from "react-helmet"

const Serie = ({ data: { prismicSerie, allPrismicBook } }) => {
  const { data } = prismicSerie;
  const bookItems = allPrismicBook.edges;
  return (
    <React.Fragment>
      <PageLayout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{data.serie_title.text} - Tjerk Noordraven</title>
          <link rel="canonical" href={`http://www.tjerknoordraven.com/${prismicSerie.uid}/`} />
          <meta name="description" content={data.serie_description.text} />
        </Helmet>
        <section className="vs-section row u-pt-4 u-pb-4">
          <div className="col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">
            <div className="vs-copy u-text--c">
              <div className="vs-pagebanner">
                <img
                  src={`/img/${prismicSerie.uid}.png`}
                  alt="Banner"
                />
              </div>
              <h2>{data.serie_title.text}</h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: data.serie_content.html,
                }}
              ></p>
            </div>
          </div>
        </section>
        <section className="vs-section vs-section--rock u-pt-2 u-pb-4">
          <SerieBooks books={bookItems}></SerieBooks>
        </section>
      </PageLayout>
    </React.Fragment>
  )
}

export default Serie

export const pageQuery = graphql`
  query SerieBySlug($uid: String!) {
    prismicSerie(uid: { eq: $uid }) {
      uid
      data {
        serie_title {
          text
        }
        serie_description {
          html
          text
        }
        serie_content {
          html
        }
      }
    }
    allPrismicBook(filter: {data: {link: {uid: {eq: $uid}}}}) {
      edges {
        node {
          uid
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
            book_affiniate_link {
              link_type
              url
              target
            }
          }
        }
      }
    }
  }
`