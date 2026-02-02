import React from "react"
import { graphql } from "gatsby"
import PageLayout from "../layouts/Page";
import { Helmet } from "react-helmet"

const Book = ({ data: { prismicBook } }) => {
  const { data } = prismicBook
  let affiliate_link = data.book_affiniate_link ? data.book_affiniate_link.url : false
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.book_title.text} - Tjerk Noordraven</title>
        <meta name="description" content={data.book_description.text} />
        <link rel="canonical" href={`http://www.tjerknoordraven.com/${prismicBook.uid}`} />
      </Helmet>
      <PageLayout>
        <section className="vs-section vs-section--rock u-mb-4 visible-md visible-lg">
          <div className="u-mgrid u-mgrid-2">
            <div className="u-text--c u-position--r">
              <span className="nu-verkrijgbaar" hidden>
                <span>Nu<br/> te koop</span>
              </span>
              <img src={data.book_cover_xl.url} className="vs-main-book-cover" alt="Boek" />
            </div>
            <div>
              <div className="vs-intro vs-copy">
                <h1>{data.book_title.text}</h1>
                <i>Tjerk Noordraven</i>
                <p
                  className="u-pt-1 u-pt-2 u-color--white u-lead"
                  dangerouslySetInnerHTML={{ __html: data.book_description.html }}>
                </p>
                <a
                  v-if="affiliate_link"
                  href={affiliate_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="u-btn-primary u-btn-primary--sml">Bestel nu</a>
              </div>
            </div>
          </div>
        </section>
        <div className="row u-pt-4 u-pb-4">
          <div className="col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">
            <div className="vs-copy">
              <div dangerouslySetInnerHTML={{ __html: data.book_content.html }} />
            </div>
          </div>
        </div>
      </PageLayout>
    </React.Fragment>
  )
}

export default Book

export const pageQuery = graphql`
  query BookBySlug($uid: String!) {
    prismicBook(uid: { eq: $uid }) {
      uid
      data {
        book_title {
          text
        }
        book_description {
          html
          text
        }
        book_content {
          html
        }
        book_cover {
          url
        }
        book_cover_xl {
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
      }
    }
  }
`