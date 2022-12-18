import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setBlogList } from "../../Redux/slices/blogListSlice";

function Blog() {
   const blogList = useSelector(state => state.blogList.value)  
   const dispatch = useDispatch()

   React.useEffect(() => {
      fetch(`https://639ef68b7aaf11ceb88f020b.mockapi.io/blog-items`)
      .then((response) => {
         return response.json()
      })
      .then((data) => {
         dispatch(setBlogList(data))
      })
   }, [])

   return (
      <section className="blog" name="blog">
      <div className="container">
         <div className="resume-title">
            <div className="line-title"></div>
            <div className="title">Блог</div>
         </div>
         <div className="blog-content">
            {blogList.slice(-3).reverse().map((project) => 
               <div className="blog-unit" key={project.id}>
                  <img className="blog-unit-image" src={project.img} alt="" />
                  <div className="blog-unit-title">{project.title}</div>
                  <div className="blog-unit-info-line">
                     <div className="blog-unit-info-line-date">{project.date}</div>
                     <div className="blog-unit-info-line-comment">
                        <img
                           className="blog-unit-info-line-comment-icon"
                           src="images/blog-unit-info-line-comment-icon.png"
                           alt=""
                        />
                        Комментарии ({project.numberСomments})
                     </div>
                  </div>
                  <div className="blog-unit-news">
                    {project.text}
                  </div>
                  <div className="blog-unit-read-more">
                     Читать далее
                     <img className="blog-unit-read-more-icon" src="images/right-arrow.png" alt="" />
                  </div>
               </div>
            )}
         </div>
         <Link to ="/blog_list" className="blog-button">Читать все новости</Link>
      </div>
   </section>
   )}

   export default Blog