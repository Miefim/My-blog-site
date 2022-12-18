import { useSelector } from 'react-redux'

import style from './index.module.css'

function BlogListBlock() {
   const blogList = useSelector(state => state.blogList.value)
   window.scrollTo(0, 0)
   return (
      <div className={style.root}>
         <div className={style.container}>
         {blogList.map((news) => 
            <div className={style.blogUnit} key={news.id}>
               <div className={style.imageBlock}>
                  <img className={style.image} src={news.img} alt="" />
                  <div className={style.type}>{news.type}</div>
               </div>
               <div className={style.description}>
                  <h1>{news.title}</h1>
                  <h3>{news.text}</h3>
                  <div className={style.infoLine}>
                     <div className={style.date}>{news.date}</div>
                     <div className={style.comment}>
                        <img className={style.commentIcon} src="images/blog-unit-info-line-comment-icon.png" alt="" />
                        Комментарии({news.numberСomments})
                     </div>
                     <div className={style.more}>
                        Читать дальше
                        <img className={style.arrow} src='images/right-arrow.png' alt="" />
                     </div>
                  </div>
               </div>
            </div>
         )}
         </div>
      </div>
   )}

   export default BlogListBlock