import { useEffect, useState } from "react"

export const useCount = ({maxIndex = 0, infinity = false, unitWidth, numberUnitsScreen}) => {
   const [count, setCount] = useState(0)
   const [transformTape, setTransformTape] = useState(0)
   const [xStart, setXStart] = useState(null)
   const [isMove, setIsMove] = useState(false)  

   useEffect(() => {
      if(count < 0){
         setCount(0)
      }
      else if(count > maxIndex){
         setCount(maxIndex)
      }
   },[count])
   
   const incrimentCount = () => {
      if(count < maxIndex){
         setCount(count + 1)
      }
      else if (infinity) {
         setCount(0)
      }
      else{
         setTransformTape(count * (unitWidth * numberUnitsScreen))
      }
   }

   const decrementCount = () => {
      if(count > 0){
         setCount(count - 1)
      }
      else if (infinity) {
         setCount(maxIndex)
      }
   }

   const start = (e) => {
      if(e.type !== "touchstart"){
         e.preventDefault()
      } 
      const xStart = e.type === "touchstart"? e.touches[0].clientX : e.clientX 
      setXStart(xStart)
      setIsMove(true)
      e.currentTarget.style.transition = "0s"
   }

   const move = (e) => {
      if(isMove){
         const xMove = e.type === "touchmove"? e.touches[0].clientX : e.clientX
         setTransformTape(-transformTape - xMove)
      }
   }

   const end = (e) => {
      const xEnd = e.type === "touchend"? e.changedTouches[0].clientX : e.clientX
      const differenceX = xStart - xEnd
      e.currentTarget.style.transition = "0.3s"
      setIsMove(false)
      if(Math.abs(differenceX) > 100){
         if(differenceX > 0){
            incrimentCount()
         }
         else if(differenceX < 0){
            decrementCount()
         }
      }
      else{
         setTransformTape(count * (unitWidth * numberUnitsScreen)) 
      }

   }

   const cancelTransform = (e) => {
      e.currentTarget.style.transition = "0.3s"
      setIsMove(false)
      setTransformTape(count * (unitWidth * numberUnitsScreen))
   }

   useEffect(() => {
      setTransformTape(count * (unitWidth * numberUnitsScreen))
   },[count])

   return [count, transformTape, incrimentCount, decrementCount, setCount, start, move, end, cancelTransform]
}