import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchBlogList } from "../../Redux/slices/blogListSlice";
import { useNavigate } from "react-router-dom";

function Blog() {
   const {blogList, status, error} = useSelector(state => state.blogList)  
   const dispatch = useDispatch()

   const navigate = useNavigate()

   React.useEffect(() => {
      dispatch(fetchBlogList())
   }, [])

   return (
      <section className="blog" name="blog">
      <div className="container">
         <div className="resume-title">
            <div className="line-title"></div>
            <div className="title">Блог</div>
         </div>
         <div className="blog-content">
            {blogList.slice(-3).reverse().map((news) => 
               <div 
                  className="blog-unit" 
                  key={news.id}
               >
                  <img className="blog-unit-image" src={news.img} alt="" />
                  <div className="blog-unit-title">{news.title}</div>
                  <div className="blog-unit-info-line">
                     <div className="blog-unit-info-line-date">{news.date}</div>
                     <div 
                        className="blog-unit-info-line-comment" 
                        onClick={() => {
                           navigate(`${news.id}`)
                           setTimeout(() => {
                              document.querySelector(`#comments`)?.scrollIntoView({
                                 behavior: 'smooth'
                              })
                           }, 500)
                        }}>
                        <img
                           className="blog-unit-info-line-comment-icon"
                           src="images/blog-unit-info-line-comment-icon.png"
                           alt=""
                        />
                        Комментарии ({news.comments.length})
                     </div>
                  </div>
                  <div className="blog-unit-news">
                    {news.text}
                  </div>
                  <div className="blog-unit-read-more" onClick={ () => navigate(`${news.id}`)}>
                     Читать далее
                     <img className="blog-unit-read-more-icon" src="images/right-arrow.png" alt="" />
                  </div>
               </div>
            )}
         </div>
         {status === 'loading' && <h1>Загрузка...</h1>}
         {error && <h1>{error}</h1> }
         <Link to ="/blog_list" className="blog-button">Читать все новости</Link>
      </div>
   </section>
   )}

   export default Blog