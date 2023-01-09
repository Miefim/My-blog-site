import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from 'react-scroll'
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth"
import { useAuthState } from 'react-firebase-hooks/auth';

import { useFetching } from "../../hooks/useFetching"

import ButtonUp from "../layout/ButtonUp";

function Header() {
   const auth = getAuth()
   const [user] = useAuthState(auth);

   let [activeHeaderLine, setActiveHeaderLine] = useState(false)

   window.addEventListener("scroll", () => {
      if(window.pageYOffset >= `${620}`){
         setActiveHeaderLine(activeHeaderLine = true)
      }
      else {
         setActiveHeaderLine(activeHeaderLine = false)
      }
   },{
      passive: true
   })

   let headerHeight = document.querySelector(".header")?.clientHeight

   const navigate = useNavigate()
   const [message, setMessage] = useState([])
   const [getMessageCount] = useFetching(async() => {
      const response = await fetch(`https://639ef68b7aaf11ceb88f020b.mockapi.io/feedback-message`)
      const result = await response.json() 
      setMessage(result)
   })

   useEffect(() => {
      getMessageCount()
   },[])

   const logDown = () => {
      auth.signOut()
   }

   const toMessage = () => {
      navigate('/admin/account')
   }

   return (
      <>
      <section className="header" name="header">
         {
            user && <div className="header-admin-info">
               {
                  user.uid === 'bqn4tboccsbVpUGKBxtly1GuOQF3'
                  ?
                     <>
                        <div>Привет Админ!</div>
                        <div className="header-admin-info-button" onClick={toMessage}>
                           <img className="header-admin-info-message-icon" src="/images/blog-icon.png" alt="" />
                           Cообщения ({message.length})
                        </div>
                     </>
                  :
                     `Привет ${user.displayName || user.email}!`
               }
               <div className="header-admin-info-button" onClick={logDown}>
                  <img className="header-admin-info-message-icon" src="/images/logout.png" alt="" />
                  Выйти
               </div>
            </div>
         }
         <div className="header-banner" style = {activeHeaderLine? {height: `${(headerHeight)}px`} : {}}>
            <div className="container">
               <div className="header-banner-content-top">
                  <h1 className="header-banner-title">Михаил Ефимов</h1>
                  <p className="header-banner-subtitle">Web Developer</p>
               </div>
               <div className="header-banner-content-bottom">
                  <div className="header-banner-button">
                     <img className="header-banner-button-icon" src="images/print-icon.png" alt="" />
                     <p className="header-banner-button-text">Распечатать резюме</p>
                  </div>
                  <p className="header-banner-email">
                     У вас есть вопросы? Пишите мне на <a className="header-banner-email-link" href="@">micha_93_93@mail.ru</a>
                  </p>
               </div>
            </div>
         </div>
         <div className="header-line" style = {activeHeaderLine && window.innerWidth >= 670? {position: "fixed", width: "100%", zIndex: "10", top: "0"} : {}}>
            <Link to = "header" className="header-line-button" spy={true} smooth={true} duration={500}>
               <p className="header-line-button-text">Домой</p>
               <img className="header-line-button-icon" src="images/home-icon.png" alt="" />
            </Link>
            <Link to = "about-me" className="header-line-button" offset={-80} spy={true} smooth={true} duration={500}>
               <p className="header-line-button-text">Обо мне</p>
               <img className="header-line-button-icon" src="images/about-icon.png" alt="" />
            </Link>
            <Link to = "resume" className="header-line-button" offset={-160} spy={true} smooth={true} duration={500}>
               <p className="header-line-button-text">Резюме</p>
               <img className="header-line-button-icon" src="images/resume-icon.png" alt="" />
            </Link>
            <CSSTransition
            in={activeHeaderLine}
            timeout={300}
            classNames="header-line-center"
            > 
            <div className="header-line-center">
               <CSSTransition
               in={!activeHeaderLine}
               timeout={300}
               classNames="header-line-center"
               unmountOnExit
               >
               <img className="header-line-photo" style = {activeHeaderLine && window.innerWidth >= 670? {display: "none"} : {}} src="images/header-line-photo.jpg" alt="" />
               </CSSTransition>
               <p className="header-line-center-title no-display" style = {activeHeaderLine && window.innerWidth >= 670? {display: "flex"} : {}}>Михаил Ефимов</p>
               <p className="header-line-center-subtitle no-display" style = {activeHeaderLine && window.innerWidth >= 670? {display: "flex"} : {}}>Web Developer</p>
            </div>
            </CSSTransition>
            <Link to = "project" className="header-line-button" offset={-80} spy={true} smooth={true} duration={500}>
               <p className="header-line-button-text">Мои<br />проекты</p>
               <img className="header-line-button-icon" src="images/project-icon.png" alt="" />
            </Link>
            <Link to = "blog" className="header-line-button" offset={-79} spy={true} smooth={true} duration={500}>
               <p className="header-line-button-text">Блог</p>
               <img className="header-line-button-icon" src="images/blog-icon.png" alt="" />
            </Link>
            <Link to = "feedback" className="header-line-button" offset={-76} spy={true} smooth={true} duration={500}>
               <p className="header-line-button-text">Связаться</p>
               <img className="header-line-button-icon" src="images/feedback-icon.png" alt="" />
            </Link>
         </div>
         <div className="mobile-menu-line" style = {activeHeaderLine && window.innerWidth <= 670? {position: "fixed", width: "100%", zIndex: "10", top: "0"} : {}}>
            <img className="mobile-menu-image" src="images/button-mobile-menu-icon.png" alt="" />
         </div>
      </section>
      <ButtonUp flag = {activeHeaderLine} />
      </>
   )}

   export default Header;