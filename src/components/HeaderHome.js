import React from "react"
import "../../static/spookhuis.svg"
class HeaderHome extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="vs-header vs-spookhuis">
          <img alt="spookhuis.svg" src="/spookhuis.svg" id="spookhuis" className="svg-inline" />
        </header>
      </React.Fragment>
    )
  }
}

export default props => <HeaderHome {...props} />
