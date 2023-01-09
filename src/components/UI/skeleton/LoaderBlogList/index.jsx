import React from "react"
import ContentLoader from "react-content-loader"

const LoaderBlogList = (props) => (
  <ContentLoader 
    speed={2}
    width={1230}
    height={420}
    viewBox="0 0 1230 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="10" y="0" rx="0" ry="0" width="600" height="400" />
    <rect x="630" y="70" rx="10" ry="10" width="300" height="50" />
    <rect x="630" y="140" rx="10" ry="10" width="570" height="17" />
    <rect x="630" y="172" rx="10" ry="10" width="570" height="17" />
    <rect x="630" y="204" rx="10" ry="10" width="570" height="17" />
    <rect x="630" y="236" rx="10" ry="10" width="570" height="17" />
    <rect x="630" y="268" rx="10" ry="10" width="570" height="17" />
    <rect x="630" y="340" rx="20" ry="20" width="166" height="40" />
    <rect x="830" y="340" rx="20" ry="20" width="166" height="40" />
    <rect x="1030" y="340" rx="20" ry="20" width="166" height="40" />
  </ContentLoader>
)

export default LoaderBlogList