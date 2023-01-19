import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useState, useRef, useEffect} from 'react';
import { useFetching } from '../../hooks/useFetching';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth'
import { collection, addDoc, serverTimestamp  } from "firebase/firestore"; 

import { database } from '../../firebase';
import LoaderCircle from '../UI/LoaderCircle'

function Feedback() {
   const sensPlateRef = useRef()
   let [flag, setFlag] = useState(false)

   const checkCtrlButton = (e) => {
      if(e.code === "ControlLeft" && e._reactName === "onKeyDown") {
         setFlag(true)
      }
      else if (e.code === "ControlLeft" && e._reactName === "onKeyUp") {
         setFlag(false)
      } 
   }

   const defaultState = {
      center: [40.379286, 49.773050],
      zoom: 12,
      controls: ["zoomControl", "fullscreenControl"],
   };

   const modules = ["control.ZoomControl", "control.FullscreenControl"]

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

   const [name, setName] = useState('')
   const [tel, setTel] = useState('')
   const [email, setEmail] = useState('')
   const [message, setMessage] = useState('')

   const auth = getAuth()
   const [user] = useAuthState(auth)

   useEffect(() => {
         setName(user?.displayName? user.displayName : '')
         setTel(user?.phoneNumber? user.phoneNumber : '')
         setEmail(user?.email? user.email : '')
   },[user])

   const [nameError, setNameError] = useState('')
   const [telError, setTelError] = useState('')
   const [emailError, setEmailError] = useState('')
   const [messageError, setMessageError] = useState('')

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

   return (
      <YMaps>
         <section className="feedback" name="feedback">
            <div className='prompt-block' style={flag? {opacity: "0"} : {}}>
               <div className='prompt-block-text'>Press LCtrl</div> 
            </div>
            <div className='sens-plate'
               tabIndex="6" 
               onKeyDown = {checkCtrlButton}
               onKeyUp = {checkCtrlButton}
               onMouseMove = {() => sensPlateRef.current.focus({ preventScroll: true })} 
               onMouseLeave = {() => {
                  sensPlateRef.current.blur()
                  setFlag(flag = false)
               }}
               ref={sensPlateRef}
            >
               <div className='feedback-map' style={!flag? {pointerEvents: "none"} : {pointerEvents: ""}}>
                  <Map className='map' defaultState={defaultState} modules = {modules}>
                     <Placemark geometry={[40.379286, 49.873550]} />
                  </Map>
               </div>
            </div>
            <div className='feedback-container'>
               <div className="feedback-form" style={flag? {display: "none"} : {}}>
                  <div className='feedback-form-content'>
                     <div className="line-title"></div>
                     <div className="title-feedback">Send a Message</div>
                     <div className="input-block">
                        {nameError && <p className="input-error-message">{nameError}</p>}
                        <input className={!nameError? "small-input" : "small-input input-error"} type="text" placeholder="Name   " value={name} onChange={validationName} />
                     </div>
                     <div className="input-block">
                        {telError && <p className="input-error-message">{telError}</p>} 
                        <input className={!telError? "small-input" : "small-input input-error"} type="text" placeholder="Phone" value={tel} onChange={validationTel} />
                     </div>
                     <div className="input-block">
                        {emailError && <p className="input-error-message">{emailError}</p>}   
                        <input className={!emailError? "small-input" : "small-input input-error"} type="text" placeholder="Email" value={email} onChange={validationEmail} />
                     </div>
                     <div className="input-block">
                        {messageError && <p className="input-error-message">{messageError}</p>}
                        <textarea className={!messageError? "big-input" : "big-input input-error"} type="text" placeholder="Message" value={message} onChange={validationMessage}/>
                     </div>
                     <div className="feedback-button-box">
                        <button 
                           className="header-banner-button" 
                           disabled={nameError || telError || emailError || messageError} 
                           onClick={sendMessage}
                           style = {{height: '43px', width: '160px'}}
                        >
                           {!postFetchError
                           ?  postFetchLoading
                           ?  <LoaderCircle />
                           :  <p className="header-banner-button-text">Send</p>
                           :  'Error'}
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </YMaps>
   )}

   export default Feedback