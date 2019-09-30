import React from 'react'
import { Link } from 'gatsby'

class Nav extends React.Component {
  constructor(props) {
    super(props)

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
              <div className="vs-series-menu__serie">
                <div className="vs-series-menu__books">
                  <Link className="vs-series-menu__book" to="/het-nieuwe-spookhuis">
                    <img src="/img/het-nieuwe-spookhuis-xs.png" alt="het-nieuwe-spookhuis-xs.png" />
                  </Link>
                  <Link className="vs-series-menu__book" to="/de-transsylvanie-express">
                    <img src="/img/transsylvanie-express-xs.png" alt="transsylvanie-express-xs.png" />
                  </Link>
                  <Link className="vs-series-menu__book" to="/de-horrorhoeve">
                    <img src="/img/de-horrorhoeve-xs.png" alt="de-horrorhoeve-xs.png" />
                  </Link>
                </div>
                <Link className="vs-serie-link" to="/de-engste-serie-ooit">> De engste serie ooit</Link>
              </div>
              <div className="vs-series-menu__serie">
                <div className="vs-series-menu__books">
                  <Link className="vs-series-menu__book" to="/het-boek-van-wonderlijke-wezens-die-werkelijk-bestaan">
                    <img src="/img/Het-boek-van-wonderlijke-wezens-die-werkelijk-bestaan-xs.png"
                    alt="Het-boek-van-wonderlijke-wezens-die-werkelijk-bestaan-xs.png" />
                  </Link>
                </div>
                <Link className="vs-serie-link" to="/monsterwereld">> Monsterwereld</Link>
              </div>

            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default props => (
  <Nav {...props}/>
)