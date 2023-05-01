import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useState, useRef} from 'react'; 

import FeedbackForm from './FeedbackForm';

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

   return (
      <YMaps 
         query={{
            apikey: process.env.REACT_APP_YANDEX_MAP_API_KEY,
            lang: 'en_US'
         }}
      >
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
               {!flag && <FeedbackForm/>}
            </div>
         </section>
      </YMaps>
   )}

   export default Feedback