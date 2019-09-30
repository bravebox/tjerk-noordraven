import React from "react"
import { SiteProvider } from "./src/context/SiteContext"
import "./src/scripts/custom-scripts.js"

export const wrapRootElement = ({ element }) => (
  <SiteProvider>{element}</SiteProvider>
)