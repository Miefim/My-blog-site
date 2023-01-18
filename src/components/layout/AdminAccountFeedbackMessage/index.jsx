import { useState } from "react";
import { collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useCollection } from 'react-firebase-hooks/firestore';

import { useFetching } from '../../../hooks/useFetching'
import { database } from "../../../firebase";
import LoaderCircle from '../../UI/LoaderCircle'
import LoaderAdminAccountMessage from '../../UI/skeleton/LoaderAdminAccountMessage'
import style from './index.module.css'

const AdminAccountFeedbackMessage = () => {
   const [btnId, setBtnId] = useState(0)
   const [popupState, setPopupState] = useState('')

   const swichPopup = (messageId) => {
      if(popupState === messageId){
         setPopupState('')
      }
      else {
         setPopupState(messageId)
      }
   }

   const changeStatusMessage = async([messageId, status]) => {
      await updateDoc(doc(database, "feedback-message", messageId), {
         read: status
      });
   } 

   const [messageCollection, getCollectionLoading, getCollectionError] = useCollection(
      collection(database, "feedback-message")
   )
   
   let messages = []

   messageCollection?.forEach(el => {
      messages.push({
         id: el.id, 
         data: el.data(),
         date: new Intl.DateTimeFormat("ru", {
            day: "numeric", 
            month: "long", 
            year: "numeric",
            hour: "numeric",
            minute: "numeric"
         }).format(new Date((el.data().date.seconds)*1000)).replace(/(\s?\г\.?)/, "")
      })
   })

   messages.sort((a, b) => a.data.date.seconds > b.data.date.seconds ? -1 : 1)

   const [deleteFetchMessage, deleteFetchLoading, deleteFetchError] = useFetching(async(props) => {
      await deleteDoc(doc(database, "feedback-message", `${props}`));
   })
   
   const deleteMessage = async(e) => {
      setBtnId(e.target.id)
      await deleteFetchMessage(e.target.id)
   }
   
   return(
      <>
         {getCollectionError
         ?
            <div className={style.welcome}>Ошибка сервера :(</div> 
         :
            messages.length === 0 && !getCollectionLoading
            ?
               <div className={style.welcome}>Сообщений нет</div>
            :
               getCollectionLoading
               ?
               [...new Array(2)].map((_, index) => 
                     <div style={{margin: '30px auto 30px 30px'}} key = {index}>
                        <LoaderAdminAccountMessage />
                     </div>
                  )
               :
                  messages.map((message, index) => 
                     <div className={style.message_unit} key={message.id}>
                        <div className={style.message_popup} onClick={() => swichPopup(message.id)}>
                           {message.data.read? <p className={style.popup_list_selected_string}>Прочитано</p> : <p className={style.popup_list_selected_string}>Не прочитано</p>}
                           {popupState === message.id && <div className={style.popup_list}>
                              {!message.data.read && <p className={style.popup_list_string} onClick={() => changeStatusMessage([message.id, true])}>Прочитано</p>}
                              {message.data.read && <p className={style.popup_list_string} onClick={() => changeStatusMessage([message.id, false])}>Не прочитано</p>}
                           </div>}
                        </div>
                        <div className={style.message_unit_header}>
                           <p>{index + 1}: </p> <p>Имя: {message.data.name}</p> <p>Тел: {message.data.tel}</p> <p>Email: {message.data.email}</p>  
                        </div>
                        <div className={style.message_unit_body}>
                           {message.data.message}
                        </div>
                        <div className={style.message_unit_footer}>
                           <p>{message.date}</p>
                           <p id={message.id} onClick={deleteMessage}>
                              {deleteFetchError && btnId === message.id
                              ? "Ошибка" 
                              :  deleteFetchLoading && btnId === message.id
                              ?  <LoaderCircle className={style.loader}/>
                              :  "Удалить"}
                           </p>  
                        </div>
                     </div>
                  )
         }
      </>
   )
}

export default AdminAccountFeedbackMessage