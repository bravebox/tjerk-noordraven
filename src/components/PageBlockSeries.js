import React from "react"

class PageBlockSeries extends React.Component {
  render() {
    const SerieItems = this.props.series.edges.map((item, index) => (
      <div key={`item-${index}`} className="vs-copy u-text--c">
        <div className="vs-serie__img">
          <img
            src={item.node.data.serie_cover.url}
            alt="Serie Banner"
            hidden={item.node.data.serie_cover.url ? false : true}
          />
        </div>
        <h2>{item.node.data.serie_title.text}</h2>
        <a href={`/${item.node.uid}`} className="u-btn-primary">Lees meer</a>
      </div>
    ))

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
