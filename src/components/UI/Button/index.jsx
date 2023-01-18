import style from "./index.module.css"

function Button ({ children, className, ...props}) {
   return (
      <button {...props} className={[style.button, className].join(' ')}>{children}</button>
   )
}

export default Button