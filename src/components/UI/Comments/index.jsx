import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import { getComments, postComments, deleteComments } from '../../../Redux/slices/commentsSlice'

import Textarea from "../../UI/Textarea"
import Button from "../../UI/Button"
import style from './index.module.css'

function Comments({url, ...props}) {
   const { commentsArray, getError, postError, deleteError, getStatus, postStatus, deleteStatus } = useSelector(state => state.comments)
   const autorizations = useSelector(state => state.adminAutorization.value)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getComments(url))
   },[])

   const [comment, setComment] = useState('')

   const addNewComment = async () => {
      setComment('')

      const obj = {
         name: 'admin',
         comment: comment,
         date: new Intl.DateTimeFormat("ru", {day: "numeric", month: "long", year: "numeric"}).format(new Date()).replace(/(\s?\г\.?)/, ""),
      }

      await dispatch(postComments([obj, url]))
      dispatch(getComments(url))
   }

   const deleteComment = async (e) => {
      setBtnId(e.target.id)
      await dispatch(deleteComments([ e.target.id, url ]))
      dispatch(getComments(url))
   }

   const [btnId, setBtnId] = useState(0)

   console.log(postStatus)

   return(
      <div className={style.commentBlock}>
            <p className={style.commentBlockTitle}>Комментарии</p>
            {getStatus === "rejected" && <h3>{getError}</h3> }
            {getStatus === "loading" && <h3>Загрузка...</h3> }
            {getStatus === "resolved" &&
               commentsArray.map((comments) => 
                  <div className={style.commentUnit} key={comments.id}>
                     <p className={style.commentName}>
                        {comments.name}:
                     </p>
                     <p>
                        {comments.comment}
                     </p> 
                     <div className={style.commentInfoLine}>
                     {
                           autorizations?
                           <div 
                              id = {comments.id} 
                              className={style.deleteBtn} 
                              onClick = {deleteComment} 
                           >
                              {btnId === comments.id? deleteStatus === "loading"? "Удаление" : "" : "Удалить"}
                              {btnId === comments.id? deleteStatus === "rejected"? <div>{deleteError}</div> : "" : ""}
                           </div>
                           :
                           ''
                     }
                        <p className={style.date}>
                           {comments.date}
                        </p>
                     </div>
                  </div>
               )
            }
            {
               autorizations? 
                  <div className={style.inputBlock}>
                     <Textarea 
                        className={style.textarea} 
                        type="text" placeholder="Ваш комментарий" 
                        value = {comment} 
                        onChange = { e => setComment(e.target.value) }
                     />
                     <Button 
                        className={style.btn} 
                        disabled = {!comment} 
                        onClick = { addNewComment }
                     >
                        {postStatus !== "loading" && postStatus !== "rejected"? "Отправить" : ""}
                        {postStatus === "loading"? "Загрузка" : ""}
                        {postStatus === "rejected"? "Ошибка" : ""}
                     </Button>
                  </div>
               :
                  <p>Чтобы написать комментарий, необходимо авторизоваться</p>
            }
      </div>
   )
}

export default Comments