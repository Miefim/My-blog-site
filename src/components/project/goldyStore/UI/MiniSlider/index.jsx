import { useCount } from '../../../../../hooks/useCount'
import SliderCircleGroup from '../SliderCircleGroup'
import style from './index.module.css'

const MiniSlider = ({sliderClass, children}) => {
   const arr = children.length > 1 ? [...children] : [children]
   const maxIndex = children.length - 1
   const infinity = true
   
   const [index, _, incrimentCount, __, setCount] = useCount({maxIndex, infinity})

   return(
      <div className={[style.slider, sliderClass].join(' ')} onClick={() => incrimentCount()}>
         <SliderCircleGroup length={children.length} index={index} circleGroupClass={style.circleGroup} circleClick={setCount}/>
            {
               arr.map((el, i) => 
                  <div className={i === index ? [style.unit, style.unitActive].join(' ') : style.unit} key={i}>
                     {el}
                  </div>
               )
            }
      </div>
   )
}

export default MiniSlider