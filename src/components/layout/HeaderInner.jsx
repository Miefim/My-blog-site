import React from "react";
import { Link, useNavigate } from "react-router-dom";

import ButtonUp from "../layout/ButtonUp";

function HeaderInner () {
   const navigate = useNavigate()

   let [activeHeaderLine, setActiveHeaderLine] = React.useState(false)

   window.addEventListener("scroll", () => {
         if(window.pageYOffset >= `${80}`){
            setActiveHeaderLine(activeHeaderLine = true)
         }
         else {
            setActiveHeaderLine(activeHeaderLine = false)
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
         <section className="header" name="header">
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
            <div className="mobile-menu-line" style = {{position: "fixed", width: "100%", zIndex: "10", top: "0"}}>
               <img className="mobile-menu-image" src="/images/button-mobile-menu-icon.png" alt="" />
            </div>
         </section>
         <ButtonUp flag = {activeHeaderLine} />
      </>
   )}

   export default HeaderInner;