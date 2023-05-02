import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { collection, addDoc, serverTimestamp } from "firebase/firestore" 
import { getAuth } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"

import { 
   setName, 
   setTel, 
   setEmail, 
   setMessage, 
   setNameError, 
   setTelError, 
   setEmailError, 
   setMessageError, 
   feedbackFormSelector 
} from "../../../Redux/slices/feedbackFormSlice"
import { useFetching } from "../../../hooks/useFetching"
import { database } from "../../../firebase"
import BlueSmallLineUi from "../../UI/BlueSmallLine"
import InputFeedbackUi from "../../UI/InputFeedback"
import TextareaFeedbackUi from "../../UI/TextareaFeedback"
import Button from "../../UI/Button"
import LoaderCircle from "../../UI/LoaderCircle"
import style from "./index.module.css"

const FeedbackForm = ({ className }) => {
   
   const auth = getAuth()
   const [user] = useAuthState(auth)
   
   const dispatch = useDispatch()
   const { name, tel, email, message, nameError, telError, emailError, messageError } = useSelector(feedbackFormSelector)

   useEffect(() => {
      if(user?.displayName){
         dispatch(setName(user.displayName))
         dispatch(setNameError(''))
      }
      if(user?.phoneNumber){
         dispatch(setTel(user.phoneNumber))
         dispatch(setTelError(''))
      }
      if(user?.email){
         dispatch(setEmail(user.email))
         dispatch(setEmailError(''))
      }
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
       })
   })

   const validationName = (event) => {
      const value = event.target.value.replace(/\s+/g, '')
      dispatch(setName(event.target.value))
      if(value.length < 2){
         dispatch(setNameError('Name too short'))
      }
      else{
         dispatch(setNameError(''))
      }
   }

   const validationTel = (event) => {
      const value = event.target.value.replace(/\s+/g, '')
      dispatch(setTel(event.target.value))
      
      if (!value.match(/^[+0-9]{1}[0-9]*$/)){
         dispatch(setTelError('Invalid number entered'))
      }
      else if(value.length < 10){
         dispatch(setTelError('The number is too short'))
      }
      else{
         dispatch(setTelError(''))
      }  
   }

   const validationEmail = (event) => {
      const value = event.target.value.replace(/\s+/g, '')
      dispatch(setEmail(event.target.value))
      if(!value.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)){
         dispatch(setEmailError('Email entered incorrectly'))
      }
      else{
         dispatch(setEmailError(''))
      }
   }

   const validationMessage = (event) => {
      const value = event.target.value.replace(/\s+/g, '')
      dispatch(setMessage(event.target.value))
      if(!value){
         dispatch(setMessageError('Enter your message'))
      }
      else{
         dispatch(setMessageError(''))
      }
   }

   const sendMessage = async() => {
      if(name && tel && email && message) {
         await postFetchMessage()
         dispatch(setName(''))
         dispatch(setTel(''))
         dispatch(setEmail(''))
         dispatch(setMessage(''))
      }
      if(!name){
         dispatch(setNameError('Enter your name'))
      }
      if(!tel){
         dispatch(setTelError('Enter your phone'))
      }
      if(!email){
         dispatch(setEmailError('Enter your email'))
      }
      if(!message){
         dispatch(setMessageError('Enter your message'))
      } 
   }

   return(
      <div className={`${style.feedbackForm} ${className}`}>
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