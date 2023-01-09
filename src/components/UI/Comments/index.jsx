import {useEffect, useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import { getAuth } from "firebase/auth"
import { useAuthState } from 'react-firebase-hooks/auth';

import {getComments, postComments, deleteComments} from '../../../Redux/slices/commentsSlice'

import Login from "../../layout/Login"
import ModalWin from '../ModalWin'
import LoderComments from '../skeleton/LoaderComments'
import Loader from "../LoaderCircle"
import Textarea from "../../UI/Textarea"
import Button from "../../UI/Button"
import style from "./index.module.css"

function Comments({url, ...props}) {
   const auth = getAuth()
   const [user] = useAuthState(auth);

   const {commentsArray, getError, postError, deleteError, getStatus, postStatus, deleteStatus} = useSelector(state => state.comments)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getComments(url))
   },[])

   const [comment, setComment] = useState('')

   const addNewComment = async () => {
      const obj = {
         name: `${
            user?.uid === 'bqn4tboccsbVpUGKBxtly1GuOQF3'
            ?  'Admin' 
            :  user.displayName
               ?  user.displayName
               :  user.email
         }`,
         comment: comment,
         date: new Intl.DateTimeFormat("ru", {day: "numeric", month: "long", year: "numeric"}).format(new Date()).replace(/(\s?\г\.?)/, ""),
         uid: user?.uid
      }

      await dispatch(postComments([obj, url]))
      dispatch(getComments(url))
      setComment('')
   }

   const deleteComment = async (e) => {
      setBtnId(e.target.id)
      await dispatch(deleteComments([ e.target.id, url ]))
      dispatch(getComments(url))    
   }

   const [btnId, setBtnId] = useState(0)
   const [modalWinActive, setModalWinActive] = useState(false)

   return(
      <>
      <div id='comments' className={style.commentBlock}>
            <p className={style.commentBlockTitle}>Комментарии</p>
            {getStatus === "rejected" && <h3>{getError}</h3> }
            {commentsArray.map((comments) =>
               getStatus === "loading"
               ?
                  <LoderComments key = {comments.id}/> 
               : 
                  <div className={style.commentUnit} key={comments.id}>
                     <p className={style.commentName}>
                        {comments.name}:
                     </p>
                     <p>
                        {comments.comment}
                     </p> 
                     <div className={style.commentInfoLine}>
                        {
                           user?.uid === 'bqn4tboccsbVpUGKBxtly1GuOQF3' || comments.uid === user?.uid
                           ?
                              <div 
                                 id = {comments.id} 
                                 className={style.deleteBtn} 
                                 onClick = {deleteComment} 
                              >
                                 {btnId === comments.id && deleteStatus === "loading"? <Loader className={style.loaderDelete} /> : "Удалить"}
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
            )}
            {
               user
               ? 
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
                        {postStatus === "loading"? <Loader className={style.loaderBtn}/> : ""}
                        {postStatus === "rejected"? "Ошибка" : ""}
                     </Button>
                  </div>
               :
                  <p>
                     Чтобы написать комментарий, необходимо   
                     <a 
                        className = {style.auth_link}
                        onClick = {() => setModalWinActive(true)}
                     >
                        авторизоваться
                     </a>
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