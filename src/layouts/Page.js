import React from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import HeaderPage from "../components/HeaderPage"
import "../styles/main.scss"

export default ({ children }) => (
  <div className="vs-site-wrap">
    <div className="vs-site">
      <Nav />
      <div className="vs-content-container">
        <div className="vs-pageloader" hidden>
          <img src="/img/status.gif" alt="status.gif" />
        </div>
        <HeaderPage />
        <div className="vs-content-inner-container mobile-center-text">
          {children}
        </div>
      </div>
    </div>
    <Footer />
  </div>
)
