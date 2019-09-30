import React from "react"

const defaultState = {
  open: false,
  toggleOpen: () => {},
  _meta: {}
}

const SiteContext = React.createContext(defaultState)

class SiteProvider extends React.Component {
  state = {
    open: false,
    _meta: {
      title: 'Tjerk Noordraven',
      title_devider: ' - ',
    }
  }

  toggleOpen = () => {
    let open = !this.state.open
    localStorage.setItem("open", JSON.stringify(open))
    this.setState({ open })
  }

  componentDidMount() {
    // Getting open mode value from localStorage!
    const lsOpen = JSON.parse(localStorage.getItem("open"))
    if (lsOpen) {
      this.setState({ open: lsOpen })
    }
  }

  render() {
    const { children } = this.props
    const { open, _meta } = this.state
    return (
      <SiteContext.Provider
        value={{
          open,
          toggleOpen: this.toggleOpen,
          _meta,
        }}
      >
        {children}
      </SiteContext.Provider>
    )
  }
}

export default SiteContext

export { SiteProvider }
