import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFetching } from '../../../hooks/useFetching'
import { getAuth } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth'

import LoaderCircle from '../../UI/LoaderCircle'
import LoaderAdminAccountMessage from '../../UI/skeleton/LoaderAdminAccountMessage'
import style from './index.module.css'


const AdminAccountBlock = () => {
   const auth = getAuth()
   const [user] = useAuthState(auth)

   const navigate = useNavigate()

   useEffect(() => {
      if(user?.uid !== 'bqn4tboccsbVpUGKBxtly1GuOQF3'){
         navigate('/')   
      }
   },[user])

   const [active, setActive] = useState('')
   const menuClick = (e) => {
      setActive(e.target.dataset.btn)
   }

   const [message, setMessage] = useState([])

   const [getFetchMessage, getFetchLoading, getFetchError] = useFetching(async() => {
      const response = await fetch(`https://639ef68b7aaf11ceb88f020b.mockapi.io/feedback-message`)
      const result = await response.json() 
      setMessage(result)
   })

   useEffect(() => {
      getFetchMessage()
   },[])

   const [btnId, setBtnId] = useState(0)

   const deleteMessage = async(e) => {
      setBtnId(e.target.id)
      await deleteFetchMessage(e.target.id)
      getFetchMessage()
   }

   const [deleteFetchMessage, deleteFetchLoading, deleteFetchError] = useFetching(async(props) => {
      const response = await fetch(`https://639ef68b7aaf11ceb88f020b.mockapi.io/feedback-message/${props}`, {
      method: "DELETE",
      })
   })

   return(
      <div className={style.root}>
         <div className={style.side_bar}>
            <div className={
               active === "message"
               ?  [style.side_bar_btn, style.side_bar_btn_active].join(' ')
               :  style.side_bar_btn
            } 
               data-btn="message" 
               onClick={menuClick}
            >
               <img className={style.side_bar_btn_icon} src='/images/blog-icon.png' alt="" />
               Сообщения
            </div>
            <div className={
               active === "other"
               ?  [style.side_bar_btn, style.side_bar_btn_active].join(' ')
               :  style.side_bar_btn
            } 
               data-btn="other" 
               onClick={menuClick}
            >
               <img className={style.side_bar_btn_icon} src='/images/blog-icon.png' alt="" />
               Что то еще
            </div>
            <div className={
               active === "games"
               ?  [style.side_bar_btn, style.side_bar_btn_active].join(' ')
               :  style.side_bar_btn
            } 
               data-btn="games" 
               onClick={menuClick}
            >
               <img className={style.side_bar_btn_icon} src='/images/blog-icon.png' alt="" />
               Игрушки
            </div>
         </div>
         <div className={style.content}>
            {!active && <div className={style.welcome}>Привет admin! Как дела?</div>}
            {active === "message"
            ?
               getFetchError
               ?
                  <div className={style.welcome}>Ошибка сервера :(</div> 
               :
                  message.length === 0
                  ?
                     <div className={style.welcome}>Сообщений нет</div>
                  :
                     message.map((message) => 
                        getFetchLoading
                        ?
                           <div style={{margin: '30px auto 30px 30px'}} key={message.id}>
                              <LoaderAdminAccountMessage />
                           </div>
                        :
                           <div className={style.message_unit} key={message.id}>
                              <div className={style.message_unit_header}>
                                 <p>{message.id}: </p> <p>Имя: {message.name}</p> <p>Тел: {message.tel}</p> <p>Email: {message.email}</p>  
                              </div>
                              <div className={style.message_unit_body}>
                                 {message.message}
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
            :
               ''
            } 
         </div>
      </div>
   )
}

export default AdminAccountBlock