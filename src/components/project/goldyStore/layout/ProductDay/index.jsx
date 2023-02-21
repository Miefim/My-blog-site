import Sticker from '../../UI/Sticker'
import CompareBtn from '../../UI/CompareBtn'
import CircleArrowBtn from '../../UI/CircleArrowBtn'
import style from './index.module.css'

const ProductDay = () => {
   return(
      <div className={style.productDay}>
         <h1 className={style.title}>Товар дня</h1>
         <div className={style.btnBlock}>
            <CircleArrowBtn />
            <CircleArrowBtn className={style.rotate180}/>
         </div>
         <div className={style.productDayBlock}>
            <div className={style.imgBlock}>
               <div className={[style.arrow_right].join(' ')}></div>
               <div className={[style.arrow_right, style.arrow_left, style.noActive].join(' ')}></div>
               <div className={style.stickerBlock}>
                  <Sticker className={style.backgroundBlack}>New</Sticker>
                  <Sticker className={style.backgroundYellow}>Хит</Sticker>
                  <Sticker className={style.backgroundGreen}>Sale</Sticker>
               </div>
               <div className={style.tape}>
                  <div className={style.unit}>
                     <img src="\images\projectImages\goldStore\productDayImgSlider/1012076.svg" alt="" />
                  </div>
               </div>
            </div>
            <div className={style.descriptionBlock}>
               <div className={style.ratingBlock}>
                  <div className={style.ratingBlock_stars}> 
                     <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={style.activeStar} d="M8.5 1.26413L10.339 5.53451L10.4564 5.80719L10.7521 5.83461L15.3817 6.26399L11.8886 9.33262L11.6656 9.52856L11.7309 9.81819L12.7531 14.3539L8.75528 11.9801L8.5 11.8285L8.24472 11.9801L4.24687 14.3539L5.26913 9.81819L5.33441 9.52856L5.11136 9.33262L1.61828 6.264L6.24794 5.83461L6.54356 5.80719L6.66099 5.53451L8.5 1.26413Z" stroke="#E1A661"/>
                     </svg>
                     <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={style.activeStar} d="M8.5 1.26413L10.339 5.53451L10.4564 5.80719L10.7521 5.83461L15.3817 6.26399L11.8886 9.33262L11.6656 9.52856L11.7309 9.81819L12.7531 14.3539L8.75528 11.9801L8.5 11.8285L8.24472 11.9801L4.24687 14.3539L5.26913 9.81819L5.33441 9.52856L5.11136 9.33262L1.61828 6.264L6.24794 5.83461L6.54356 5.80719L6.66099 5.53451L8.5 1.26413Z" stroke="#E1A661"/>
                     </svg>
                     <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={style.activeStar} d="M8.5 1.26413L10.339 5.53451L10.4564 5.80719L10.7521 5.83461L15.3817 6.26399L11.8886 9.33262L11.6656 9.52856L11.7309 9.81819L12.7531 14.3539L8.75528 11.9801L8.5 11.8285L8.24472 11.9801L4.24687 14.3539L5.26913 9.81819L5.33441 9.52856L5.11136 9.33262L1.61828 6.264L6.24794 5.83461L6.54356 5.80719L6.66099 5.53451L8.5 1.26413Z" stroke="#E1A661"/>
                     </svg>
                     <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={style.activeStar} d="M8.5 1.26413L10.339 5.53451L10.4564 5.80719L10.7521 5.83461L15.3817 6.26399L11.8886 9.33262L11.6656 9.52856L11.7309 9.81819L12.7531 14.3539L8.75528 11.9801L8.5 11.8285L8.24472 11.9801L4.24687 14.3539L5.26913 9.81819L5.33441 9.52856L5.11136 9.33262L1.61828 6.264L6.24794 5.83461L6.54356 5.80719L6.66099 5.53451L8.5 1.26413Z" stroke="#E1A661"/>
                     </svg>
                     <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 1.26413L10.339 5.53451L10.4564 5.80719L10.7521 5.83461L15.3817 6.26399L11.8886 9.33262L11.6656 9.52856L11.7309 9.81819L12.7531 14.3539L8.75528 11.9801L8.5 11.8285L8.24472 11.9801L4.24687 14.3539L5.26913 9.81819L5.33441 9.52856L5.11136 9.33262L1.61828 6.264L6.24794 5.83461L6.54356 5.80719L6.66099 5.53451L8.5 1.26413Z" stroke="#E1A661"/>
                     </svg>
                  </div>
                  4,2
               </div>
               <h2 className={style.titleProduct}>Кольцо из золота с бриллиантами</h2>
               <p className={style.text}>Артикул: 1012076</p>
               <div className={style.priceBlock}>
                  <p className={style.price}>22 000 ₽</p>
                  <p className={style.oldPrice}>22 000 ₽</p>
                  <Sticker className={style.priceSticker}>-45%</Sticker>
                  <div className={style.timerBlock}>
                     <div className={style.circleTopLeft}></div>
                     <div className={[style.circleTopLeft, style.circleBottomLeft].join(' ')}></div>
                     <div className={[style.circleTopLeft, style.circleTopRight].join(' ')}></div>
                     <div className={[style.circleTopLeft, style.circleBottomRight].join(' ')}></div>
                     <div className={style.timerWinGroup}>
                        <div className={style.timerWin}>
                           <p className={style.timerWinNumber}>12</p>
                           <p className={style.timerWinText}>Часов</p>
                        </div>
                        <div className={style.timerWin}>
                           <p className={style.timerWinNumber}>46</p>
                           <p className={style.timerWinText}>Минут</p>
                        </div>
                        <div className={style.timerWin}>
                           <p className={style.timerWinNumber}>51</p>
                           <p className={style.timerWinText}>Секунд</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className={style.separateLine}></div>
               <div className={style.colorBlock}>
                  ЦВЕТ
                  <div className={style.colorGroup}>
                     <div className={style.colorUnit}>
                        <div className={[style.colorUnit_content].join(' ')}></div>
                     </div>
                     <div className={[style.colorUnit, style.activeCircle].join(' ')}>
                        <div className={[style.colorUnit_content, style.gold].join(' ')}></div>
                     </div>
                     <div className={style.colorUnit}>
                        <div className={[style.colorUnit_content, style.orange].join(' ')}></div>
                     </div>
                     <div className={style.colorUnit}>
                        <div className={[style.colorUnit_content, style.green].join(' ')}></div>
                     </div>
                  </div>
               </div>
               <div className={style.sizeBlock}>
                  <div className={style.sizeBlock_title}>
                     РАЗМЕР
                     <div className={style.clue}>?</div>
                  </div>
                  <div className={style.sizeLine}>
                     <div className={[style.sizeLine_unit, style.unitSelected].join(' ')}>
                        16,5
                     </div>
                     <div className={style.sizeLine_unit}>
                        17,5
                     </div>
                     <div className={style.sizeLine_unit}>
                        18,5
                     </div>
                     <div className={style.sizeLine_unit}>
                        19
                     </div>
                     <div className={style.sizeLine_unit}>
                        19,5
                     </div>
                     <div className={style.sizeLine_unit}>
                        19,5
                     </div>
                     <div className={style.sizeLine_unit}>
                        18,5
                     </div>
                     <div className={style.sizeLine_unit}>
                        19
                     </div>
                     <div className={[style.sizeLine_unit, style.unitNoActive].join(' ')}>
                        19,5
                     </div>
                     <div className={[style.sizeLine_unit, style.unitNoActive].join(' ')}>
                        19,5
                     </div>
                  </div>
                  <div className={style.buttonsGroup}>
                     <div className={style.bigButtonsGroup}>
                        <button className={style.addBtn}>В КОРЗИНУ</button>
                        <button className={style.fastBuyBtn}>КУПИТЬ В 1 КЛИК</button>
                     </div>
                     <div className={style.smallButtonsGroup}>
                        <div className={style.smallBtn}>
                           <div className={style.smallBtn_icon}>
                              <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M7.94668e-08 5.40001C-0.000248434 3.95035 0.582385 2.56146 1.61681 1.54584C2.65124 0.53022 4.05058 -0.026834 5.5 1.1704e-05C7.21732 -0.0091083 8.85599 0.719186 10 2.00001C11.144 0.719186 12.7827 -0.0091083 14.5 1.1704e-05C15.9494 -0.026834 17.3488 0.53022 18.3832 1.54584C19.4176 2.56146 20.0002 3.95035 20 5.40001C20 10.756 13.621 14.8 10 18C6.387 14.773 7.94668e-08 10.76 7.94668e-08 5.40001Z" fill="#C9C9C9"/>
                              </svg>
                           </div>
                           Сохранить
                        </div>
                        <div className={style.smallBtn}>
                           <div className={style.smallBtn_icon}>
                              <CompareBtn/>
                           </div>
                           Сравнить
                        </div>
                        <div className={style.smallBtn}>
                           <div className={style.smallBtn_icon}>
                              <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path fillRule="evenodd" clipRule="evenodd" d="M9.66667 3.58329C9.66667 1.97246 10.9725 0.666626 12.5833 0.666626C14.1942 0.666626 15.5 1.97246 15.5 3.58329C15.5 5.19411 14.1942 6.49996 12.5833 6.49996C11.769 6.49996 11.0327 6.16626 10.5036 5.62816L6.22756 8.21884C6.29649 8.46745 6.33333 8.7294 6.33333 8.99996C6.33333 9.24301 6.3036 9.47912 6.24758 9.70485L10.6009 12.2773C11.1212 11.7949 11.8178 11.5 12.5833 11.5C14.1942 11.5 15.5 12.8058 15.5 14.4166C15.5 16.0274 14.1942 17.3333 12.5833 17.3333C10.9725 17.3333 9.66667 16.0274 9.66667 14.4166C9.66667 14.1736 9.69639 13.9375 9.75241 13.7118L5.39908 11.1394C4.87875 11.6217 4.18214 11.9166 3.41667 11.9166C1.80585 11.9166 0.5 10.6108 0.5 8.99996C0.5 7.38914 1.80585 6.08329 3.41667 6.08329C4.15373 6.08329 4.82695 6.3567 5.34042 6.80763L9.72225 4.15284C9.68578 3.96864 9.66667 3.7782 9.66667 3.58329ZM12.5833 2.33329C11.893 2.33329 11.3333 2.89294 11.3333 3.58329C11.3333 4.27364 11.893 4.83329 12.5833 4.83329C13.2737 4.83329 13.8333 4.27364 13.8333 3.58329C13.8333 2.89294 13.2737 2.33329 12.5833 2.33329ZM3.41667 7.74996C2.72632 7.74996 2.16667 8.30961 2.16667 8.99996C2.16667 9.69031 2.72632 10.25 3.41667 10.25C4.10701 10.25 4.66667 9.69031 4.66667 8.99996C4.66667 8.30961 4.10701 7.74996 3.41667 7.74996ZM12.5833 13.1666C11.893 13.1666 11.3333 13.7263 11.3333 14.4166C11.3333 15.107 11.893 15.6666 12.5833 15.6666C13.2737 15.6666 13.8333 15.107 13.8333 14.4166C13.8333 13.7263 13.2737 13.1666 12.5833 13.1666Z" fill="#C9C9C9"/>
                              </svg>
                           </div>
                           Поделиться
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ProductDay