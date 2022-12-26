import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { fetchBlogList, deleteBlogList } from '../../../Redux/slices/blogListSlice'

import LoaderBlogList from '../../UI/skeleton/LoaderBlogList'
import Button from '../../UI/Button'
import style from './index.module.css'

function BlogListBlock() {
   window.scrollTo(0, 0)

   const store = useSelector(state => state)
   const {deleteStatus, deleteError} = useSelector (state => state.blogList)
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const [buttonId, setButtonId] = useState(0)

   useEffect(() => {
      dispatch(fetchBlogList('?sortBy=id&order=desc'))
   }, [])

   const removePost = async(e) => {
      setButtonId(e.target.id)
      await dispatch(deleteBlogList([e.target.id]))
      setTimeout(() => {
         dispatch(fetchBlogList('?sortBy=id&order=desc'))
      }, 1000)  
   } 

   return (
      <div className={style.root}>
         {store.blogList.error && <h1>{store.blogList.error}</h1>}
         <div className={style.container}>
         {store.adminAutorization.value && 
            <Button className={style.createPost} onClick = {() => navigate('/create_blog')}>
               Создать пост +
            </Button>
         }
         {store.blogList.blogList.map((news) =>
            store.blogList.status === 'loading'
            ? 
            <LoaderBlogList key = {news.id}/>
            :
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
                     <div className={style.comment}
                     onClick={() => {
                        navigate(`${news.id}`)
                        setTimeout(() => {
                           document.querySelector(`#comments`)?.scrollIntoView({
                              behavior: 'smooth'
                           })
                        }, 500)
                     }}>
                        <img className={style.commentIcon} src="images/blog-unit-info-line-comment-icon.png" alt="" />
                        Комментарии({news.comments.length})
                     </div>
                     <div className={style.more} onClick = { () => navigate(`${news.id}`) }>
                        Читать дальше
                        <img className={style.arrow} src='images/right-arrow.png' alt="" />
                     </div>
                  </div>
               </div>
               {store.adminAutorization.value && 
                  <Button id = {news.id} className={style.deleteBtn} onClick = {removePost}>
                     {buttonId === news.id? deleteStatus === 'loading'? 'Удаление...' : '' : 'Удалить пост'} 
                     {buttonId === news.id? deleteStatus === 'resolved'? 'Удалено' : '' : ''} 
                     {buttonId === news.id? deleteStatus === 'rejected'? <div>{deleteError}</div> : '' : ''}  
                  </Button>
               }
            </div>
         )}
         </div>
      </div>
      
   )}

   export default BlogListBlock