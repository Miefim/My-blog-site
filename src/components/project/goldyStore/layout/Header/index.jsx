import style from './index.module.css'

const Header = () => {
   return (
      <div className={style.header}>
         <div className={style.header_logoLine}>
            <h1 className={style.logoLine_title}> 
               <p className={style.logoLine_title__golgColor}>Goldy</p>
               Store
            </h1>
            <div className={style.logoLine_subTitle}>ювелирный магазин</div>
            <div className={style.logoLine_location}>
               <img className={style.location_iconPoint} src="/images/projectImages/goldStore/headerPoint.svg" alt="" />
               Санкт-Петербург
               <img className={style.location_iconArrow} src="/images/projectImages/goldStore/arrowDown.svg" alt="" />
            </div>
            <div className={style.logoLine_tel}>
               <img className={style.location_iconPoint} src="/images/projectImages/goldStore/tel.svg" alt="" />
               8 800 785-25-35
            </div>
            <div className={style.logoLine_registerBlock}>
               <div className={style.registerBlock_signIn}>Вход</div>
               <div className={style.registerBlock_delimiter}></div>
               <div className={style.registerBlock_signUp}>Регистрация</div>
            </div>
            <div className={style.logoLine_iconGroup}>
               <div className={style.iconGroup_likeBtn}>
                  <img src="/images/projectImages/goldStore/likeicon.svg" alt="" />
                  <div className={style.likeBtn_countCircle}>
                     <p className={style.countCircle_count}>23</p>
                  </div>
               </div>
               <div className={style.iconGroup_sortBtn}>
                  <div className={style.sortIcon1}></div>
                  <div className={style.sortIcon2}></div>
                  <div className={style.sortIcon3}></div>
               </div>
               <div className={style.iconGroup_cartBtn}>
                  <img className={style.cartBtn_icon1} src="/images/projectImages/goldStore/cart1.svg" alt="" />
                  <div className={style.cartBtn_icon2}></div>
               </div>
            </div>
         </div>
         <div className={style.header_navLine}>
            <div className={style.navLine_btnGroup}>
               <div className={style.btnGroup_btn}>КАТАЛОГ</div>
               <div className={style.btnGroup_btn}>АКЦИИ</div>
               <div className={style.btnGroup_btn}>БРЕНДЫ</div>
               <div className={style.btnGroup_btn}>МАГАЗИНЫ</div>
               <div className={style.btnGroup_btn}>О НАС</div>
               <div className={style.btnGroup_btn}>ДОСТАВКА И ОПЛАТА</div>
               <div className={style.btnGroup_btn}>СТАТЬИ</div>
            </div>
            <div className={style.navLine_delimiter}></div>
            <div className={style.navLine_inputGroup}>
               <input className={style.navLine_input} type="text" placeholder='Поиск по сайту'/>
               <div className={style.inputGroup_icon}>
                  <div className={style.inputGroup_icon_component1}></div>  
                  <div className={style.inputGroup_icon_component2}></div> 
               </div>
            </div> 
         </div>
      </div>
   )
}

export default Header
