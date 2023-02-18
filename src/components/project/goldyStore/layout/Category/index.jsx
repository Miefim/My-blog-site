import style from './index.module.css'

const Category = () => {
   return(
      <div className={style.category}>
         <h1 className={style.category_title}>Популярные категории</h1>
         <div className={style.category_cardLine}>
            <div className={style.cardLine_card}>
               <img className={style.card_imgRing} src="/images/projectImages/goldStore/categoryRing.svg" alt="" />
               <p className={style.cardTitle}>Кольца</p>
            </div>
            <div className={style.cardLine_card}>
               <img className={style.card_imgEarrings} src="/images/projectImages/goldStore/categoryEarrings.svg" alt="" />
               <p className={style.cardTitle}>Серьги</p>
            </div>
            <div className={style.cardLine_card}>
               <img className={style.card_imgRings} src="/images/projectImages/goldStore/categoryRings.svg" alt="" />
               <p className={style.cardTitleRings}>Помолвочные<br/>кольца</p>
            </div>
            <div className={style.cardLine_card}>
               <img className={style.card_imgBracelet} src="/images/projectImages/goldStore/categoryBracelet.svg" alt="" />
               <p className={style.cardTitle}>Браслеты</p>
            </div>
            <div className={style.cardLine_card}>
               <img className={style.card_imgNecklace} src="/images/projectImages/goldStore/categoryNecklace.svg" alt="" />
               <p className={style.cardTitle}>Колье и подвески</p>
            </div>
            <div className={style.cardLine_card}>
               <img className={style.card_imgWatch} src="/images/projectImages/goldStore/categoryWatch.svg" alt="" />
               <p className={style.cardTitle}>Часы</p>
            </div>
         </div>
      </div>
   )
}

export default Category