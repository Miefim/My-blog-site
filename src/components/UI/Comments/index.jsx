import { useMemo, useState} from "react"
import { getAuth } from "firebase/auth"
import { useAuthState } from 'react-firebase-hooks/auth';
import { collection, addDoc, serverTimestamp, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useCollection } from 'react-firebase-hooks/firestore'; 
import { useParams } from "react-router-dom";

import { database } from '../../../firebase';
import { useFetching } from '../../../hooks/useFetching';
import Login from "../../layout/Login"
import ModalWin from '../ModalWin'
import LoderComments from '../skeleton/LoaderComments'
import Loader from "../LoaderCircle"
import Textarea from "../../UI/Textarea"
import Button from "../../UI/Button"
import style from "./index.module.css"


function Comments({url}) {
   const auth = getAuth()
   const [user] = useAuthState(auth);
   
   const params = useParams()

   const [comment, setComment] = useState('')
   const [btnId, setBtnId] = useState(0)
   const [modalWinActive, setModalWinActive] = useState(false)

   const [commentsCollection, getCollectionLoading, getCollectionError] = useCollection(
      collection(database, url)
   )
   
   const comments = useMemo(() => {
      let arr = []
      commentsCollection?.forEach(el => {   
         const time = el.data().date?.seconds? (el.data().date.seconds)*1000 : 0
         arr.push({
            id: el.id, 
            data: el.data(),
            date: new Intl.DateTimeFormat("en", {
               day: "numeric", 
               month: "long", 
               year: "numeric",
               minute: "numeric",
               hour: "numeric"
            }).format(new Date(time)).replace(/(\s?\г\.?)/, "")
         })
         arr.sort((a, b) => a.data.date?.seconds > b.data.date?.seconds ? 1 : -1)
      })
      return arr
   },[commentsCollection])
   
   const [postFetchComment, isPostFetchLoading, postFetchError] = useFetching(async() => {
      await addDoc(collection(database, url), {
         name: 
               user?.uid === process.env.REACT_APP_ADMIN_UID
               ?  'Admin' 
               :  user.displayName
                  ?  user.displayName
                  :  user.email
               ,
               comment,
         date: serverTimestamp(),
         userId: user?.uid,
         postId: params.id
       });
   })

   const addNewComment = async () => {
      await postFetchComment()
      await updateDoc(doc(database, "posts", params.id), {
         commentCount: comments.length + 1 
      });
      setComment('')
   }

   const [deleteFetchMessage, deleteLoading, deleteError] = useFetching(async(props) => {
      await deleteDoc(doc(database, url, `${props}`));
   })
   
   const deleteComment = async (e) => {
      setBtnId(e.target.id)
      await deleteFetchMessage(e.target.id)
      await updateDoc(doc(database, "posts", params.id), {
         commentCount: comments.length - 1 
      });     
   }

   return(
      <>
      <div id='comments' className={style.commentBlock}>
            <p className={style.commentBlockTitle}>Comments</p>
            {comments.length === 0 && !getCollectionLoading? <div>There are no comments yet</div> : ''}
            {getCollectionError && <h3>Server Error :(</h3> }
            {getCollectionLoading
            ?
               [...new Array(5)].map((_, index) =>
                  <LoderComments key = {index}/> 
               )
            :
               comments.map((comments) =>
                  <div className={style.commentUnit} key={comments.id}>
                     <p className={style.commentName}>
                        {comments.data.name}:
                     </p>
                     <p>
                        {comments.data.comment}
                     </p> 
                     <div className={style.commentInfoLine}>
                        <p className={style.date}>
                           {comments.date}
                        </p>
                        {
                           user?.uid === process.env.REACT_APP_ADMIN_UID || comments.data.userId === user?.uid
                           ?
                              <div 
                                 id = {comments.id} 
                                 className={style.deleteBtn} 
                                 onClick = {deleteComment} 
                              >
                                 {btnId === comments.id && deleteLoading? <Loader className={style.loaderDelete} /> : "Delete"}
                              </div>
                           :
                              ''
                        }
                     </div>
                  </div>
               )
            }
            {user
            ? 
               <div className={style.inputBlock}>
                  <Textarea 
                     className={style.textarea} 
                     type="text" placeholder="Your comment" 
                     value = {comment} 
                     onChange = { e => setComment(e.target.value) }
                  />
                  <Button 
                     className={style.btn} 
                     disabled = {!comment} 
                     onClick = { addNewComment }
                  >
                     {isPostFetchLoading? <Loader className={style.loaderBtn}/> : "Send"}
                  </Button>
               </div>
            :
               <p>
                  You must be    
                  <a 
                     className = {style.auth_link}
                     onClick = {() => setModalWinActive(true)}
                  >
                     logged
                  </a>
                  in to leave a comment
               </p>
            }
      </div>
      <ModalWin
         visible = {
            modalWinActive
         }
         setVisible = {
            setModalWinActive
         }
      >
         <Login successAction = {() => setModalWinActive(false)}/>
      </ModalWin>
      </>
   )
}

export default Comments