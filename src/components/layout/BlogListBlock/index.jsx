import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import { fetchBlogList, setBlogList, deleteBlogList } from '../../../Redux/slices/blogListSlice'

import Button from '../../UI/Button'
import style from './index.module.css'

function BlogListBlock() {
   const store = useSelector(state => state)
   const dispatch = useDispatch()
   const navigate = useNavigate()

   useEffect(() => {
      dispatch(fetchBlogList())
   }, [])

   const removePost = (e) => {
      const blogList = store.blogList.blogList
      let id = e.target.id
      dispatch(setBlogList(blogList.filter(news => news.id != id)))
      dispatch(deleteBlogList(id)) 
   }

   window.scrollTo(0, 0)
   return (
      <div className={style.root}>
         {store.blogList.status === 'loading'&& <h1>Загрузка...</h1> }
         {store.blogList.error && <h1>{store.blogList.error}</h1>}
         <div className={style.container}>
         {store.adminAutorization.value && <Button className={style.createPost} onClick = {() => navigate('/create_blog')}>Создать пост +</Button>}
         {store.blogList.blogList.map((news) => 
            <div className={style.blogUnit} key={news.id}>
               <div className={style.imageBlock}>
                  <img className={style.image} src={news.img} alt="" />
                  <div className={style.type}>{news.type}</div>
               </div>
               <div className={style.description}>
                  <h1>{news.title}</h1>
                  <p>{news.text}</p>
                  <div className={style.infoLine}>
                     <div className={style.date}>{news.date}</div>
                     <div className={style.comment}>
                        <img className={style.commentIcon} src="images/blog-unit-info-line-comment-icon.png" alt="" />
                        Комментарии({news.comments.length})
                     </div>
                     <div className={style.more} onClick = { () => navigate(`${news.id}`) }>
                        Читать дальше
                        <img className={style.arrow} src='images/right-arrow.png' alt="" />
                     </div>
                  </div>
               </div>
               {store.adminAutorization.value && <Button id = {news.id} className={style.deleteBtn} onClick = {removePost}>Удалить пост</Button>}
            </div>
         )}
         </div>
      </div>
   )}

   export default BlogListBlock