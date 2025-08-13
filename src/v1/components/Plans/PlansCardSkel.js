import React from "react"
import ContentLoader from "react-content-loader"

const PlansCardSkel = (props) => (
  <ContentLoader viewBox="0 0 300 750" width={300} {...props}>
      {/* <rect x="20" y="20" rx="0" ry="0" width="2" height="710" />
      <rect x="288" y="20" rx="0" ry="0" width="2" height="710" />
      <rect x="20" y="20" rx="0" ry="0" width="270" height="2" /> */}
      

      <rect x="100" y="40" rx="5" ry="5" width="100" height="150" />
      <rect x="45" y="220" rx="20" ry="20" width="216" height="30" />

      <rect x="40" y="280" rx="0" ry="0" width="215" height="15" />
      <rect x="40" y="310" rx="0" ry="0" width="100" height="10" />

      <rect x="40" y="370" rx="0" ry="0" width="100" height="35" />
      <rect x="150" y="385" rx="0" ry="0" width="70" height="15" />
      <rect x="40" y="420" rx="0" ry="0" width="216" height="10" />

      <rect x="40" y="490" rx="0" ry="0" width="80" height="10" />
      <rect x="180" y="490" rx="0" ry="0" width="80" height="10" />

      <rect x="20" y="520" rx="0" ry="0" width="270" height="2" />
      <rect x="40" y="540" rx="0" ry="0" width="123" height="12" />
      <rect x="200" y="540" rx="0" ry="0" width="60" height="12" />
      <rect x="40" y="590" rx="0" ry="0" width="123" height="12" />
      <rect x="200" y="590" rx="0" ry="0" width="60" height="12" />
      <rect x="40" y="640" rx="0" ry="0" width="123" height="12" />
      <rect x="200" y="640" rx="0" ry="0" width="60" height="12" />

      <rect x="40" y="675" rx="10" ry="10" width="230" height="45" />
      {/* <rect x="20" y="730" rx="0" ry="0" width="270" height="2" /> */}
  </ContentLoader>
)

export default PlansCardSkel;

