import React from "react"
import { SiteProvider } from "./src/context/SiteContext"
import "./src/scripts/custom-scripts.js"

// const { registerLinkResolver } = require('gatsby-source-prismic-graphql');
// const { linkResolver } = require('./src/utils/linkResolver');
// registerLinkResolver(linkResolver);

export const wrapRootElement = ({ element }) => (
  <SiteProvider>{element}</SiteProvider>
)