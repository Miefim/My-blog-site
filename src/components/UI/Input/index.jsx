import style from './index.module.css'

function Input({className, ...props}) {
   return (
      <input {...props} className={[style.input, className].join(' ')} />
   );
 }
 
 export default Input;