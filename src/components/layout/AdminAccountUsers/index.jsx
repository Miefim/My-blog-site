import { collection, getDocs, query, collectionGroup, where, deleteDoc, doc, updateDoc } from "firebase/firestore"
import { useState, useMemo } from "react"
import { useCollectionData, useCollection } from "react-firebase-hooks/firestore"

import { database } from "../../../firebase"
import { useFetching } from "../../../hooks/useFetching"
import LoaderCircle from "../../UI/LoaderCircle"
import style from './index.module.css'

const AdminAccountUsers = () => {
   const [activeUser, setActiveUser] = useState('')
   const [activeComments, setActiveComments] = useState('')
   
   const [users] = useCollectionData(
      collection(database, 'users')
   )

   const [commentsCollection, isLoadCollection, errorCollection] = useCollection(
      query(collectionGroup(database, "comments"), where("userId", "==", activeUser))
   )

   const comments = useMemo(() => {
      let comments = []
      commentsCollection?.forEach(el => {   
         const time = el.data().date?.seconds? (el.data().date.seconds)*1000 : 0
         comments.push({
            id: el.id, 
            data: el.data(),
            date: new Intl.DateTimeFormat("ru", {
               day: "numeric", 
               month: "long", 
               year: "numeric",
               minute: "numeric",
               hour: "numeric"
            }).format(new Date(time)).replace(/(\s?\г\.?)/, "")
         })
         comments.sort((a, b) => a.data.date?.seconds > b.data.date?.seconds ? -1 : 1)
      })
      return comments
   },[commentsCollection])

   const [deleteComment, isDeleteLoad] = useFetching(async([ref, commentId, postId]) => {
      await deleteDoc(doc(database, ref, commentId));
      const commentsCollection = await getDocs(collection(database, ref))
      await updateDoc(doc(database, "posts", postId), {
         commentCount: commentsCollection.docs.length
      });
   }) 

   const deleteAllComments = () => {
      comments.forEach(comment => deleteComment([`posts/${comment.data.postId}/comments`, comment.id, comment.data.postId]))
   }

   return(
      <div className={style.root}>
         {users?.map((user, index) => 
            <div className={style.user_unit} key={user.uid} onClick={() => setActiveUser(activeUser !== user.uid? user.uid : '')}>
               <div className={style.user_unit_header}>
                  <p className={style.user_string}>{index + 1}</p>
                  <p className={style.user_string}>Id: "{user.uid}"</p>
                  <p className={style.user_string}>Имя: "{user.displayName}"</p>
                  <p className={style.user_string}>Email: "{user.email}"</p> 
                  <img 
                     className={style.user_unit_header_iconArrow} 
                     src="/images/left-arrow.png" alt=""
                     style={activeUser === user.uid? {transform: 'rotate(90deg)'} : {}} 
                  /> 
               </div>
               <div 
                  className={style.user_unit_body}
                  style={activeUser === user.uid? {display: 'flex'} : {display: 'none'}}
                  onClick={e => e.stopPropagation()}
               >
                  <p className={style.user_string}>Id: "{user.uid}"</p>
                  <p className={style.user_string}>Имя: "{user.displayName}"</p>
                  <p className={style.user_string}>Email: "{user.email}"</p> 
                  <p className={style.user_string}>Provider: "{user.provider}"</p> 
                  <p className={style.user_string}>Дата регистрации: "
                     {user.regDate?.seconds
                     ?
                        new Intl.DateTimeFormat("ru", {
                           day: "numeric", 
                           month: "long", 
                           year: "numeric",
                           minute: "numeric",
                           hour: "numeric"
                        }).format(new Date((user.regDate.seconds) * 1000)).replace(/(\s?\г\.?)/, "")
                     :
                        ''
                     }"</p>
                  <p className={style.user_string}>Дата последнего входа: "
                     {user.signInDate?.seconds
                     ?
                        new Intl.DateTimeFormat("ru", {
                           day: "numeric", 
                           month: "long", 
                           year: "numeric",
                           minute: "numeric",
                           hour: "numeric"
                        }).format(new Date((user.signInDate.seconds) * 1000)).replace(/(\s?\г\.?)/, "")
                     :
                        ''
                     }"
                  </p>
                  <p 
                     className={style.user_string_comments} 
                     onClick={() => setActiveComments(activeComments !== user.uid? user.uid : '')}
                  >
                     Комментарии ({isLoadCollection? <LoaderCircle/> : comments.length})
                     <img 
                        className={style.user_unit_header_iconArrow} 
                        src="/images/left-arrow.png" alt=""
                        style={
                           activeComments === user.uid
                           ? 
                           {
                              transform: 'rotate(90deg)',
                              top: '5px',
                              left: '145px',
                              width: '7px'
                           } 
                           : 
                           {
                              top: '5px',
                              left: '145px',
                              width: '7px'
                           }
                        } 
                     />
                  </p>
               </div>
               <div 
                  className={style.user_unit_body_comments}
                  style={activeComments === user.uid && activeUser === user.uid? {display: 'flex'} : {display: 'none'}}
                  onClick={(e) => e.stopPropagation()}
               >
                  {comments.length > 0 && <button className={style.delete_all} onClick={deleteAllComments}>Удалить все</button>}
                  {comments.map((comment, index) => 
                     <div className={style.message_unit} key={comment.id}>
                        <div className={style.message_unit_header}>
                           <p>{index + 1}: </p> <p>Id поста: {comment.data.postId}</p> 
                        </div>
                        <div className={style.message_unit_body}>
                           {comment.data.comment}
                        </div>
                        <div className={style.message_unit_footer}>
                           <p>{comment.date}</p>
                           <p id={comment.id} onClick={() => deleteComment([`posts/${comment.data.postId}/comments`, comment.id, comment.data.postId])}>
                              Удалить
                           </p>  
                        </div>
                     </div>
                  )}
               </div>
            </div>  
         )}
      </div>
   )
}

export default AdminAccountUsers