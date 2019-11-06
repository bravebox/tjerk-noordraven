import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from "gatsby"

function BookList(props) {
  const series = props.series;
  const booksData = props.books;

  const serieList = series.map((serie, index) => {
    const books = booksData.filter(result => {
      return result.edges[0].node.data.link.uid === serie.node.uid;
    });

    let booksBlock;
    if(books.length) {
      booksBlock = books[0].edges.map((book, index) => (
        <div key={`item-${index}`} className="vs-serie-menu__book">
          <span>{book.node.data.book_title.text} </span>
          <Link to={`/${book.node.uid}`}>bekijk </Link>
          <a href={book.node.data.book_affiniate_link.url} rel="noopener noreferrer" target="_blank">bestel </a>
        </div>
      ))
    }

    return (
      <div key={`item-${index}`} className="vs-serie-menu__serie">
        <div className="vs-serie-menu__cover">
          <img
            src={serie.node.data.serie_cover.url}
            alt="Serie Cover"
          />
        </div>
        <div className="vs-serie-menu__details">
          <h3>{serie.node.data.serie_title.text} <Link to={`/${serie.node.uid}`}>bekijk</Link></h3>
          {booksBlock}
        </div>
      </div>
    )
  });

  return (
    <div className="vs-booklist">{serieList}</div>
  );
}

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
      seriesMenuOpen: false,
    }

    this.toggleMenu = this.toggleMenu.bind(this)
    this.toggleSerieMenu = this.toggleSerieMenu.bind(this)
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  toggleSerieMenu(e) {
    e.preventDefault();
    this.setState({ seriesMenuOpen: !this.state.seriesMenuOpen })
  }

  render() {
    return(
      <React.Fragment>
        <div className={`vs-nav-container header${this.state.menuOpen ? ' is-open' : ''}`} id="header">
          <button type="button" className="vs-nav-trigger" onClick={this.toggleMenu}>menu</button>
          <nav className="vs-nav">
            <Link to="/">Home</Link>
            <a href="/series" className="vs-nav--series-d" id="seriesBtn" onClick={this.toggleSerieMenu}>Series</a>
            <Link to="/de-engste-serie-ooit/" className="vs-nav--series-m">Engste serie ooit</Link>
            <Link to="/monsterwereld/" className="vs-nav--series-m">Monsterwereld</Link>
            <Link to="/over-mij">Over mij</Link>
            <Link to="/optredens">Optredens</Link>
            <Link to="/agenda">Agenda</Link>
            <Link to="/boekbespreking">Boekbespreking</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <div className={`vs-series-menu vs-series-menu--${this.state.seriesMenuOpen}`}>
            <div className="vs-series-menu__bg">
              <BookList
                series={this.props.series.edges}
                books={this.props.grouped_books_by_serie.group} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        series: allPrismicSerie(sort: {fields: data___order}) {
          edges {
            node {
              uid
              data {
                serie_title {
                  text
                }
                serie_cover {
                  url
                }
              }
            }
          }
        }
        grouped_books_by_serie: allPrismicBook(sort: {fields: data___order}) {
          group(field: data___link___uid) {
            edges {
              node {
                uid
                data {
                  order
                  book_title {
                    text
                  }
                  link {
                    uid
                    document {
                      data {
                        serie_title {
                          text
                        }
                      }
                    }
                  }
                  book_affiniate_link {
                    url
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <Nav series={data.series} grouped_books_by_serie={data.grouped_books_by_serie} {...props} />
    )}
  />
)

