import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { fetchBlogList, postBlogList, setBlogList } from "../../../Redux/slices/blogListSlice"

import Input from "../../UI/Input"
import Textarea from "../../UI/Textarea"
import Button from "../../UI/Button"
import style from "./index.module.css"

function CreateBlog() {
   const blogList = useSelector(state => state.blogList.blogList)
   const dispatch = useDispatch()

   const navigate = useNavigate()

   useEffect(() => {
      dispatch(fetchBlogList())
   },[])

   const [title, setTitle] = useState('')
   const [item, setItem] = useState('')

   const addNewPost = () => {
      const obj = {
         id: blogList.length + 1,
         img: "images/blog-image-news1.jpg",
         title: title,
         date: new Intl.DateTimeFormat("ru", {day: "numeric", month: "long", year: "numeric"}).format(new Date()).replace(/(\s?\г\.?)/, ""),
         numberСomments: 7,
         text: item,
         comments: []
      }
      dispatch(postBlogList(obj))
      dispatch(setBlogList([...blogList, obj]))
      navigate('/blog_list')
   }

   console.log(blogList)

   return(
      <div className={style.root}>
         <Input placeholder={'Название статьи'} value = {title} onChange = { e => setTitle(e.target.value) }/>
         <Textarea placeholder={'Статья'} value = {item} onChange = { e => setItem(e.target.value) }/>
         <Button onClick = { addNewPost } className={style.btn}>Создать пост</Button>      
      </div>
   )
}

export default CreateBlog