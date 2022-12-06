import React from "react"

function AboutMe() {
   return (
      <section className="about-me" name = "about-me">
         <div className="about-me-card">
            <div className="about-me-card-content">
               <div className="line-title"></div>
               <p className="title">Кто я?</p>
               <p className="about-me-card-content-subtitle">Я веселый начинающий<br />Web Developer</p>
               <p className="about-me-card-content-description">
                  Здесь будет написано, какой я хороший и замечательный
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
                  <p className="about-me-card-content-button-text">Скачать резюме</p>
               </div>
            </div>
         </div>
         <div className="about-me-card">
            <div className="about-me-card-content">
               <div className="line-title"></div>
               <p className="title">Персональная информация</p>
               <p className="about-me-card-content-personal-info">
                  <b className="black-text">Дата рождения:</b> 17.06.1993<br />
                  <b className="black-text">Телефон:</b> +7 931 275 09 73<br />
                  <b className="black-text">Email:</b> micha_93_93@mail.ru<br />
                  <b className="black-text">Адрес:</b> Санкт-Петербург, пр-т Наставников<br />
                  <b className="black-text">Discord:</b> MiEfim
               </p>
               <div className="about-me-card-content-social-network">
                  <img
                     className="about-me-card-content-social-network-icon"
                     src="images/vk-logo.png"
                     alt=""
                  />
                  <img
                     className="about-me-card-content-social-network-icon"
                     src="images/telegram-logo.png"
                     alt=""
                  />
                  <img
                     className="about-me-card-content-social-network-icon"
                     src="images/linkedin-logo.png"
                     alt=""
                  />
                  <img
                     className="about-me-card-content-social-network-icon"
                     src="images/hh-logo.png"
                     alt=""
                  />
                  <img
                     className="about-me-card-content-social-network-icon"
                     src="images/whatsapp-logo.png"
                     alt=""
                  />
               </div>
            </div>
         </div>
         <div className="about-me-card">
            <div className="about-me-card-content">
               <div className="line-title"></div>
               <p className="title">Мои компетенции</p>
               <div className="about-me-card-content-skill">
                  <img
                     className="about-me-card-content-skill-icon"
                     src="images/skill-icon1.png"
                     alt=""
                  />
                  <p className="about-me-card-content-description">
                     <b className="black-text">FrontEnd разработка</b><br />
                     Разработка пользовательского интерфейса
                  </p>
               </div>
               <div className="line-skill"></div>
               <div className="about-me-card-content-skill">
                  <img
                     className="about-me-card-content-skill-icon"
                     src="images/skill-icon2.png"
                     alt=""
                  />
                  <p className="about-me-card-content-description">
                     <b className="black-text">BackEnd разработка</b><br />
                     Разработка серверной части
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
                     <b className="black-text">Еще один очень важный навык</b><br />
                     Очень важный навык без которого никуда
                  </p>
               </div>
            </div>
         </div>
      </section>
   )}
   
   export default AboutMe