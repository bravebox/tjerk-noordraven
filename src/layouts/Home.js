import React from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import HeaderHome from "../components/HeaderHome"
import "../styles/main.scss"

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showLoader: true
    }

    setTimeout(() => {
      this.setState({ showLoader: false });
    }, 1200);
  }

  render() {
    return (
      <div className="vs-site-wrap">
        <div className="vs-site">
          <Nav />
          <div className="vs-content-container">
            <div className={`vs-pageloader ${this.state.showLoader ? 'is-active' : 'is-not-active'}`}>
              <img src="/img/status.gif" alt="status.gif" />
            </div>
            <HeaderHome />
            <div className="vs-content-inner-container mobile-center-text">
              {this.props.children}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default props => <Home {...props} />