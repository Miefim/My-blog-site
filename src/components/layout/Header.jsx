import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from 'react-scroll'
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth"
import { useAuthState } from 'react-firebase-hooks/auth';
import { collection, query, where } from "firebase/firestore";
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { database } from "../../firebase";
import ButtonUp from "../layout/ButtonUp";
import LoaderCircle from "../UI/LoaderCircle";

function Header() {
   const auth = getAuth()
   const [user] = useAuthState(auth);

   const [feedbackMessages, isLoadingFeedbackMessages] = useCollectionData(
      query(collection(database, "feedback-message"), where('read', '==', false))
   )

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
                  user?.uid === 'bqn4tboccsbVpUGKBxtly1GuOQF3'
                  ?
                     <>
                        <div>Hello Admin!</div>
                        <div className="header-admin-info-button" onClick={toMessage}>
                           <img className="header-admin-info-message-icon" src="/images/blog-icon.png" alt="" />
                           Message ({
                              isLoadingFeedbackMessages
                              ?  <LoaderCircle /> 
                              :  feedbackMessages?.length
                           })
                        </div>
                     </>
                  :
                     `Hello ${user?.displayName || user?.email}!`
               }
               <div className="header-admin-info-button" onClick={logDown}>
                  <img className="header-admin-info-message-icon" src="/images/logout.png" alt="" />
                  Sign out
               </div>    
            </div>
         }
         <div className="header-banner" style = {activeHeaderLine? {height: `${(headerHeight)}px`} : {}}>
            <div className="container">
               <div className="header-banner-content-top">
                  <h1 className="header-banner-title">Mikhail Efimov</h1>
                  <p className="header-banner-subtitle">Web Developer</p>
               </div>
               <div className="header-banner-content-bottom">
                  <a href="/documents/resume.pdf" target='_blank' style={{textDecoration: 'none'}}>
                     <div className="header-banner-button">
                        <img className="header-banner-button-icon" src="images/print-icon.png" alt="" />
                        <p className="header-banner-button-text">Print CV</p>
                     </div>
                  </a>
                  <p className="header-banner-email">
                     You have questions? <Link to='feedback' spy={true} smooth={true} duration={500} className="header-banner-email-link" href="@">Write to me</Link>
                  </p>
               </div>
            </div>
         </div>
         <div className="header-line" style = {activeHeaderLine && window.innerWidth >= 670? {position: "fixed", width: "100%", zIndex: "10", top: "0"} : {}}>
            <Link to = "header" className="header-line-button" spy={true} smooth={true} duration={500}>
               <p className="header-line-button-text">Home</p>
               <img className="header-line-button-icon" src="images/home-icon.png" alt="" />
            </Link>
            <Link to = "about-me" className="header-line-button" offset={-80} spy={true} smooth={true} duration={500}>
               <p className="header-line-button-text">About Me</p>
               <img className="header-line-button-icon" src="images/about-icon.png" alt="" />
            </Link>
            <Link to = "resume" className="header-line-button" offset={-160} spy={true} smooth={true} duration={500}>
               <p className="header-line-button-text">Resume</p>
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
               <p className="header-line-center-title no-display" style = {activeHeaderLine && window.innerWidth >= 670? {display: "flex"} : {}}>Mikhail Efimov</p>
               <p className="header-line-center-subtitle no-display" style = {activeHeaderLine && window.innerWidth >= 670? {display: "flex"} : {}}>Web Developer</p>
            </div>
            </CSSTransition>
            <Link to = "project" className="header-line-button" offset={-80} spy={true} smooth={true} duration={500}>
               <p className="header-line-button-text">My<br />project</p>
               <img className="header-line-button-icon" src="images/project-icon.png" alt="" />
            </Link>
            <Link to = "blog" className="header-line-button" offset={-79} spy={true} smooth={true} duration={500}>
               <p className="header-line-button-text">Blog</p>
               <img className="header-line-button-icon" src="images/blog-icon.png" alt="" />
            </Link>
            <Link to = "feedback" className="header-line-button" offset={-76} spy={true} smooth={true} duration={500}>
               <p className="header-line-button-text">Contact</p>
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