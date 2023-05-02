import style from "./index.module.css"


const LoaderCircle = ({ className, ...props }) => {
   return(
      <img {...props} className={[style.img, className].join(' ')} src='/images/loader.png' alt="" />
   )
}

export default LoaderCircle