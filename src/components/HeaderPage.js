import React from "react"

class HeaderPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="vs-header-sml vs-spookhuis">
          <img alt="header-sml-def.svg" src="/header-sml-def.svg" id="spookhuis" className="svg-inline" />
        </header>
      </React.Fragment>
    )
  }
}

export default props => <HeaderPage {...props} />
