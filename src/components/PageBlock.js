import React from "react"

class PageBlock extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="vs-section vs-section--rock">
          <div className="vs-copy">
            <div className="wrapper">
              <div className="col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">
                <h1 hidden={this.props.title ? false : true}>
                  {this.props.title}
                </h1>
                <main
                  dangerouslySetInnerHTML={{
                    __html: this.props.body,
                  }}
                ></main>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default props => <PageBlock {...props} />
