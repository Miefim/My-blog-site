import style from './index.module.css'

function Input( {placeholder, value, setValue} ) {
   return (
      <input className={style.input} type="text" placeholder={placeholder} value = {value} onChange = { e => setValue(e.target.value) } />
   );
 }
 
 export default Input;