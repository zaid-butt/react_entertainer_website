import React from "react"
import ContentLoader from "react-content-loader"

const McardSkel = (props) => (
  <ContentLoader viewBox="0 0 500 300" width={500} {...props}>
    <rect x="0" y="0" rx="5" ry="5" width="300" height="180" />
    <rect x="5" y="190" rx="0" ry="0" width="250" height="10" />
    <rect x="5" y="210" rx="0" ry="0" width="200" height="15" />
    <rect x="5" y="240" rx="10" ry="10" width="130" height="25" />
    <rect x="150" y="240" rx="10" ry="10" width="75" height="25" />
    <rect x="5" y="280" rx="0" ry="0" width="50" height="10" />
    <rect x="65" y="280" rx="0" ry="0" width="50" height="10" />
    <rect x="125" y="280" rx="0" ry="0" width="50" height="10" />
    <rect x="185" y="280" rx="0" ry="0" width="50" height="10" />
  </ContentLoader>
)

export default McardSkel;

