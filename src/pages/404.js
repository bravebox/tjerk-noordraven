import React from "react"
import Nav from "../components/Nav"
import Page from "../layouts/Page"

class default404 extends React.Component {
  render() {
    return(
      <React.Fragment>
        <Page>
          <Nav />
          <p>Page not found</p>
        </Page>
      </React.Fragment>
    );
  }
}

export default default404