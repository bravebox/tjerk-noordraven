import React from "react"

class Footer extends React.Component {
  render() {
    const DateObj = new Date();

    return (
      <React.Fragment>
        <div className="vs-footer">
          <nav className="vs-social">
            <a href="https://www.facebook.com/tjerknoordraven/">
              <i className="socicon socicon-facebook icon icon--xl"></i>
              <span>Facebook</span>
            </a>
            <a href="https://www.instagram.com/tjerknoordraven/">
              <i className="socicon socicon-instagram icon icon--xl"></i>
              <span>Instagram</span>
            </a>
            <a href="https://www.youtube.com/channel/UCDdHl4ZR4kjbK72DXm74bZQ/videos/">
              <i className="socicon socicon-youtube icon icon--xl"></i>
              <span>YouTube</span>
            </a>
          </nav>
          <div className="u-p-2 u-text--c">
            <h4 className="u-m-0 primary">Copyright {DateObj.getFullYear()} - Tjerk Noordraven</h4>
            <p className="u-color--muted">
              Fotografie: Vincent Kos | Website: Mick Schouten (bravebox.io)
            </p>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default props => <Footer {...props} />
