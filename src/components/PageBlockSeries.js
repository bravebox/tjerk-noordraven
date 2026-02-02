import React from "react"
import SerieBooks from "../components/SerieBooks";

class PageBlockSeries extends React.Component {
  render() {

    const grouped = (this.props.grouped_books_by_serie && this.props.grouped_books_by_serie.group)
      ? this.props.grouped_books_by_serie.group
      : [];

    const seriesEdges = (this.props.series && this.props.series.edges)
      ? this.props.series.edges
      : [];

    const SerieItems = seriesEdges.map((item, index) => {
      const matchedGroup = grouped.find(g => g.fieldValue === item.node.uid);

      return (
        <div key={`item-${index}`} className="vs-series-wrap">
          <div className="vs-series-intro">
            <h2>{item.node.data.serie_title.text}</h2>
            <p>{item.node.data.serie_long_description.text}</p>
            <a href={`/${item.node.uid}`} className="u-btn-primary">Lees meer</a>
          </div>
          <SerieBooks books={(matchedGroup && matchedGroup.edges) ? matchedGroup.edges : []} />
        </div>
      )
    })

    return (
      <React.Fragment>
        <section className="vs-section vs-section--rock u-pt-2 u-pb-4">
          <div className="vs-series">{SerieItems}</div>
        </section>
      </React.Fragment>
    )
  }
}

export default props => <PageBlockSeries {...props} />
