import { useRef } from 'react'

import { useCount } from '../../../../../hooks/useCount'
import SliderCircleGroup from '../SliderCircleGroup'
import CircleArrowBtn from '../CircleArrowBtn'
import style from './index.module.css'

const Slider = ({children, infinity = false, sliderClass, btnLClass, btnRClass, circleGroupClass, circleClass}) => {
   const sliderRef = useRef()

   const windowWidth = sliderRef.current?.clientWidth
   const unitWidth = sliderRef.current?.children[3].children[0].clientWidth / children.length
   const numberUnitsScreen = windowWidth / unitWidth
   const maxIndex = (children.length - numberUnitsScreen) / numberUnitsScreen

   const [index, transformTape, increment, decrement, setIndex, start, move, end, cancelTransform] = useCount({maxIndex, infinity, unitWidth, numberUnitsScreen})

   return (
      <div className={[style.slider, sliderClass].join(' ')} ref={sliderRef}>
         <CircleArrowBtn className={[style.left, btnLClass].join(' ')} onClick={() => decrement()}/>
         <CircleArrowBtn className={[style.right, btnRClass].join(' ')} onClick={() => increment()}/>
         <SliderCircleGroup length={children.length} circleGroupClass={circleGroupClass} circleClass={circleClass} index={index} circleClick={setIndex}/>
         <div className={style.windows}>
            <div 
               className={style.banner_tape} 
               style={{transform: `translate3d(-${transformTape}px, 0, 0)`}}
               onMouseDown={start} 
               onMouseMove={move} 
               onMouseUp={end}
               onMouseLeave={cancelTransform}
               onTouchStart={start}
               onTouchMove={move}
               onTouchEnd={end}
            >
               {children}
            </div>
         </div>    
      </div>
   )
}

export default Slider