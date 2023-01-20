import React from "react"
import ContentLoader from "react-content-loader"

const LoaderComments = (props) => (
  <ContentLoader 
    speed={2}
    width={522}
    height={185}
    viewBox="0 0 522 185"
    backgroundColor="#c2c2c2"
    foregroundColor="#ffffff"
    {...props}
  >
    <rect x="10" y="28" rx="9" ry="9" width="100" height="22" /> 
    <rect x="10" y="65" rx="5" ry="5" width="500" height="60" /> 
    <rect x="392" y="164" rx="6" ry="6" width="120" height="15" />
  </ContentLoader>
)

export default LoaderComments