import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps"
import { useState, useRef } from "react"

import FeedbackForm from "../FeedbackForm"
import style from "./index.module.css"

const Feedback = () => {

   const wrapperMapRef = useRef()
   const [mapActive, setMapActive] = useState(false)

   const wrapperMapKeyHandler = (event) => {
      if(event.nativeEvent.code === "ControlLeft" && event.nativeEvent.type === "keydown") {
         setMapActive(true)
      }
      else if (event.nativeEvent.code === "ControlLeft" && event.nativeEvent.type === "keyup") {
         setMapActive(false)
      } 
   }

   const wrapperMapMouseMoveHandler = () => {
      wrapperMapRef.current.focus({ preventScroll: true })
   }

   const wrapperMapMouseLeaveHandler = () => {
      setMapActive(false)
      wrapperMapRef.current.blur()
   }

   const defaultState = {
      center: [40.379286, 49.773050],
      zoom: 12,
   }

   return (
      <section className={style.feedback} name="feedback">
         <div className={`${style.helpBlock} ${mapActive && style.helpBlock__noActive}`}>
            <div className={style.helpText}>Press LCtrl</div> 
         </div>
         <div className={style.feedbackFormConteiner}>
            {!mapActive && <FeedbackForm className={style.feedbackFormConteiner_feedbackForm}/>}
         </div>
         <YMaps 
            query={{
               apikey: process.env.REACT_APP_YANDEX_MAP_API_KEY,
               lang: 'en_US'
            }}
         >
            <div 
               tabIndex="6" 
               ref={wrapperMapRef}
               className={style.wrapperMap} 
               onKeyDown = {wrapperMapKeyHandler}
               onKeyUp = {wrapperMapKeyHandler}
               onMouseMove = {wrapperMapMouseMoveHandler} 
               onMouseLeave = {wrapperMapMouseLeaveHandler}
            >
               <Map className={`${style.map} ${mapActive && style.map__active}`} defaultState={defaultState}>
                  <Placemark geometry={[40.379286, 49.873550]} />
               </Map>
            </div>
         </YMaps>       
      </section>
   )}

   export default Feedback