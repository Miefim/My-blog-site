import CircleArrowBtn from '../../UI/CircleArrowBtn'
import style from './index.module.css'

const Banner = () => {
   return (
      <div className={style.banner}>
         <CircleArrowBtn className={style.left}/>
         <CircleArrowBtn className={style.right}/>
         <div className={style.circleGroup}>
            <div className={[style.circleGroup_circle, style.circleGroup_circle_active].join(' ')}></div>
            <div className={style.circleGroup_circle}></div>
            <div className={style.circleGroup_circle}></div>
         </div>
         <div className={style.banner_tape}>
            <div className={style.tape_unit}>
               <img className={style.unit_bgImg} src="/images/projectImages/goldStore/diamond.svg" alt="" />
               <img className={style.unit_img} src="/images/projectImages/goldStore/bannerRing.svg" alt="" />
               <h3 className={style.unit_textSmall}>Суперскидка до 60%</h3>
               <h1 className={style.unit_textBig}>НА БРИЛЛИАНТЫ</h1>
               <button className={style.unit_btn}>ПОДРОБНЕЕ</button>
            </div>
         </div>
      </div>
   )
}

export default Banner