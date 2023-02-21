import style from './index.module.css'

const Sticker = ({children, className}) => {
   return(
      <div className={[style.sticker, className].join(' ')}>
         {children}
      </div>
   )
}

export default Sticker