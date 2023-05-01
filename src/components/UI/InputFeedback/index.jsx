import style from "./index.module.css"

const InputFeedbackUi = ({ className, error, placeholder, value, onChange }) => {
   return(
      <div className={`${style.wrapper} ${className}`}>
         {error && <p className={style.inputErrorMessage}>{error}</p>}   
         <input 
            type="text" 
            className={`${style.inputFeedback} ${error && style.inputError}`} 
            placeholder={placeholder} 
            value={value} 
            onChange={onChange} 
         />
      </div>
   )
}

export default InputFeedbackUi