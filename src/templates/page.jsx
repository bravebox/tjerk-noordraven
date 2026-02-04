import React from "react"
import { graphql } from "gatsby"
import PageLayout from "../layouts/Page";
import { Helmet } from "react-helmet"

const Page = ({ data: { prismicPage } }) => {
  const { data } = prismicPage
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.title.text} - Tjerk Noordraven</title>
        <meta name="description" content={data.description.text} />
        <link rel="canonical" href={`http://www.tjerknoordraven.com${prismicPage.url}`} />
      </Helmet>
      <PageLayout>
        <div className="row u-pt-4 u-pb-4">
          <div className="col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">
            <div className="vs-copy">
              <div className="vs-pagebanner">
                <img
                  src={data.banner.url}
                  hidden={data.banner.url ? false : true}
                  alt="Banner"
                />
              </div>
              <h1>{data.title.text}</h1>
              <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
            </div>
          </div>
        </div>
      </PageLayout>
    </React.Fragment>
  )
}

export default Page

export const pageQuery = graphql`
  query PageBySlug($id: String!) {
    prismicPage(id: { eq: $id }) {
      url
      data {
        title {
          text
        }
        description {
          html
          text
        }
        content {
          html
        }
        banner {
          url
        }
      }
    }
  }
`