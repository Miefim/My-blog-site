import { Element } from 'react-scroll'

function Resume() {
   return (
      <Element className="resume" name="resume">
         <div className="container">
            <div className="resume-title">
               <div className="line-title"></div>
               <div className="title">Мое резюме</div>
            </div>
            <div className="resume-content">
               <div className="resume-content-column">
                  <div className="resume-card">
                     <div className="line-title"></div>
                     <div className="resume-card-title">
                        <div className="resume-card-title-text title">Опыт работы</div>
                        <img
                           className="resume-card-title-icon"
                           src="images/resume-card-icon-work.png"
                           alt=""
                        />
                     </div>
                     <div className="resume-card-content">
                        <div className="vertical-line"></div>
                        <ul>
                           <li>
                              <div className="resume-card-content-title-list">Инженер-механик</div>
                              <div className="resume-card-content-subtitle">Фев 2018 - Сен 2022</div>
                              <div className="resume-card-content-description">
                                 Диагностика и ремонт ДВС
                              </div>
                           </li>
                           <li>
                              <div className="resume-card-content-title-list">Инженер</div>
                              <div className="resume-card-content-subtitle">Сен 2013 - Авг 2017</div>
                              <div className="resume-card-content-description no-padding">
                                 Монтаж видео для образовательного учреждения
                              </div>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="resume-card">
                     <div className="line-title"></div>
                     <div className="resume-card-title">
                        <div className="resume-card-title-text title">Интересы</div>
                        <img className="resume-card-title-icon" src="images/interest.png" alt="" />
                     </div>
                     <div className="resume-card-content-interest">
                        <div className="interest">
                           <div className="interest-circle">
                              <img className="interest-icon" src="images/interest-music.png" alt="" />
                           </div>
                           <div className="interest-circle-description">Музыка</div>
                        </div>
                        <div className="interest">
                           <div className="interest-circle">
                              <img className="interest-icon" src="images/interest-gaming.png" alt="" />
                           </div>
                           <div className="interest-circle-description">Gaming</div>
                        </div>
                        <div className="interest">
                           <div className="interest-circle">
                              <img className="interest-icon" src="images/interest-aqua.png" alt="" />
                           </div>
                           <div className="interest-circle-description">Аквариум</div>
                        </div>
                        <div className="interest">
                           <div className="interest-circle">
                              <img className="interest-icon" src="images/interest-travel.png" alt="" />
                           </div>
                           <div className="interest-circle-description">Туризм</div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="resume-content-column">
                  <div className="resume-card">
                     <div className="line-title"></div>
                     <div className="resume-card-title">
                        <div className="resume-card-title-text title">Обучение</div>
                        <img
                           className="resume-card-title-icon"
                           src="images/resume-card-icon-education.png"
                           alt=""
                        />
                     </div>
                     <div className="resume-card-content">
                        <div className="vertical-line"></div>
                        <ul>
                           <li>
                              <div className="resume-card-content-title-list">Магистратура</div>
                              <div className="resume-card-content-subtitle">Сен 2015 - Июн 2017</div>
                              <div className="resume-card-content-description">
                                 Санкт-Петербургский государственный электротехнический университет
                                 "ЛЭТИ" им. В.И. Ульянова (Ленина)<br />
                                 Факультет радиотехники и телекоммуникаций
                              </div>
                           </li>
                           <li>
                              <div className="resume-card-content-title-list">Бакалавриат</div>
                              <div className="resume-card-content-subtitle">Сен 2011 - Июн 2015</div>
                              <div className="resume-card-content-description no-padding">
                                 Санкт-Петербургский государственный электротехнический университет
                                 "ЛЭТИ" им. В.И. Ульянова (Ленина)<br />
                                 Факультет радиотехники и телекоммуникаций
                              </div>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="resume-card">
                     <div className="line-title"></div>
                     <div className="resume-card-title">
                        <div className="resume-card-title-text title">Языки</div>
                        <img
                           className="resume-card-title-icon"
                           src="images/resume-card-icon-language.png"
                           alt=""
                        />
                     </div>
                     <div className="resume-card-content-title">Английский</div>
                     <div className="skill-level-line">
                        <div className="line-skill-active"></div>
                        <div className="line-skill-no-active"></div>
                        <div className="line-skill-no-active"></div>
                        <div className="line-skill-no-active"></div>
                        <div className="line-skill-no-active"></div>
                     </div>
                     <div className="resume-card-content-title">Русский</div>
                     <div className="skill-level-line">
                        <div className="line-skill-active"></div>
                        <div className="line-skill-active"></div>
                        <div className="line-skill-active"></div>
                        <div className="line-skill-active"></div>
                        <div className="line-skill-no-active"></div>
                     </div>
                  </div>
               </div>
               <div className="resume-content-column">
                  <div className="resume-card">
                     <div className="line-title"></div>
                     <div className="resume-card-title">
                        <div className="resume-card-title-text title">Hard skills</div>
                        <img
                           className="resume-card-title-icon"
                           src="images/resume-card-icon-hurdskill.png"
                           alt=""
                        />
                     </div>
                     <div className="resume-card-content-title">HTML/CSS</div>
                     <div className="skill-level-line">
                        <div className="line-skill-active"></div>
                        <div className="line-skill-no-active"></div>
                        <div className="line-skill-no-active"></div>
                        <div className="line-skill-no-active"></div>
                        <div className="line-skill-no-active"></div>
                     </div>
                     <div className="resume-card-content-title">JavaScript</div>
                     <div className="skill-level-line">
                        <div className="line-skill-active"></div>
                        <div className="line-skill-no-active"></div>
                        <div className="line-skill-no-active"></div>
                        <div className="line-skill-no-active"></div>
                        <div className="line-skill-no-active"></div>
                     </div>
                     <div className="resume-card-content-title">Node JS</div>
                     <div className="skill-level-line">
                        <div className="line-skill-no-active"></div>
                        <div className="line-skill-no-active"></div>
                        <div className="line-skill-no-active"></div>
                        <div className="line-skill-no-active"></div>
                        <div className="line-skill-no-active"></div>
                     </div>
                     <div className="resume-card-content-title">React JS</div>
                     <div className="skill-level-line">
                        <div className="line-skill-no-active"></div>
                        <div className="line-skill-no-active"></div>
                        <div className="line-skill-no-active"></div>
                        <div className="line-skill-no-active"></div>
                        <div className="line-skill-no-active"></div>
                     </div>
                  </div>
                  <div className="resume-card">
                     <div className="line-title"></div>
                     <div className="resume-card-title">
                        <div className="resume-card-title-text title">Soft skills</div>
                        <img className="resume-card-title-icon" src="images/soft-skills.png" alt="" />
                     </div>
                     <div>
                        <div className="resume-card-content-soft-skill-line">
                           <div className="resume-card-content-soft-skill">Ответственный</div>
                           <div className="resume-card-content-soft-skill">Неконфликтный</div>
                        </div>
                        <div className="resume-card-content-soft-skill-line">
                           <div className="resume-card-content-soft-skill">Общительный</div>
                           <div className="resume-card-content-soft-skill">Весёлый</div>
                        </div>
                        <div className="resume-card-content-soft-skill-line">
                           <div className="resume-card-content-soft-skill">Креативный</div>
                           <div className="resume-card-content-soft-skill">Без вредных привычек</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Element>
   )}

export default Resume