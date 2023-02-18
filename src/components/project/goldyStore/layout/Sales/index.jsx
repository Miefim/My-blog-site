import CircleArrowBtn from '../../UI/CircleArrowBtn'
import style from './index.module.css'

const Sales = () => {
   return (
      <div className={style.sales}>
         <h1 className={style.sales_title}>Распродажа</h1>
         <div className={style.sales_categoryLine}>
            <div className={[style.categoryLine_btn, style.categoryLine_btn_active].join(' ')}>Кольца</div> 
            <div className={style.categoryLine_btn}>Серьги</div>
            <div className={style.categoryLine_btn}>Браслеты</div>
            <div className={style.categoryLine_btn}>Часы</div>
         </div>
         <div className={style.btnBlock}>
            <CircleArrowBtn />
            <CircleArrowBtn className={style.btnBlock_right}/>
         </div>
         <div className={style.sliderWin}>
            <div className={style.sliderTape}>
               <div className={style.card}>
                  <div className={[style.saleIcon, style.saleIcon_green, style.saleIcon_visible].join(' ')}>Sale</div>
                  <div className={style.likeIconBlock}>
                     <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={style.likeIcon} d="M7.94668e-08 5.40001C-0.000248434 3.95035 0.582385 2.56146 1.61681 1.54584C2.65124 0.53022 4.05058 -0.026834 5.5 1.1704e-05C7.21732 -0.0091083 8.85599 0.719186 10 2.00001C11.144 0.719186 12.7827 -0.0091083 14.5 1.1704e-05C15.9494 -0.026834 17.3488 0.53022 18.3832 1.54584C19.4176 2.56146 20.0002 3.95035 20 5.40001C20 10.756 13.621 14.8 10 18C6.387 14.773 7.94668e-08 10.76 7.94668e-08 5.40001Z" fill="#000000"/>
                     </svg>
                  </div>
                  <div className={style.eyeIconBlock}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path className={style.likeIcon} fillRule="evenodd" clipRule="evenodd" d="M11.0044 1.5C11.0044 0.947715 10.5567 0.5 10.0044 0.5C9.45211 0.5 9.00439 0.947715 9.00439 1.5V3.54989C8.04476 3.64609 7.12848 3.87731 6.27405 4.20772L5.4446 3.05037C5.12289 2.60146 4.49817 2.49836 4.04927 2.82007C3.60036 3.14179 3.49726 3.76651 3.81898 4.21541L4.45792 5.10695C3.92702 5.43178 3.434 5.79271 2.98539 6.17708C1.24791 7.6658 0 9.66836 0 11.5C0 13.3316 1.24791 15.3342 2.98539 16.8229C4.76222 18.3453 7.23586 19.5 10 19.5C12.7639 19.5 15.2376 18.3462 17.0145 16.8241C18.7522 15.3355 20 13.333 20 11.5C20 9.66702 18.7522 7.66444 17.0145 6.17591C16.6848 5.89346 16.331 5.62368 15.9559 5.37161L16.6253 4.43759C16.947 3.98869 16.844 3.36398 16.3951 3.04225C15.9462 2.72053 15.3214 2.82362 14.9997 3.27252L14.1918 4.39975C13.2102 3.96793 12.1376 3.66528 11.0044 3.55075V1.5ZM10 7.5C7.79086 7.5 6 9.29086 6 11.5C6 13.7091 7.79086 15.5 10 15.5C12.2091 15.5 14 13.7091 14 11.5C14 9.29086 12.2091 7.5 10 7.5Z" fill="#C9C9C9"/>
                  </svg>
                  </div>
                  <div className={style.cardImgBlock}>
                     <img className={style.cardImg} src="/images/projectImages/goldStore/salesRing1.svg" alt="" />
                     <div className={style.circleGroup}>
                        <div className={[style.circleGroup_circle, style.circleGroup_circle_active].join(' ')}></div>
                        <div className={style.circleGroup_circle}></div>
                        <div className={style.circleGroup_circle}></div>
                     </div>
                  </div>
                  <div className={style.priceBlock}>
                     <p className={style.price}>41 000 ₽</p>
                     <p className={[style.oldPrice, style.saleIcon_visible].join(' ')}>65 000 ₽</p>
                     <div className={[style.saleIcon, style.saleIcon_visible].join(' ')}>-45%</div>
                  </div>
                  <p className={style.description}>Стильное кольцо из белого золота c бриллиантами</p>
               </div>
               <div className={style.card}>
                  <div className={[style.saleIcon, style.saleIcon_green].join(' ')}>Sale</div>
                  <div className={style.likeIconBlock}>
                     <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={style.likeIcon} d="M7.94668e-08 5.40001C-0.000248434 3.95035 0.582385 2.56146 1.61681 1.54584C2.65124 0.53022 4.05058 -0.026834 5.5 1.1704e-05C7.21732 -0.0091083 8.85599 0.719186 10 2.00001C11.144 0.719186 12.7827 -0.0091083 14.5 1.1704e-05C15.9494 -0.026834 17.3488 0.53022 18.3832 1.54584C19.4176 2.56146 20.0002 3.95035 20 5.40001C20 10.756 13.621 14.8 10 18C6.387 14.773 7.94668e-08 10.76 7.94668e-08 5.40001Z" fill="#000000"/>
                     </svg>
                  </div>
                  <div className={style.eyeIconBlock}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path className={style.likeIcon} fillRule="evenodd" clipRule="evenodd" d="M11.0044 1.5C11.0044 0.947715 10.5567 0.5 10.0044 0.5C9.45211 0.5 9.00439 0.947715 9.00439 1.5V3.54989C8.04476 3.64609 7.12848 3.87731 6.27405 4.20772L5.4446 3.05037C5.12289 2.60146 4.49817 2.49836 4.04927 2.82007C3.60036 3.14179 3.49726 3.76651 3.81898 4.21541L4.45792 5.10695C3.92702 5.43178 3.434 5.79271 2.98539 6.17708C1.24791 7.6658 0 9.66836 0 11.5C0 13.3316 1.24791 15.3342 2.98539 16.8229C4.76222 18.3453 7.23586 19.5 10 19.5C12.7639 19.5 15.2376 18.3462 17.0145 16.8241C18.7522 15.3355 20 13.333 20 11.5C20 9.66702 18.7522 7.66444 17.0145 6.17591C16.6848 5.89346 16.331 5.62368 15.9559 5.37161L16.6253 4.43759C16.947 3.98869 16.844 3.36398 16.3951 3.04225C15.9462 2.72053 15.3214 2.82362 14.9997 3.27252L14.1918 4.39975C13.2102 3.96793 12.1376 3.66528 11.0044 3.55075V1.5ZM10 7.5C7.79086 7.5 6 9.29086 6 11.5C6 13.7091 7.79086 15.5 10 15.5C12.2091 15.5 14 13.7091 14 11.5C14 9.29086 12.2091 7.5 10 7.5Z" fill="#C9C9C9"/>
                  </svg>
                  </div>
                  <div className={style.cardImgBlock}>
                     <img className={style.cardImg} src="/images/projectImages/goldStore/salesRing2.svg" alt="" />
                     <div className={style.circleGroup}>
                        <div className={[style.circleGroup_circle, style.circleGroup_circle_active].join(' ')}></div>
                        <div className={style.circleGroup_circle}></div>
                        <div className={style.circleGroup_circle}></div>
                     </div>
                  </div>
                  <div className={style.priceBlock}>
                     <p className={style.price}>56 000 ₽</p>
                     <p className={style.oldPrice}>65 000 ₽</p>
                     <div className={[style.saleIcon].join(' ')}>-45%</div>
                  </div>
                  <p className={style.description}>Стильное кольцо из белого золота c бриллиантами</p>
               </div>
               <div className={style.card}>
                  <div className={[style.saleIcon, style.saleIcon_green].join(' ')}>Sale</div>
                  <div className={style.likeIconBlock}>
                     <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={style.likeIcon} d="M7.94668e-08 5.40001C-0.000248434 3.95035 0.582385 2.56146 1.61681 1.54584C2.65124 0.53022 4.05058 -0.026834 5.5 1.1704e-05C7.21732 -0.0091083 8.85599 0.719186 10 2.00001C11.144 0.719186 12.7827 -0.0091083 14.5 1.1704e-05C15.9494 -0.026834 17.3488 0.53022 18.3832 1.54584C19.4176 2.56146 20.0002 3.95035 20 5.40001C20 10.756 13.621 14.8 10 18C6.387 14.773 7.94668e-08 10.76 7.94668e-08 5.40001Z" fill="#000000"/>
                     </svg>
                  </div>
                  <div className={style.eyeIconBlock}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path className={style.likeIcon} fillRule="evenodd" clipRule="evenodd" d="M11.0044 1.5C11.0044 0.947715 10.5567 0.5 10.0044 0.5C9.45211 0.5 9.00439 0.947715 9.00439 1.5V3.54989C8.04476 3.64609 7.12848 3.87731 6.27405 4.20772L5.4446 3.05037C5.12289 2.60146 4.49817 2.49836 4.04927 2.82007C3.60036 3.14179 3.49726 3.76651 3.81898 4.21541L4.45792 5.10695C3.92702 5.43178 3.434 5.79271 2.98539 6.17708C1.24791 7.6658 0 9.66836 0 11.5C0 13.3316 1.24791 15.3342 2.98539 16.8229C4.76222 18.3453 7.23586 19.5 10 19.5C12.7639 19.5 15.2376 18.3462 17.0145 16.8241C18.7522 15.3355 20 13.333 20 11.5C20 9.66702 18.7522 7.66444 17.0145 6.17591C16.6848 5.89346 16.331 5.62368 15.9559 5.37161L16.6253 4.43759C16.947 3.98869 16.844 3.36398 16.3951 3.04225C15.9462 2.72053 15.3214 2.82362 14.9997 3.27252L14.1918 4.39975C13.2102 3.96793 12.1376 3.66528 11.0044 3.55075V1.5ZM10 7.5C7.79086 7.5 6 9.29086 6 11.5C6 13.7091 7.79086 15.5 10 15.5C12.2091 15.5 14 13.7091 14 11.5C14 9.29086 12.2091 7.5 10 7.5Z" fill="#C9C9C9"/>
                  </svg>
                  </div>
                  <div className={style.cardImgBlock}>
                     <img className={style.cardImg} src="/images/projectImages/goldStore/salesRing3.svg" alt="" />
                     <div className={style.circleGroup}>
                        <div className={[style.circleGroup_circle, style.circleGroup_circle_active].join(' ')}></div>
                        <div className={style.circleGroup_circle}></div>
                        <div className={style.circleGroup_circle}></div>
                     </div>
                  </div>
                  <div className={style.priceBlock}>
                     <p className={style.price}>37 500 ₽</p>
                     <p className={style.oldPrice}>65 000 ₽</p>
                     <div className={[style.saleIcon].join(' ')}>-45%</div>
                  </div>
                  <p className={style.description}>Стильное кольцо из белого золота c бриллиантами</p>
               </div>
               <div className={style.card}>
                  <div className={[style.saleIcon, style.saleIcon_green].join(' ')}>Sale</div>
                  <div className={style.likeIconBlock}>
                     <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={style.likeIcon} d="M7.94668e-08 5.40001C-0.000248434 3.95035 0.582385 2.56146 1.61681 1.54584C2.65124 0.53022 4.05058 -0.026834 5.5 1.1704e-05C7.21732 -0.0091083 8.85599 0.719186 10 2.00001C11.144 0.719186 12.7827 -0.0091083 14.5 1.1704e-05C15.9494 -0.026834 17.3488 0.53022 18.3832 1.54584C19.4176 2.56146 20.0002 3.95035 20 5.40001C20 10.756 13.621 14.8 10 18C6.387 14.773 7.94668e-08 10.76 7.94668e-08 5.40001Z" fill="#000000"/>
                     </svg>
                  </div>
                  <div className={style.eyeIconBlock}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path className={style.likeIcon} fillRule="evenodd" clipRule="evenodd" d="M11.0044 1.5C11.0044 0.947715 10.5567 0.5 10.0044 0.5C9.45211 0.5 9.00439 0.947715 9.00439 1.5V3.54989C8.04476 3.64609 7.12848 3.87731 6.27405 4.20772L5.4446 3.05037C5.12289 2.60146 4.49817 2.49836 4.04927 2.82007C3.60036 3.14179 3.49726 3.76651 3.81898 4.21541L4.45792 5.10695C3.92702 5.43178 3.434 5.79271 2.98539 6.17708C1.24791 7.6658 0 9.66836 0 11.5C0 13.3316 1.24791 15.3342 2.98539 16.8229C4.76222 18.3453 7.23586 19.5 10 19.5C12.7639 19.5 15.2376 18.3462 17.0145 16.8241C18.7522 15.3355 20 13.333 20 11.5C20 9.66702 18.7522 7.66444 17.0145 6.17591C16.6848 5.89346 16.331 5.62368 15.9559 5.37161L16.6253 4.43759C16.947 3.98869 16.844 3.36398 16.3951 3.04225C15.9462 2.72053 15.3214 2.82362 14.9997 3.27252L14.1918 4.39975C13.2102 3.96793 12.1376 3.66528 11.0044 3.55075V1.5ZM10 7.5C7.79086 7.5 6 9.29086 6 11.5C6 13.7091 7.79086 15.5 10 15.5C12.2091 15.5 14 13.7091 14 11.5C14 9.29086 12.2091 7.5 10 7.5Z" fill="#C9C9C9"/>
                  </svg>
                  </div>
                  <div className={style.cardImgBlock}>
                     <img className={style.cardImg} src="/images/projectImages/goldStore/salesRing4.svg" alt="" />
                     <div className={style.circleGroup}>
                        <div className={[style.circleGroup_circle, style.circleGroup_circle_active].join(' ')}></div>
                        <div className={style.circleGroup_circle}></div>
                        <div className={style.circleGroup_circle}></div>
                     </div>
                  </div>
                  <div className={style.priceBlock}>
                     <p className={style.price}>39 200 ₽</p>
                     <p className={style.oldPrice}>65 000 ₽</p>
                     <div className={[style.saleIcon].join(' ')}>-45%</div>
                  </div>
                  <p className={style.description}>Стильное кольцо из белого золота c бриллиантами</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Sales