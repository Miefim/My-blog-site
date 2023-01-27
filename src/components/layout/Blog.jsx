import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection } from "firebase/firestore";

import LoaderCircle from '../UI/LoaderCircle'
import { database } from "../../firebase";

function Blog() {
   const [collectionBlog, isLoadingCollection, collectionError] = useCollection(
      collection(database, "posts")
   )

   const blogs = useMemo(() => {
      let blogs = []
      collectionBlog?.forEach(el => {   
         const time = el.data().date?.seconds? (el.data().date.seconds)*1000 : 0
         blogs.push({
            id: el.id, 
            data: el.data(),
            date: new Intl.DateTimeFormat("en", {
               day: "numeric", 
               month: "long", 
               year: "numeric",
            }).format(new Date(time)).replace(/(\s?\г\.?)/, "")
         })
         blogs.sort((a, b) => a.data.date?.seconds > b.data.date?.seconds ? -1 : 1)
         blogs = blogs.slice(0, 3)  
      })
      return blogs
   },[collectionBlog])

   const navigate = useNavigate()

   return (
      <section className="blog" name="blog">
      <div className="container">
         <div className="resume-title">
            <div className="line-title"></div>
            <div className="title">Blog</div>
         </div>
         <div className="blog-content">
            {collectionError && <h1>Server Error :(</h1> }
            {isLoadingCollection
            ?  <div className="blog-loaderBlock"><LoaderCircle style={{height: '100px', width: '100px'}}/></div>
            :
               blogs.map((news) => 
                  <div 
                     className="blog-unit" 
                     key={news.id}
                  >
                     <img className="blog-unit-image" src={news.data.img} alt="" onClick={ () => navigate(`${news.id}`)}/>
                     <div className="blog-unit-title">{news.data.title}</div>
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
                           Comments ({news.data.commentCount || 0})
                        </div>
                     </div>
                     <div className="blog-unit-news">
                     {news.data.text}
                     </div>
                     <div className="blog-unit-read-more" onClick={ () => navigate(`${news.id}`)}>
                        More
                        <img className="blog-unit-read-more-icon" src="images/right-arrow.png" alt="" />
                     </div>
                  </div>
               )}
         </div>
         <Link to ="/blog_list" className="blog-button">All posts</Link>
      </div>
   </section>
   )}

   export default Blog