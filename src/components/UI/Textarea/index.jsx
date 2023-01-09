import style from "./index.module.css"

function Textarea ({ className, ...props }) {
   return(
      <textarea {...props} className={[style.textarea, className].join(' ')}></textarea>
   )
}

export default Textarea