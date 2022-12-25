import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { fetchBlogList } from "../../../Redux/slices/blogListSlice"

import Comments from "../../UI/Comments"
import style from "./index.module.css"



function BlogUnit() {
   const params = useParams()
   const blogUnit = useSelector(state => state.blogList.blogList)
   const { status, error } = useSelector(state => state.blogList)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(fetchBlogList(`?id=${params.id}`))
   }, [])

   window.scrollTo(0, 0)
   
   return (
      <div className={style.root}>
         {status === 'loading' && <h1>Загрузка...</h1> }
         {error && <h1>{error}</h1> }
         <h1 className={style.title}>{blogUnit[0]?.title}</h1>
         <p className={style.text}>
            <img className={style.img} src={blogUnit[0]?.img} alt="" />
            {blogUnit[0]?.text}
         </p>
         <Comments url = {`https://639ef68b7aaf11ceb88f020b.mockapi.io/blog-items/${params.id}/comments`}/>
      </div>
   )
}

export default BlogUnit