import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAdminAutorization } from '../../Redux/slices/adminAuthorizationSlice'

import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import style from "./index.module.css"

function AdminAutorizationPage() {
   const isAdminAutorization = useSelector(state => state.adminAutorization.value)
   const dispatch = useDispatch()

   const [login, setLogin] = useState('')
   const [password, setPassword] = useState('')

   const checkInputValue = () => {
      if(isAdminAutorization){
         return
      }
       if(login === 'micha_93_93' && password === '89210096938') {
         dispatch(setAdminAutorization(true))
         setLogin('')
         setPassword('')
      }
      else {
         dispatch(setAdminAutorization(false))
      }
   }

   console.log(isAdminAutorization)

   return (
      <div className={style.root}>
         <Input placeholder = {"Login"} value = { login } setValue = { setLogin }/>
         <Input placeholder = {"Password"} value = { password } setValue = { setPassword } />
         <Button onClick = { checkInputValue }>Вход</Button>
      </div>
   );
 }
 
 export default AdminAutorizationPage;