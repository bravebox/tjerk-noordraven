import React, { useContext } from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import Nav from "../components/Nav"
import PageLayout from "../layouts/Page"
import SiteContext from '../context/SiteContext'

const Agenda = ({ data: { prismicAgenda } }) => {
    const context = useContext(SiteContext);
    const agendaData = prismicAgenda

    const agendaItems = agendaData.data.agenda_item.map((item, index) => (
      <div key={`item-${index}`} className="vs-agenda-item">
        <h3>{item.agenda_item_title.text}</h3>
        <div
          dangerouslySetInnerHTML={{ __html: item.agenda_item_content.html }}
        />
      </div>
    ))

    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Agenda {context._meta.title_devider} {context._meta.title}</title>
          <meta name="description" content="Kom naar een lezing, signeersessie of auteursbezoek van schrijver Tjerk Noordraven. Alle data van optredens vind je hier." />
          <link rel="canonical" href="http://www.tjerknoordraven.com/agenda/" />
        </Helmet>
        <Nav />
        <PageLayout>
          <div className="row u-pt-4 u-pb-4">
            <div className="col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">
              <div className="vs-copy">
                <div className="vs-pagebanner">
                  <img
                    src="/img/banner-agenda.png"
                    alt="Banner"
                  />
                </div>
                <h1 hidden={agendaData.data.agenda_title.text ? false : true}>
                  {agendaData.data.agenda_title.text}
                </h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: agendaData.data.agenda_content.html,
                  }}
                />
                <div className="vs-agenda">{agendaItems}</div>
              </div>
            </div>
          </div>
        </PageLayout>
      </React.Fragment>
    )
  }


export default Agenda

export const pageQuery = graphql`
  query AgendaQuery {
    prismicAgenda {
      data {
        agenda_title {
          text
        }
        agenda_content {
          html
        }
        agenda_item {
          agenda_item_title {
            text
          }
          agenda_item_content {
            html
          }
        }
      }
    }
  }
`
