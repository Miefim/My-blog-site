import HeaderInner from "../../components/layout/HeaderInner"
import BlogUnit from "../../components/layout/BlogUnit"
import Footer from "../../components/layout/Footer"

import style from './index.module.css'

function BlogUnitPage () {
   return(
      <div className={style.root}>
         <HeaderInner />
         <BlogUnit />
         <Footer />
      </div>
   )
}

export default BlogUnitPage