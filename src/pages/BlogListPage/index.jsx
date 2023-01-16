import HeaderInner from "../../components/layout/HeaderInner";
import BlogListBlock from "../../components/layout/BlogListBlock";
import Footer from "../../components/layout/Footer";

import style from './index.module.css'

function BlogListPage() {
   return (
   <div className={style.root}>  
      <HeaderInner /> 
      <BlogListBlock />
      <Footer/>
   </div> 
   );
 }
 
 export default BlogListPage;