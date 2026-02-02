import React from "react"

class SerieBooks extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="vs-copy u-text--c">
          <div className="vs-serie-book__img">
            <a href={`/${this.props.uid}`}>
              <img
                src={this.props.cover}
                alt="Book Cover"
                hidden={this.props.cover ? false : true}
              />
              </a>
            </div>
          <div className="vs-serie-book__content">
            <h2>{this.props.title}</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: this.props.description,
              }}
            />
          </div>
          {/* <a href={`/${this.props.uid}`} className="u-btn-primary">Bekijk</a> */}
          {/* <a href={this.props.aff_link} target="_blank" rel="noopener noreferrer" className="u-btn-primary">Bestel nu</a> */}
        </div>
      </React.Fragment>
    )
  }
}

export default props => <SerieBooks {...props} />
