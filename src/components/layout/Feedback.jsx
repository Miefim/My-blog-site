import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useState, useRef, useMemo} from 'react';
import { useFetching } from '../../hooks/useFetching';

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

   const [postMessage, loading, error] = useFetching(async() => {
      const response = await fetch(`shttps://639ef68b7aaf11ceb88f020b.mockapi.io/feedback-message`, {
         method: "POST",
         headers: {
            "Content-type": "application/json" 
         },
         body: JSON.stringify({
            name,
            tel,
            email,
            message
         })
      })
   })

   const [name, setName] = useState('')
   const [tel, setTel] = useState('')
   const [email, setEmail] = useState('')
   const [message, setMessage] = useState('')

   const [nameError, setNameError] = useState('')
   const [telError, setTelError] = useState('')
   const [emailError, setEmailError] = useState('')
   const [messageError, setMessageError] = useState('')

   const validationName = (e) => {
      const value = e.target.value
      setName(value)
      if(value.length < 2){
         setNameError('Слишком короткое имя')
      }
      else{
         setNameError('')
      }
   }

   const validationTel = (e) => {
      const value = e.target.value.replace(/\s+/g, '')
      setTel(e.target.value)
      
      if(value.length < 10){
         setTelError('Слишком короткий номер')
      }
      else if (!value.match(/^[+0-9]{1}[0-9]*$/)){
         setTelError('Неверно введен номер')
      }
      else{
         setTelError('')
      }
   }

   

   const sendMessage = async() => {
      // setNameError('')
      // setTelError('')
      // setEmailError('')
      // setMessageError('')

      if(name && tel && email && message) {
         await postMessage()
         setName('')
         setTel('')
         setEmail('')
         setMessage('')
      }
      if(!name){
         setNameError('введи имя лох')
      }
      if(!tel){
         setTelError('телефон я буду вводить?')
      }
      if(!email){
         setEmailError('введи мыло')
      }
      if(!message){
         setMessageError('ну а что сообщение не написал?')
      }
      
   }

   return (
      <YMaps>
         <section className="feedback" name="feedback">
            <div className='prompt-block' style={flag? {opacity: "0"} : {}}>
               <div className='prompt-block-text'>Для масштабирования нажмите LCtrl</div> 
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
                     <div className="title-feedback">Задайте свой вопрос</div>
                     <div className="input-block">
                        {nameError && <p className="input-error-message">{nameError}</p>}
                        <input className={!nameError? "small-input" : "small-input input-error"} type="text" placeholder="Имя" value={name} onChange={validationName} />
                     </div>
                     <div className="input-block">
                        {telError && <p className="input-error-message">{telError}</p>} 
                        <input className={!telError? "small-input" : "small-input input-error"} type="text" placeholder="Телефон" value={tel} onChange={validationTel} />
                     </div>
                     <div className="input-block">
                        {emailError && <p className="input-error-message">{emailError}</p>}   
                        <input className={!emailError? "small-input" : "small-input input-error"} type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                     </div>
                     <div className="input-block">
                        {messageError && <p className="input-error-message">{messageError}</p>}
                        <textarea className={!messageError? "big-input" : "big-input input-error"} type="text" placeholder="Ваш вопрос" value={message} onChange={e => setMessage(e.target.value)}/>
                     </div>
                     <div className="feedback-button-box" onClick={sendMessage}>
                        <div className="header-banner-button">
                           <p className="header-banner-button-text">Отправить</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </YMaps>
   )}

   export default Feedback