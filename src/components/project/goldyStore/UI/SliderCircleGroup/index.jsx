import style from './index.module.css'

const SliderCircleGroup = ({length, circleGroupClass, circleClass, circleClick, index}) => {
   const arr = new Array(length).fill(0)
   
   const selectCircle = (e, i) => {
      e.stopPropagation()
      circleClick(i)
   }

   return(
      <div className={[style.circleGroup, circleGroupClass].join(' ')}>
         {
            arr.map((_, i) => 
               <div 
                  className={index === i ? [style.circleGroup_circle, style.circleGroup_circle_active, circleClass].join(' ') : style.circleGroup_circle} 
                  key={i}
                  onClick={(e) => selectCircle(e, i)}
               />
            )
         }
      </div>
   )
}

export default SliderCircleGroup