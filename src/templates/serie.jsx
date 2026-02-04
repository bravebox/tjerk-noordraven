import React from "react"
import { graphql } from "gatsby"
import PageLayout from "../layouts/Page";
import SerieBooks from "../components/SerieBooks";
import { Helmet } from "react-helmet"

const Serie = ({ data: { prismicSerie, allPrismicBook } }) => {
  const { data } = prismicSerie;
  const bookItems = allPrismicBook.edges;

  /** Prismic: HTML markup */
  const createHtmlMarkUp = () => {
    return {__html: data.serie_content.html}
  }

  /** Prismic: If a banner is defined display banner */
  let bannerUrl = false;
  if (data.serie_banner) {
    bannerUrl = data.serie_banner.url;
  }

  return (
    <React.Fragment>
      <PageLayout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{data.serie_title.text} - Tjerk Noordraven</title>
          <link rel="canonical" href={`http://www.tjerknoordraven.com/${prismicSerie.uid}/`} />
          <meta name="description" content={data.serie_description.text} />
        </Helmet>
        <section className="vs-section vs-section--rock u-text--c u-pt-4">
          <h1>{data.serie_title.text}</h1>
        </section>
        <section className="vs-section row u-pt-4 u-pb-4">
          <div className="col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">
            <div className="vs-copy u-text--c">
              <div className="vs-pagebanner">
                <img
                  hidden={!bannerUrl}
                  src={bannerUrl}
                  alt="Banner"
                />
              </div>
              <div dangerouslySetInnerHTML={createHtmlMarkUp()}></div>
            </div>
          </div>
        </section>
        <section className="vs-section vs-section--rock u-pt-2 u-pb-4">
          <SerieBooks books={bookItems}></SerieBooks>
        </section>
        <section className="vs-section vs-section--rock u-pt-2 u-pb-4 u-text--c">
          <a href={`/`} className="u-btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z"/></svg>
            <span>Terug naar Boeken</span>
          </a>
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
          text
        }
        serie_long_description {
          text
          html
        }
        serie_content {
          html
        }
        serie_banner {
          url
        }
        show_read_more
      }
    }
    allPrismicBook(filter: {data: {link: {uid: {eq: $uid}}}}, sort: {fields: data___order}) {
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
            book_cover_flat {
              url
            }
            book_affiniate_link {
              link_type
              url
              target
            }
            order
          }
        }
      }
    }
  }
`