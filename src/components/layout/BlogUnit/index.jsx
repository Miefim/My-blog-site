import { useParams } from "react-router-dom"
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { doc } from "firebase/firestore";

import LoaderCircle from "../../UI/LoaderCircle";
import { database } from "../../../firebase";
import Comments from "../../UI/Comments"
import style from "./index.module.css"

function BlogUnit() {
   window.scrollTo(0, 0)

   const params = useParams()
   const [blogUnit, isLoadingBlogUnit, blogUnitError] = useDocumentData(
      doc(database, "posts", `${params.id}`)
   )
   
   return (
      <div className={style.root}>
         {blogUnitError && <h1>Server Error :(</h1> }
         {isLoadingBlogUnit
         ?  <LoaderCircle className={style.loader}/> 
         :
            <>  
            <h1 className={style.title}>{blogUnit?.title}</h1>
            <p className={style.text} style={{whiteSpace: 'break-spaces'}}>
               <img className={style.img} src={blogUnit?.img} alt="" />
               {blogUnit?.text}
            </p>
            <Comments url = {`posts/${params.id}/comments`}/>
            </>
         }  
      </div>
   )
}

export default BlogUnit