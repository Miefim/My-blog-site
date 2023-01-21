import React from "react"

function AboutMe() {
   return (
      <section className="about-me" name = "about-me">
         <div className="about-me-card">
            <div className="about-me-card-content">
               <div className="line-title"></div>
               <p className="title">Who am I ?</p>
               <p className="about-me-card-content-subtitle">I am newbie Web developer</p>
               <p className="about-me-card-content-description">
                  One day I made a strong-willed decision - to study and develop in a business that I really like.
               </p>
               <div className="about-me-card-content-button">
                  <img
                     className="about-me-card-content-button-icon-hover"
                     src="images/download-icon-hover.png"
                     alt=""
                  />
                  <img
                     className="about-me-card-content-button-icon"
                     src="images/download-icon.png"
                     alt=""
                  />
                  <a href="/documents/resume.pdf" download="Mikhail_Efimov_Frond-end_developer_resume" style={{textDecoration: 'none'}}>
                     <p className="about-me-card-content-button-text">Download My CV</p>
                  </a>
               </div>
            </div>
         </div>
         <div className="about-me-card">
            <div className="about-me-card-content">
               <div className="line-title"></div>
               <p className="title">Personal Info</p>
               <p className="about-me-card-content-personal-info">
                  <b className="black-text">Birthdate:</b> 17.06.1993<br />
                  <b className="black-text">Phone:</b> +994 50 742 13 49<br />
                  <b className="black-text">Email:</b> micha_93_93@mail.ru<br />
                  <b className="black-text">Address:</b> Baku<br />
                  <b className="black-text">Discord:</b> MiEfim
               </p>
               <div className="about-me-card-content-social-network">
                  <a href="https://vk.com/id25625625" target='_blank'>
                     <img
                        className="about-me-card-content-social-network-icon"
                        src="images/vk-logo-blue.png"
                        alt=""
                     />
                  </a>
                  <a href="https://www.linkedin.com/in/%D0%BC%D0%B8%D1%85%D0%B0%D0%B8%D0%BB-%D0%B5%D1%84%D0%B8%D0%BC%D0%BE%D0%B2-b03801258/" target='_blank'>
                     <img
                        className="about-me-card-content-social-network-icon"
                        src="/images/linkedin-logo-blue.png"
                        alt=""
                     />
                  </a>
                  <a href="" target='_blank'>
                     <img
                        className="about-me-card-content-social-network-icon"
                        src="images/hh-logo.png"
                        alt=""
                     />
                  </a>
                  <a href="https://www.codewars.com/users/Miefim" target='_blank'>
                     <img
                        className="about-me-card-content-social-network-icon"
                        src="/images/codewars_icon.png"
                        alt=""
                     />
                  </a>
                  <a href="https://github.com/Miefim" target='_blank'>
                     <img
                        className="about-me-card-content-social-network-icon"
                        src="/images/githubIcon_blue.png"
                        alt=""
                     />
                  </a>
               </div>
            </div>
         </div>
         <div className="about-me-card">
            <div className="about-me-card-content">
               <div className="line-title"></div>
               <p className="title">My Expertise</p>
               <div className="about-me-card-content-skill" style={{margin: '30px 0 0 0'}}>
                  <img
                     className="about-me-card-content-skill-icon"
                     src="images/skill-icon1.png"
                     alt=""
                  />
                  <p className="about-me-card-content-description">
                     <b className="black-text">Web Development</b><br />
                     Development of web client applications
                  </p>
               </div>
               <div className="line-skill"></div>
               <div className="about-me-card-content-skill">
                  <img
                     className="about-me-card-content-skill-icon"
                     src="images/skill-icon3.png"
                     alt=""
                  />
                  <p className="about-me-card-content-description">
                     <b className="black-text">Website maintenance</b><br />
                     Updating website content using CMS
                  </p>
               </div>
               {/* <div className="line-skill"></div>
               <div className="about-me-card-content-skill">
                  <img
                     className="about-me-card-content-skill-icon"
                     src="images/skill-icon3.png"
                     alt=""
                  />
                  <p className="about-me-card-content-description">
                     <b className="black-text">Еще один очень важный навык</b><br />
                     Очень важный навык без которого никуда
                  </p>
               </div> */}
            </div>
         </div>
      </section>
   )}
   
   export default AboutMe