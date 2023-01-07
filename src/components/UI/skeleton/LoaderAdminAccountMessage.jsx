import React from "react"
import ContentLoader from "react-content-loader"

const LoaderAdminAccountMessage = (props) => (
  <ContentLoader 
    speed={2}
    width={630}
    height={165}
    viewBox="0 0 630 165"
    backgroundColor="#b0b0b0"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="10" y="24" rx="10" ry="10" width="300" height="16" /> 
    <rect x="10" y="54" rx="10" ry="10" width="610" height="74" /> 
    <rect x="10" y="147" rx="10" ry="10" width="100" height="15" /> 
    <rect x="555" y="139" rx="15" ry="15" width="65" height="25" />
  </ContentLoader>
)

export default LoaderAdminAccountMessage
