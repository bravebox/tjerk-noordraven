import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Nav from "../components/Nav"
import Page from "../layouts/Page"

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pagina niet gevonden - Tjerk Noordraven</title>
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="http://www.tjerknoordraven.com/404/" />
      </Helmet>
      <Page>
        <Nav />
        <section className="vs-section vs-section--rock u-text--c u-pt-4 u-pb-4">
          <h1>404 - Pagina niet gevonden</h1>
          <p>Deze pagina bestaat niet (meer).</p>
          <div className="u-mt-2">
            <Link to="/" className="u-btn-ghost">
              <span>Terug naar Boeken</span>
            </Link>
          </div>
        </section>
      </Page>
    </React.Fragment>
  )
}

export default NotFoundPage