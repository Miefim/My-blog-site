import style from './index.module.css'

const SaleCards = () => {
   return (
      <div className={style.saleCard}>
         <div className={style.card}>
            <img className={style.card_earringsImg} src="/images/projectImages/goldStore/saleCardImg1.svg" alt="" />
            <img className={style.card_bgImg} src="/images/projectImages/goldStore/diamontSmall.svg" alt="" />
            <div className={style.card_text}>СКИДКИ<br/>НА ВСЕ УКРАШЕНИЯ<br />С БРИЛЛИАНТАМИ</div>
            <div className={style.card_sticker}><p className={style.sticker_smallText}>До</p>-50%</div>
         </div>
         <div className={style.card}>
            <img className={style.card_Img} src="/images/projectImages/goldStore/saleCardImg2.svg" alt="" />
            <img className={style.card_bgImg} src="/images/projectImages/goldStore/diamontSmall.svg" alt="" />
            <div className={style.card_text}>СКИДКИ<br/>НА КОЛЬЦА<br />И БРАСЛЕТЫ</div>
            <div className={[style.card_sticker, style.red].join(' ')}><p className={style.sticker_smallText}>До</p>-40%</div>
         </div>
         <div className={style.card}>
            <img className={style.card_RingsImg} src="/images/projectImages/goldStore/saleCardImg3.svg" alt="" />
            <img className={style.card_bgImg} src="/images/projectImages/goldStore/diamontSmall.svg" alt="" />
            <div className={style.card_text}>СНИЖЕНИЕ ЦЕН<br/>НА ОБРУЧАЛЬНЫЕ<br />КОЛЬЦА</div>
            <div className={[style.card_sticker, style.yellow].join(' ')}><p className={style.sticker_smallText}>До</p>-60%</div>
         </div>
      </div>
   )
}

export default SaleCards