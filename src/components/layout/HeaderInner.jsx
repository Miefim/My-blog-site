import React from "react";
import { Link } from "react-router-dom";

import ButtonUp from "../layout/ButtonUp";

function HeaderInner() {

   let [activeHeaderLine, setActiveHeaderLine] = React.useState(false)

   window.addEventListener("scroll", () => {
      if(window.pageYOffset >= `${80}`){
         setActiveHeaderLine(activeHeaderLine = true)
      }
      else {
         setActiveHeaderLine(activeHeaderLine = false)
      }
   },{
      passive: true
   })

   const scroller = (className) => {
      setTimeout(() => {
         document.querySelector(`${className}`).scrollIntoView({
         behavior: 'smooth'
         })
      }, 1)
   }

   return (
      <>
      <section className="header" name="header">
         <div className="header-line">
            <Link to ="/" className="header-line-button">
               <p className="header-line-button-text">Домой</p>
               <img className="header-line-button-icon" src="images/home-icon.png" alt="" />
            </Link>
            <Link to = "/" className="header-line-button" onClick={() => scroller(".about-me")}>
               <p className="header-line-button-text">Обо мне</p>
               <img className="header-line-button-icon" src="images/about-icon.png" alt="" />
            </Link>
            <Link to = "/" className="header-line-button" onClick={() => scroller(".resume")}>
               <p className="header-line-button-text">Резюме</p>
               <img className="header-line-button-icon" src="images/resume-icon.png" alt="" />
            </Link> 
            <div className="header-line-center">
               <p className="header-line-center-title">Михаил Ефимов</p>
               <p className="header-line-center-subtitle">Web Developer</p>
            </div>
            <Link to = "/" className="header-line-button" onClick={() => scroller(".project")}>
               <p className="header-line-button-text">Мои<br />проекты</p>
               <img className="header-line-button-icon" src="images/project-icon.png" alt="" />
            </Link>
            <Link to = "/" className="header-line-button" onClick={() => scroller(".blog")}>
               <p className="header-line-button-text">Блог</p>
               <img className="header-line-button-icon" src="images/blog-icon.png" alt="" />
            </Link>
            <Link to = "/" className="header-line-button" onClick={() => scroller(".feedback")}>
               <p className="header-line-button-text">Связаться</p>
               <img className="header-line-button-icon" src="images/feedback-icon.png" alt="" />
            </Link>
         </div>
         <div className="mobile-menu-line" style = {{position: "fixed", width: "100%", zIndex: "10", top: "0"}}>
            <img className="mobile-menu-image" src="images/button-mobile-menu-icon.png" alt="" />
         </div>
      </section>
      <ButtonUp flag = {activeHeaderLine} />
      </>
   )}

   export default HeaderInner;