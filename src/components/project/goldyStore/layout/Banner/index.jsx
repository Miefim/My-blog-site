import Slider from '../../UI/Slider'
import style from './index.module.css'

const Banner = () => {
   return (
      <div className={style.banner}>
         <Slider infinity={true}>
            <div className={style.tape_unit}>
               <img className={style.unit_bgImg} src="/images/projectImages/goldStore/diamond.svg" alt="" />
               <img className={style.unit_img} src="/images/projectImages/goldStore/bannerRing.svg" alt="" />
               <h3 className={style.unit_textSmall}>Суперскидка до 60%</h3>
               <h1 className={style.unit_textBig}>НА БРИЛЛИАНТЫ1</h1>
               <button className={style.unit_btn}>ПОДРОБНЕЕ</button>
            </div>
            <div className={style.tape_unit}>
               <img className={style.unit_bgImg} src="/images/projectImages/goldStore/diamond.svg" alt="" />
               <img className={style.unit_img} src="/images/projectImages/goldStore/bannerRing.svg" alt="" />
               <h3 className={style.unit_textSmall}>Суперскидка до 60%</h3>
               <h1 className={style.unit_textBig}>НА БРИЛЛИАНТЫ2</h1>
               <button className={style.unit_btn}>ПОДРОБНЕЕ</button>
            </div>
            <div className={style.tape_unit}>
               <img className={style.unit_bgImg} src="/images/projectImages/goldStore/diamond.svg" alt="" />
               <img className={style.unit_img} src="/images/projectImages/goldStore/bannerRing.svg" alt="" />
               <h3 className={style.unit_textSmall}>Суперскидка до 60%</h3>
               <h1 className={style.unit_textBig}>НА БРИЛЛИАНТЫ3</h1>
               <button className={style.unit_btn}>ПОДРОБНЕЕ</button>
            </div>
            <div className={style.tape_unit}>
               <img className={style.unit_bgImg} src="/images/projectImages/goldStore/diamond.svg" alt="" />
               <img className={style.unit_img} src="/images/projectImages/goldStore/bannerRing.svg" alt="" />
               <h3 className={style.unit_textSmall}>Суперскидка до 60%</h3>
               <h1 className={style.unit_textBig}>НА БРИЛЛИАНТЫ4</h1>
               <button className={style.unit_btn}>ПОДРОБНЕЕ</button>
            </div>
         </Slider>
      </div>
   )
}

export default Banner