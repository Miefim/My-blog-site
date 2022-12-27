import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { postBlogList, resetStatus } from "../../../Redux/slices/blogListSlice"

import Input from "../../UI/Input"
import Textarea from "../../UI/Textarea"
import Button from "../../UI/Button"
import style from "./index.module.css"

function CreateBlog() {
   const {status, error} = useSelector(state => state.blogList)
   const dispatch = useDispatch()

   const navigate = useNavigate()

   const [title, setTitle] = useState('')
   const [item, setItem] = useState('')
   
   useEffect(() => {
      dispatch(resetStatus(null))   
   }, [])

   const addNewPost = () => {
      setTitle('')
      setItem('')

      const obj = {
         img: "/images/blog-image-news1.jpg",
         title: title,
         date: new Intl.DateTimeFormat("ru", {day: "numeric", month: "long", year: "numeric"}).format(new Date()).replace(/(\s?\г\.?)/, ""),
         text: item
      }

      dispatch(postBlogList([obj]))
   }
   
   return(
      <div className={style.root}>
         {status === "loading" && <h1 style={{position: "absolute"}}>Загрузка...</h1> }
         {error && <h1>{error} :(</h1>}
         {status === 'resolved' && 
         <div className={style.resolvedBlock}>
            <h1>Пост успешно добавлен &#10003;</h1>
            <div>
               <Button 
                  className={style.resolvedBlock_addBtn} 
                  onClick = { () => dispatch(resetStatus(null)) }
               >
                  Добавить еще пост
               </Button>
               <Button 
                  className={style.resolvedBlock_toBlogListBtn}
                  onClick = { () => navigate('/blog_list') }
               >
                  Перейти к списку постов
               </Button>
            </div>
         </div>}
         {status === null && 
            <>
               <Input placeholder={'Название статьи'} value = {title} onChange = { e => setTitle(e.target.value) }/>
               <Textarea className={style.textarea} placeholder={'Статья'} value = {item} onChange = { e => setItem(e.target.value) }/>
               <Button disabled = {!title && !item} onClick = { addNewPost } className={style.btn}>Создать пост</Button>
            </>
         }      
      </div>
   )
}

export default CreateBlog