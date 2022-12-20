import HeaderInner from "../../components/layout/HeaderInner"
import CreateBlogBlock from "../../components/layout/CreateBlogBlock"
import Footer from "../../components/layout/Footer"
import style from "./index.module.css"

function CreateBlogPage () {
   return(
      <div className={style.root}>
      <HeaderInner />
      <CreateBlogBlock />
      <Footer />
      </div>
   )
}

export default CreateBlogPage