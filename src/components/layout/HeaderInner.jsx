import React from "react";
import { Link, useNavigate } from "react-router-dom";

import MobileMenu from './MobileMenu'
import ButtonUp from "../layout/ButtonUp";

function HeaderInner ({className}) {
   const navigate = useNavigate()

   let [activeHeaderLine, setActiveHeaderLine] = React.useState(false)

   window.addEventListener("scroll", () => {
         if(window.pageYOffset >= `${1}`){
            setActiveHeaderLine(true)
         }
         else {
            setActiveHeaderLine(false)
         }
      }, {
      passive: true
   })

   const scroller = (className) => {
      setTimeout(() => {
         document.querySelector(`${className}`)?.scrollIntoView({
            behavior: 'smooth'
         })
      }, 1)
   }

   return (
      <>
         <section className={`header ${className}`} name="header" style={activeHeaderLine && window.innerWidth <= 670? {height: '60px'} : {}}>
            <div className="header-line">
               <Link to ="/" className="header-line-button">
                  <p className="header-line-button-text">Home</p>
                  <img className="header-line-button-icon" src="/images/home-icon.png" alt="" />
               </Link>
               <Link to = "/" className="header-line-button" onClick={() => scroller(".about-me")}>
                  <p className="header-line-button-text">About Me</p>
                  <img className="header-line-button-icon" src="/images/about-icon.png" alt="" />
               </Link>
               <Link to = "/" className="header-line-button" onClick={() => scroller(".resume")}>
                  <p className="header-line-button-text">Resume</p>
                  <img className="header-line-button-icon" src="/images/resume-icon.png" alt="" />
               </Link> 
               <div className="header-line-center">
                  <p className="header-line-center-title">Mikhail Efimov</p>
                  <p className="header-line-center-subtitle">Web Developer</p>
               </div>
               <div className="header-line-button" onClick={() => navigate('/project_list')}>
                  <p className="header-line-button-text">My<br />projects</p>
                  <img className="header-line-button-icon" src="/images/project-icon.png" alt="" />
               </div>
               <div className="header-line-button" onClick={() => navigate('/blog_list')}>
                  <p className="header-line-button-text">Blog</p>
                  <img className="header-line-button-icon" src="/images/blog-icon.png" alt="" />
               </div>
               <Link to = "/" className="header-line-button" onClick={() => scroller(".feedback")}>
                  <p className="header-line-button-text">Contact</p>
                  <img className="header-line-button-icon" src="/images/feedback-icon.png" alt="" />
               </Link>
            </div>
            <MobileMenu fixed={activeHeaderLine}/>
         </section>
         <ButtonUp flag = {activeHeaderLine} />
      </>
   )}

   export default HeaderInner;