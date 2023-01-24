import { useEffect } from 'react'
import { useState } from 'react'
import style from './index.module.css'

const TextareaItem = ({className, value, ...props}) => {
   const [error, setError] = useState(null)
   
   useEffect(() => {
      if(!value){
         setError('Enter the Write an article') 
      }
      else {
         setError(null)
      }
   },[value])

   return(
      <div className={style.root}>
         <textarea {...props} 
            className={
               error
               ?  [style.textarea, style.error, className].join(' ')
               :  [style.textarea, className].join(' ')
            } 
            type="text" 
            value={value}
         />
         <p className={style.error_message}>{error}</p>
      </div> 
   )
}

export default TextareaItem