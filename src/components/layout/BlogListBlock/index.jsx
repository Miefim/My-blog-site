import { useNavigate } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { getAuth } from "firebase/auth"
import { useAuthState } from 'react-firebase-hooks/auth';
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useCollection } from 'react-firebase-hooks/firestore';

import { useFetching } from '../../../hooks/useFetching';
import { database } from "../../../firebase";
import CreateBlog from '../CreateBlogBlock';
import ModalWin from '../../UI/ModalWin';
import LoaderCircle from '../../UI/LoaderCircle';
import LoaderBlogList from '../../UI/skeleton/LoaderBlogList'
import Button from '../../UI/Button'
import style from './index.module.css'

function BlogListBlock() {
   window.scrollTo(0, 0)

   const windowWidth = window.innerWidth

   const auth = getAuth()
   const [user] = useAuthState(auth);
   
   const [buttonId, setButtonId] = useState(0)
   const [modalVisible, setModalVisible] = useState(false)
   const [modalVisibleWarning, setModalVisibleWarning] = useState(false)

   const navigate = useNavigate()

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
      })
      return blogs
   },[collectionBlog])

   const [removePost, isRemoveLoad, removeError] = useFetching(async(props) => {
      const collectionComm = await getDocs(collection(database, `posts/${props}/comments`))
      collectionComm.forEach(async(el) => {
         await deleteDoc(doc(database, `posts/${props}/comments`, el.id));
      })
      await deleteDoc(doc(database, "posts", `${props}`));
      setModalVisibleWarning(false)
   }) 

   return (
      <div className={style.root}>
         {collectionError && <h1>Server Error :(</h1>}
         {blogs?.length === 0 && !isLoadingCollection? <h1>There is no news yet</h1> : ''}
         <div className={style.container}>
         {user?.uid === process.env.REACT_APP_ADMIN_UID && 
            <Button className={style.createPost} onClick = {() => setModalVisible(true)}>
               Создать пост +
            </Button>
         }
         {isLoadingCollection
            ?  
               windowWidth > 1250? [...new Array(5)].map((_, index) => <LoaderBlogList key = {index}/>) : <LoaderCircle style={{height: '100px', width: '100px'}}/>
            :
               blogs.map((news) =>
                  <div className={style.blogUnit} key={news.id}>
                     <div className={style.imageBlock}>
                        <img className={style.image} src={news.data.img} alt="" onClick={() => navigate(`${news.id}`)}/>
                        <div className={style.type}>{news.type}</div>
                     </div>
                     <div className={style.description}>
                        <h1>{news.data.title}</h1>
                        <p>{news.data.text}</p>
                        <div className={style.infoLine}>
                           <div className={style.date}>{news.date}</div>
                           <div 
                              className={style.comment}
                              onClick={() => {
                                 navigate(`${news.id}`)
                                 setTimeout(() => {
                                    document.querySelector(`#comments`)?.scrollIntoView({
                                       behavior: 'smooth'
                                    })
                                 }, 500)
                              }}
                           >
                              <img className={style.commentIcon} src="images/blog-unit-info-line-comment-icon.png" alt="" />
                              Comments ({news.data.commentCount || 0})
                           </div>
                           <div className={style.more} onClick = {() => navigate(`${news.id}`)}>
                              More
                              <img className={style.arrow} src='images/right-arrow.png' alt="" />
                           </div>
                        </div>
                     </div>
                     {
                        user?.uid === process.env.REACT_APP_ADMIN_UID && 
                           <Button 
                              id = {news.id} 
                              className={style.deleteBtn} 
                              onClick = {(e) => {
                                 setModalVisibleWarning(true)
                                 setButtonId(e.target.id)
                              }}
                           >
                              Delete
                           </Button>
                     }
                  </div>
               )
         }
         </div>
         {user?.uid === process.env.REACT_APP_ADMIN_UID && 
         <ModalWin visible={modalVisible} setVisible={setModalVisible}>
            <CreateBlog callback={() => setModalVisible(false)}/>
         </ModalWin>}
         {user?.uid === process.env.REACT_APP_ADMIN_UID && 
         <ModalWin visible={modalVisibleWarning} setVisible={setModalVisibleWarning}>
            <div className={style.warning}>
               Do you really want to delete the post?
               <div className={style.warning_block_buttons}>
                  <Button 
                     className={style.warning_delete_btn}
                     onClick = {() => removePost(buttonId)}
                  >
                     {!removeError
                        ?  isRemoveLoad? <LoaderCircle/> : 'Delete'
                        :  'Error' 
                     }
                  </Button>
                  <Button onClick={() => setModalVisibleWarning(false)}>Cancel</Button>
               </div>
            </div>
         </ModalWin>}
      </div>
      
   )}

   export default BlogListBlock