import style from './index.module.css'

const CircleArrowBtn = ({className, ...props}) => {
   return (
      <div className={[style.btn, className].join(' ')} {...props}>
         <img src="/images/projectImages/goldStore/arrow.svg" alt="" />
      </div>
   )
}

export default CircleArrowBtn