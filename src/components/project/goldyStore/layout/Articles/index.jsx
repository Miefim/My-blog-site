import style from './index.module.css'

const Articles = () => {
   return (
      <div className={style.articles}>
         <h1 className={style.articles_title}>Статьи</h1>
         <div className={style.articleBlock}>
            <div className={style.moreBtn}>
               ЧИТАТЬ ВСЕ
               <img className={style.moreBtn_img} src="/images/projectImages/goldStore/arrow2.svg" alt="" />
            </div>
            <div className={style.article}>
               <img src="/images/projectImages/goldStore/article1.svg" alt="" />
               <p className={style.articleDate}>21 сентября 2021</p>
               <p className={style.articleTitle}>Обручальные кольца: тренды 2021</p>
            </div>
            <div className={style.article}>
               <img src="/images/projectImages/goldStore/article2.svg" alt="" />
               <p className={style.articleDate}>25 сентября 2021</p>
               <p className={style.articleTitle}>Главные ювелирные тренды года</p>
            </div>
            <div className={style.article}>
               <img src="/images/projectImages/goldStore/article3.svg" alt="" />
               <p className={style.articleDate}>21 сентября 2021</p>
               <p className={style.articleTitle}>Жемчуг: 7 малоизвестных фактов о культовом украшении</p>
            </div>
            <div className={style.article}>
               <img src="/images/projectImages/goldStore/article4.svg" alt="" />
               <p className={style.articleDate}>21 сентября 2021</p>
               <p className={style.articleTitle}>Как отличить золото от подделки: 10 практических советов</p>
            </div>
         </div>
      </div>
   )
}

export default Articles