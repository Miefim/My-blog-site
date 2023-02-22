import style from './index.module.css'

const CircleArrowBtn = ({className}) => {
   return (
      <div className={[style.btn, className].join(' ')}>
         <img src="/images/projectImages/goldStore/arrow.svg" alt="" />
      </div>
   )
}

export default CircleArrowBtn