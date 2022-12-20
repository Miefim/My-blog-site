import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { fetchBlogList } from "../../../Redux/slices/blogListSlice"

import Textarea from "../../UI/Textarea"
import Button from "../../UI/Button"
import style from "./index.module.css"


function BlogUnit() {
   const blogUnit = useSelector(state => state.blogList.blogList)
   const { status, error } = useSelector(state => state.blogList)
   const dispatch = useDispatch()

   const params = useParams()

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
         <div className={style.commentBlock}>
            <p className={style.commentBlockTitle}>Комментарии</p>
            {blogUnit[0]?.comments.map((comments) => 
               <div className={style.commentUnit} key={comments.id}>
                  <p className={style.commentName}>{comments.name}:</p>
                  <p>{comments.comment}</p> 
                  <p className={style.date}>{comments.date}</p>
               </div>
            )}
            <Textarea className={style.textarea} type="text" placeholder="Ваш комментарий" ></Textarea>
            <Button className={style.btn}>Отправить</Button>
         </div>
      </div>
   )
}

export default BlogUnit