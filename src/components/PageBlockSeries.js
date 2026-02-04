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
      const matchedGroup = grouped.find(g => g.fieldValue === item.node.url);

      return (
        <div key={`item-${index}`} className="vs-series-wrap">
          <div className="vs-series-intro">
            <h2>{item.node.data.serie_title.text}</h2>
            <div className="vs-series-p" dangerouslySetInnerHTML={{ __html: item.node.data.serie_long_description.html }} />
            {/* != false is only because it can also be null, strange Prismic behavior */}
            {item.node.data.show_read_more != false && (
              <a href={item.node.url} className="u-btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z"/></svg>
                <span>Lees meer</span>
              </a>
            )}
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
