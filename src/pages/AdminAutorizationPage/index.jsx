import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { getAuth } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth'

import Login from "../../components/layout/Login";
import style from "./index.module.css"

function AdminAutorizationPage() {
   const auth = getAuth()
   const [user] = useAuthState(auth)

   const navigate = useNavigate()

   useEffect(() => {
      if(user?.uid === 'bqn4tboccsbVpUGKBxtly1GuOQF3'){
         navigate('/admin/account')
      }
      else if(user){
         navigate('/')
      }
   },[user])

   return (
      <div className = {style.root}>
         <Login successAction = {() => navigate('/admin/account')}/>
      </div>
   );
 }
 
 export default AdminAutorizationPage;