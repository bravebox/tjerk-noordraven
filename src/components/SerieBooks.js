import React from "react"
import SerieBook from "../components/SerieBook";

class SerieBooks extends React.Component {
  render() {

    const booksInSerie = this.props.books.map((item, index) => (
      <SerieBook
        key={`item-${index}`}
        title={item.node.data.book_title.text}
        description={item.node.data.book_description.html}
        cover={item.node.data.book_cover.url}
        aff_link={(item.node.data.book_affiniate_link) ? item.node.data.book_affiniate_link.url : '/'}
        uid={item.node.uid}>
      </SerieBook>
    ))

    return (
      <React.Fragment>
        <div className="vs-series">{booksInSerie}</div>
      </React.Fragment>
    )
  }
}

export default props => <SerieBooks {...props} />


