import img from './img/loader.png'
import style from "./index.module.css"


function LoaderCircle({className, ...props}) {
   return(
      <img {...props} className={[style.img, className].join(' ')} src={img} alt="" />
   )
}

export default LoaderCircle