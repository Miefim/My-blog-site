import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAdminAutorization } from '../../Redux/slices/adminAuthorizationSlice'
import { useNavigate } from "react-router-dom"

import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import style from "./index.module.css"

function AdminAutorizationPage() {
   const isAdminAutorization = useSelector(state => state.adminAutorization.value)
   const dispatch = useDispatch()

   const navigate = useNavigate()

   const [login, setLogin] = useState('')
   const [password, setPassword] = useState('')

   const checkInputValue = () => {
      if(isAdminAutorization){
         return
      }
       if(login === '1' && password === '123') {
         dispatch(setAdminAutorization(true))
         setLogin('')
         setPassword('')
         navigate('/')
      }
      else {
         dispatch(setAdminAutorization(false))
      }
   }

   return (
      <div className={style.root}>
         <Input placeholder = {"Login"} value = { login } onChange = { e => setLogin(e.target.value) }/>
         <Input placeholder = {"Password"} value = { password } onChange = { e => setPassword(e.target.value) } />
         <Button onClick = { checkInputValue }>Вход</Button>
      </div>
   );
 }
 
 export default AdminAutorizationPage;