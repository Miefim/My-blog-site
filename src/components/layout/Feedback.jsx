import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

function Feedback() {

   const [feedbackElement, setFeedbackElement] = React.useState()
   const sensPlate = React.useRef()
   React.useEffect(() => {
      setFeedbackElement(sensPlate.current)
   })

   let [flag, setFlag] = React.useState(false)

   const checkCtrlButton = (e) => {
      if(e.code === "ControlLeft" && e._reactName === "onKeyDown") {
         setFlag(flag = true)
      }
      else if (e.code === "ControlLeft" && e._reactName === "onKeyUp") {
         setFlag(flag = false)
      } 
   }

   const defaultState = {
      center: [40.379286, 49.773050],
      zoom: 12,
      controls: ["zoomControl", "fullscreenControl"],
   };

   const modules = ["control.ZoomControl", "control.FullscreenControl"]

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
               onMouseMove = {() => feedbackElement.focus()} 
               onMouseLeave = {() => {
                  feedbackElement.blur()
                  setFlag(flag = false)
               }}
               ref={sensPlate}
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
                     <input className="small-input" type="text" placeholder="Имя" />
                     <input className="small-input" type="text" placeholder="Телефон" />
                     <input className="small-input" type="text" placeholder="Email" />
                     <textarea className="big-input" type="text" placeholder="Ваш вопрос"></textarea>
                     <div className="feedback-button-box">
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