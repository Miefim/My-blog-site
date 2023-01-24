import { useEffect } from 'react'
import { useState } from 'react'
import style from './index.module.css'

const InputTitleItem = ({className, value, ...props}) => {
   const [error, setError] = useState(null)
   
   useEffect(() => {
      if(!value){
         setError('Enter the title') 
      }
      else {
         setError(null)
      }
   },[value])
   return(
      <div className={style.root}>
         <input {...props} 
            className={
               error
               ?  [style.input, style.error, className].join(' ')
               :  [style.input, className].join(' ')
            } 
            type="text" 
            value={value}
         />
         <p className={style.error_message}>{error}</p>
      </div> 
   )
}

export default InputTitleItem

