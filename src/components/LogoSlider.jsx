import React from "react"

function LogoSlider() {
   let [amountLogo, setAmountLogo] = React.useState(0)
   let [widthWindow, setWidthWindow] = React.useState(0)
   React.useEffect(() => {
      setAmountLogo(amountLogo = document.querySelectorAll(".logo-slider-tape-unit").length)
      setWidthWindow(widthWindow = document.querySelector(".logo-slider-window").clientWidth)
   })

   const numberUnitsScreen = widthWindow / 200
   const maxIndex = amountLogo - numberUnitsScreen

   let [index, setIndex] = React.useState(0)
   let [flag, setFlag] = React.useState(true)

   setTimeout(() => {
      if(flag === true){
         incrementIndex()
      }
      if(flag === false){
         decrementIndex()
      }
   }, 3000)

   const incrementIndex = function () {
      if(index < maxIndex){
         index++
      }
      else if(index === maxIndex){
         setFlag(flag = false)
      }
      setIndex(index)
   }

   const decrementIndex = function () {
      if(index > 0){
         index--
      }
      if(index === 0){
         setFlag(flag = true)
      }
      setIndex(index)
   }
   
   return (
      <section className="logo-slider" onClick={incrementIndex}>
      <div className="logo-slider-window">
         <div className="logo-slider-tape" style={{transform:`translate3d(-${index * 200}px, 0px, 0px)`}}>
            <div className="logo-slider-tape-unit">
               <img className="logo-slider-tape-unit-image" src="images/html-logo.png" alt="" />
            </div>
            <div className="logo-slider-tape-unit">
               <img className="logo-slider-tape-unit-image" src="images/css-logo.png" alt="" />
            </div>
            <div className="logo-slider-tape-unit">
               <img className="logo-slider-tape-unit-image" src="images/nodeJs-logo.png" alt="" />
            </div>
            <div className="logo-slider-tape-unit">
               <img className="logo-slider-tape-unit-image" src="images/js-logo.png" alt="" />
            </div>
            <div className="logo-slider-tape-unit">
               <img className="logo-slider-tape-unit-image" src="images/react-logo.png" alt="" />
            </div>
            <div className="logo-slider-tape-unit">
               <img
                  className="logo-slider-tape-unit-image" src="images/visual-studio-code-logo.png" alt="" />
            </div>
            <div className="logo-slider-tape-unit">
               <img className="logo-slider-tape-unit-image" src="images/chrome-logo.png" alt="" />
            </div>
         </div>
      </div>
   </section>
   )}

   export default LogoSlider