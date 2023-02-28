import { useRef } from 'react'

import { useCount } from '../../../../../hooks/useCount'
import CircleArrowBtn from '../../UI/CircleArrowBtn'
import style from './index.module.css'

const Slider = ({children, infinity = false, winClass, btnLClass, btnRClass, circleGroupClass, circleClass, test}) => {
   const sliderRef = useRef()

   const windowWidth = sliderRef.current?.clientWidth
   const unitWidth = sliderRef.current?.children[3].clientWidth / children.length
   const numberUnitsScreen = windowWidth / unitWidth
   const maxIndex = (children.length - numberUnitsScreen) / numberUnitsScreen

   const [index, transformTape, increment, decrement, setIndex, start, move, end, cancelTransform] = useCount({maxIndex, infinity, unitWidth, numberUnitsScreen})

   return (
      <div className={[style.slider, winClass].join(' ')} ref={sliderRef}>
         <CircleArrowBtn className={[style.left, btnLClass].join(' ')} onClick={() => decrement()}/>
         <CircleArrowBtn className={[style.right, btnRClass].join(' ')} onClick={() => increment()}/>
         <div className={[style.circleGroup, circleGroupClass].join(' ')}>
            {
               [...children].map((_, i) => 
                  <div 
                     className={index === i ? [style.circleGroup_circle, style.circleGroup_circle_active, circleClass].join(' ') : style.circleGroup_circle} 
                     key={i}
                     onClick={() => setIndex(i)}
                  />
               )
            }
         </div>
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
   )
}

export default Slider