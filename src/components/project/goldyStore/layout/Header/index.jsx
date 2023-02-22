import { useState } from 'react'
import { getAuth } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth'

import Login from '../../../../layout/Login'
import Modal from '../../../../UI/ModalWin'
import DropDown from '../DropDown'
import CompareBtn from '../../UI/CompareBtn'
import style from './index.module.css'


const Header = () => {
   const auth = getAuth()
   const [user] = useAuthState(auth)

   const [visible, setVisible] = useState(false)

   const handleSignIn = () => {
      setVisible(true)
   }

   const handleSignUp = () => {
      setVisible(true)
   }

   return (
      <div className={style.header}>
         <div className={style.header_logoLine}>
            <div className={style.logoLine_location}>
               <img className={style.location_iconPoint} src="/images/projectImages/goldStore/headerPoint.svg" alt="" />
               <DropDown className={style.cityDropDown} listStyle={style.cityDropDownList}>
                  <p>Санкт-Петербург</p>
                  <p>Москва</p>
                  <p>Нижний Новгород</p>
                  <p>Ростов-на-Дону</p>
               </DropDown>
            </div>
            <div className={style.logoLine_tel}>
               <img className={style.location_iconPoint} src="/images/projectImages/goldStore/tel.svg" alt="" />
               8 800 785-25-35
            </div>
            <div className={style.logoLine_titleBlock}>
               <h1 className={style.logoLine_title}> 
                  <p className={style.logoLine_title__goldColor}>Goldy</p>
                  Store
               </h1>
               <div className={style.logoLine_subTitle}>ювелирный магазин</div>
            </div>
            <div className={style.logoLine_registerBlock}>
               {
                  user 
                  ?  <div className={style.registerBlock_signIn} onClick={() => auth.signOut()}>
                        Hello {user?.displayName || user?.email}!
                     </div>
                  :
                  <>
                     <div className={style.registerBlock_signIn} onClick={handleSignIn}>Вход</div>
                     <div className={style.registerBlock_delimiter}></div>
                     <div className={style.registerBlock_signUp} onClick={handleSignUp}>Регистрация</div>
                  </>
                  
               }
            </div>
            <div className={style.logoLine_iconGroup}>
               <div className={style.iconGroup_likeBtn}>
                  <img src="/images/projectImages/goldStore/likeicon.svg" alt="" />
                  <div className={style.likeBtn_countCircle}>
                     <p className={style.countCircle_count}>23</p>
                  </div>
               </div>
               <div className={style.iconGroup_sortBtn}>
                  <CompareBtn className={style.sortBtnIcon}/>
               </div>
               <div className={style.iconGroup_cartBtn}>
                  <div className={style.cartBtn_icon1}/>
                  <div className={style.cartBtn_icon2}/>
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
            <DropDown className={style.dropDownMenuMobile} listStyle={style.dropDownMenuListMobile}>
               <div className={style.btnGroup_btn}>КАТАЛОГ</div>
               <div className={style.btnGroup_btn}>АКЦИИ</div>
               <div className={style.btnGroup_btn}>БРЕНДЫ</div>
               <div className={style.btnGroup_btn}>МАГАЗИНЫ</div>
               <div className={style.btnGroup_btn}>О НАС</div>
               <div className={style.btnGroup_btn}>ДОСТАВКА И ОПЛАТА</div>
               <div className={style.btnGroup_btn}>СТАТЬИ</div>
            </DropDown>
            <div className={style.navLine_delimiter}></div>
            <div className={style.navLine_inputGroup}>
               <input className={style.navLine_input} type="text" placeholder='Поиск по сайту'/>
               <div className={style.inputGroup_icon}>
                  <div className={style.inputGroup_icon_component1}></div>  
                  <div className={style.inputGroup_icon_component2}></div> 
               </div>
            </div> 
         </div>
         <Modal visible={visible} setVisible={setVisible}>
            <Login/>
         </Modal>
      </div>
   )
}

export default Header
