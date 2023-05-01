import style from "./index.module.css"

const TextareaFeedbackUi = ({ className, error, placeholder, value, onChange }) => {
   return(
      <div className={`${style.wrapper} ${className}`}>
         {error && <p className={style.textareaErrorMessage}>{error}</p>}
         <textarea 
            type="text" 
            className={`${style.textareaFeedback} ${error && style.textareaError}`} 
            placeholder={placeholder} 
            value={value} 
            onChange={onChange}
         />
      </div> 
   )
}

export default TextareaFeedbackUi