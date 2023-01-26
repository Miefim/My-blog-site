import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import style from './index.module.css'

const MobileMenu = ({fixed, className}) => {
   const [popUpVisible, setPopUpVisible] = useState(false)

   const path = window.location.pathname
   const navigate = useNavigate()

   const linkToBlock = (block) => {
      setPopUpVisible(false)
      if (path !== '/'){
         navigate('/')
      }
      setTimeout(() => {
         document.querySelector(`${block}`)?.scrollIntoView({
            behavior: 'smooth'
         })
      }, 10)
   }

   return(
      <>
         <div 
            className={[style.navBar, className].join(' ')} 
            style = {fixed && window.innerWidth <= 670? {position: "fixed", top: "0"} : {}}
         >
            <img 
               className={style.navBar_menuBtn_img} 
               src="/images/button-mobile-menu-icon.png" alt="" 
               onClick={() => setPopUpVisible(!popUpVisible)}
               style={popUpVisible? {backgroundColor: '#499ad6'} : {}} 
            />
         </div>
         {popUpVisible && 
            <div 
               className={style.popUp}
               style = {fixed && window.innerWidth <= 670? {position: "fixed", top: "60px"} : {}}
            >
               <div 
                  className={style.popUp_unit}
                  onClick={() => linkToBlock('.header')}
               >
                  <div className={style.popUp_unit_content}>
                     <img className={style.unit_content_icon} src="/images/home-icon.png"/>
                     Home
                  </div> 
               </div>
               <div 
                  className={style.popUp_unit} 
                  onClick={() => linkToBlock('.about-me')}
               >
                  <div className={style.popUp_unit_content}>
                     <img className={style.unit_content_icon} src="/images/about-icon.png"/>
                     About Me
                  </div> 
               </div>
               <div  
                  className={style.popUp_unit}
                  onClick={() => linkToBlock('.resume')}
               >
                  <div className={style.popUp_unit_content}>
                     <img className={style.unit_content_icon} src="/images/resume-icon.png"/>
                     Resume
                  </div> 
               </div>
               <div  
                  className={style.popUp_unit}
                  onClick={() => linkToBlock('.project')}
               >
                  <div className={style.popUp_unit_content}>
                     <img className={style.unit_content_icon} src="/images/project-icon.png"/>
                     My Project
                  </div> 
               </div> 
               <div 
                  className={style.popUp_unit}
                  onClick={() => linkToBlock('.blog')}
               >
                  <div className={style.popUp_unit_content}>
                     <img className={style.unit_content_icon} src="/images/blog-icon.png"/>
                     Blog
                  </div> 
               </div> 
               <div 
                  className={style.popUp_unit}
                  onClick={() => linkToBlock('.feedback')}
               >
                  <div className={style.popUp_unit_content}>
                     <img className={style.unit_content_icon} src="/images/feedback-icon.png"/>
                     Contact
                  </div> 
               </div>
            </div>
         }
      </>
   )
}

export default MobileMenu