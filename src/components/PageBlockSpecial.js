import React from "react"
import { Link } from "gatsby"
import "../../static/img/blank-banner.png"

class PageBlock extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="vs-section vs-section--rock">
          <div className="vs-photo-banner vs-photo-banner--as-section">
            <img
              src={
                this.props.image ? this.props.image : "/img/blank-banner.png"
              }
              className="big"
              alt="Banner"
            />
            <div className="vs-photo-banner-intro vs-copy">
              <h2>{this.props.title}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: this.props.content,
                }}
              />
              <Link className="u-btn-primary" to={this.props.link}>Lees meer</Link>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default props => <PageBlock {...props} />
