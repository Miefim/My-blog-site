import React from "react"

import style from "./NasaApiBlock.module.css"

function NasaApiBlock () {
   const [inputValue, setInputValue] = React.useState("")
   
   const surchImages = () => {
      fetch(`https://images-api.nasa.gov/search?q=${inputValue}&media_type=image`)
      .then((response) => {
         return response.json()
      })
      .then((data) => {
         setImageArray(data.collection.items)
         setInputValue("")
      })  
   }

   let [imageArray, setImageArray] = React.useState()
   let [openSliderFlag, setOpenSliderFlag] = React.useState(false)
   let [index, setIndex] = React.useState(0)

   const openSlider = () => {
      setOpenSliderFlag(true)
   }

   return (
      <>
         <div className={style.container}>
            <div className={style.header}>
               <div className={style.banner}>
                  <h1 className={style.title}>NASA API</h1>
               </div>
               <div className={style.inputBlock}>
                  <input 
                     className={style.input} 
                     type="text" 
                     placeholder="Введите запрос, чтобы найти фото на космическую тематику" 
                     value={inputValue} 
                     onChange={(e) => setInputValue(e.target.value)}
                  />
                  <button className={style.surchButton} onClick={surchImages}>
                     <img className={style.surchButton_picture} src="images/nasaApiBlock/surch.png" alt="" />
                  </button>
               </div>
            </div>
            <div className={style.body}>
               {imageArray?.map((el, id)=>
                  <div className = {style.imageUnit} key = {el.links[0].href} onClick={() => {
                     openSlider()
                     setIndex(id)
                  }}>
                     <img className={style.imageUnit_picture} src={el.links[0].href} alt="" />
                  </div>
               )}
            </div>
         </div>
         <h1 style={imageArray?.length === 0? {display: "flex"} : {display: "none"}}>Ничего не найдено, попробуйте ввести запрос на английском языке</h1>
         <div className={style.slider} style = {openSliderFlag? {display: "flex", position: "fixed"}: {display: "none"}}>
            <button className={style.slider_btnL} onClick={() => {setIndex(index - 1)}}>
               <img className={style.slider_btnL_picture} src="images/nasaApiBlock/left-arrow.png" alt="" />
            </button>
            <div className={style.slider_window}>
               <div className={style.slider_tape} style = {{transform: `translate3d(-${index * 1200}px, 0px, 0px)`}}>
                  {imageArray?.map((el)=>
                     <div className={style.imageUnitSlider} key = {el.links[0].href}>
                        <img className={style.imageUnitSlider_picture} src={el.links[0].href} alt="" />          
                        <div className={style.description}>{el.data[0].description}</div>
                     </div>
                  )}
               </div>
            </div>
            <button className={style.slider_btnR} onClick={() => {setIndex(index + 1)}}>
               <img className={style.slider_btnR_picture} src="images/nasaApiBlock/left-arrow.png" alt="" />
            </button>
            <button className={style.slider_btnClose} onClick={() => setOpenSliderFlag(false)}>
               <img className={style.slider_btnClose_picture} src="images/nasaApiBlock/close.png" alt="" />
            </button>
         </div>
      </>
   )
}

export default NasaApiBlock