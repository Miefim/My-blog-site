import style from "./index.module.css"

const Button = ({ children, className, onClick, isBlue, isRounded, ...props }) => {
   return (
      <button 
         className={`${style.button} ${isBlue && style.blueButton} ${isRounded && style.roundedButton} ${className}`} 
         onClick={onClick} 
         {...props}
      >
         {children}
      </button>
   )
}

export default Button