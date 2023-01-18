import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth'

import AdminAccountUsers from '../AdminAccountUsers';
import AdminAccountFeedbackMessage from '../AdminAccountFeedbackMessage'
import CreateBlog from '../CreateBlogBlock';
import style from './index.module.css'

const AdminAccountBlock = () => {
   const auth = getAuth()
   const [user] = useAuthState(auth)
   
   const navigate = useNavigate()

   useEffect(() => {
      if(user?.uid !== process.env.REACT_APP_ADMIN_UID){
         navigate('/')   
      }
   },[user])

   const [active, setActive] = useState('')

   const menuClick = (e) => {
      setActive(e.target.dataset.btn)
   }

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
               active === "addPostBlog"
               ?  [style.side_bar_btn, style.side_bar_btn_active].join(' ')
               :  style.side_bar_btn
               } 
               data-btn="addPostBlog" 
               onClick={menuClick}
            >
               <img className={style.side_bar_btn_icon} src='/images/blog-icon.png' alt="" />
               Создать пост +
            </div>
            <div className={
               active === "users"
               ?  [style.side_bar_btn, style.side_bar_btn_active].join(' ')
               :  style.side_bar_btn
               }   
               data-btn="users" 
               onClick={menuClick}
            >
               <img className={style.side_bar_btn_icon} src='/images/blog-icon.png' alt="" />
               Зарегистрированные
            </div>
         </div>
         <div className={style.content}>
            {!active && <div className={style.welcome}>Привет admin! Как дела?</div>}
            {active === "message"? <AdminAccountFeedbackMessage /> : ''}
            {active === 'addPostBlog'? <CreateBlog/> : ''} 
            {active === 'users'? <AdminAccountUsers/> : ''}  
         </div>
      </div>
   )
}

export default AdminAccountBlock