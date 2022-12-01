import { Element } from 'react-scroll'

function Feedback() {
   return (
      <Element className="feedback" name="feedback">
      {/* <iframe
         src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d47232.701377398516!2d49.81411495721418!3d40.39677052176031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1669223273236!5m2!1sru!2s"
         width="1519"
         height="811"
         style="border: 0"
         allowfullscreen=""
         loading="lazy"
         referrerpolicy="no-referrer-when-downgrade"
      ></iframe> */}
      <div className="container container-feedback">
         <div className="feedback-content">
            <div className="feedback-form">
               <div className="line-title"></div>
               <div className="title-feedback">Задайте свой вопрос</div>
               <input className="small-input" type="text" placeholder="Имя" />
               <input className="small-input" type="text" placeholder="Телефон" />
               <input className="small-input" type="text" placeholder="Email" />
               <textarea className="big-input" type="text" placeholder="Ваш вопрос"></textarea>
               <div className="feedback-button-box">
                  <div className="header-banner-button feedback-button">
                     <p className="header-banner-button-text">Отправить</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </Element>
   )}

   export default Feedback