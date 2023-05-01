import { useState, useEffect } from "react"
import { collection, addDoc, serverTimestamp } from "firebase/firestore" 
import { getAuth } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"

import { useFetching } from "../../../hooks/useFetching"
import { database } from "../../../firebase"
import BlueSmallLineUi from "../../UI/BlueSmallLine"
import InputFeedbackUi from "../../UI/InputFeedback"
import TextareaFeedbackUi from "../../UI/TextareaFeedback"
import Button from "../../UI/Button"
import LoaderCircle from "../../UI/LoaderCircle"
import style from "./index.module.css"

const FeedbackForm = () => {

   const auth = getAuth()
   const [user] = useAuthState(auth)

   const [name, setName] = useState('')
   const [tel, setTel] = useState('')
   const [email, setEmail] = useState('')
   const [message, setMessage] = useState('')

   const [nameError, setNameError] = useState('')
   const [telError, setTelError] = useState('')
   const [emailError, setEmailError] = useState('')
   const [messageError, setMessageError] = useState('')

   useEffect(() => {
      setName(user?.displayName? user.displayName : '')
      setTel(user?.phoneNumber? user.phoneNumber : '')
      setEmail(user?.email? user.email : '')
   },[user])

   const [postFetchMessage, postFetchLoading, postFetchError] = useFetching(async() => {
      await addDoc(collection(database, "feedback-message"), {
         name,
         tel,
         email,
         message,
         date: serverTimestamp(),
         uid: user?.uid? user.uid : '',
         read: false
       });
   })

   const validationName = (e) => {
      const value = e.target.value.replace(/\s+/g, '')
      setName(e.target.value)
      if(value.length < 2){
         setNameError('Name too short')
      }
      else{
         setNameError('')
      }
   }

   const validationTel = (e) => {
      const value = e.target.value.replace(/\s+/g, '')
      setTel(e.target.value)
      
      if(value.length < 10){
         setTelError('The number is too short')
      }
      else if (!value.match(/^[+0-9]{1}[0-9]*$/)){
         setTelError('Invalid number entered')
      }
      else{
         setTelError('')
      }
   }

   const validationEmail = (e) => {
      const value = e.target.value.replace(/\s+/g, '')
      setEmail(e.target.value)
      if(!value.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)){
         setEmailError('Email entered incorrectly')
      }
      else{
         setEmailError('') 
      }
   }

   const validationMessage = (e) => {
      const value = e.target.value.replace(/\s+/g, '')
      setMessage(e.target.value)
      if(!value){
         setMessageError('Enter your message')
      }
      else{
         setMessageError('') 
      }
   }

   const sendMessage = async() => {
      if(name && tel && email && message) {
         await postFetchMessage()
         setName('')
         setTel('')
         setEmail('')
         setMessage('')
      }
      if(!name){
         setNameError('Enter your name')
      }
      if(!tel){
         setTelError('Enter your phone')
      }
      if(!email){
         setEmailError('Enter your email')
      }
      if(!message){
         setMessageError('Enter your message')
      } 
   }

   return(
      <div className={style.feedbackForm}>
         <BlueSmallLineUi className={style.feedbackForm_blueSmallLine}/>
         <div className={style.titleFeedback}>Send a Message</div>
         <InputFeedbackUi 
            className={style.feedbackForm_inputFeedback}
            placeholder='Name' 
            error={nameError}
            value={name} 
            onChange={validationName} 
         />
         <InputFeedbackUi 
            className={style.feedbackForm_inputFeedback}
            placeholder='Phone' 
            error={telError}
            value={tel} 
            onChange={validationTel} 
         />
         <InputFeedbackUi 
            className={style.feedbackForm_inputFeedback} 
            placeholder='Email'
            error={emailError}
            value={email} 
            onChange={validationEmail} 
         />
         <TextareaFeedbackUi
            className={style.feedbackForm_textareaFeedback}
            placeholder='Message' 
            error={messageError}
            value={message} 
            onChange={validationMessage}
         />
         <div className={style.feedbackButtonConteiner}>
            <Button 
               className={style.feedbackButtonConteiner_button}
               disabled={nameError || telError || emailError || messageError} 
               onClick={sendMessage}
               isRounded={true}
               isBlue={true}
            >
               {postFetchError && 'Error'}
               {postFetchLoading && <LoaderCircle />}
               {(!postFetchError && !postFetchLoading) && 'Send'} 
            </Button>
         </div>
      </div>
   )
}

export default FeedbackForm