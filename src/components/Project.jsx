import { Element } from 'react-scroll'
import React from 'react'

import projectList from '../assets/projectList.json'

function Project() {
   let [projectWindowWidth, setProjectWindowWidth] = React.useState(0)
   let [widthUnit, setWidthUnit] = React.useState(0)

   React.useEffect(() => {
      setProjectWindowWidth(projectWindowWidth = document.querySelector(".project-window").clientWidth)
      setWidthUnit(widthUnit = document.querySelector(".project-unit").clientWidth)
   })

   const numberUnitsScreen = projectWindowWidth / widthUnit
   const maxIndex = (projectList.length - numberUnitsScreen) / numberUnitsScreen
   
   let [index, setIndex] = React.useState(0)
   let [transformTape, setTransformTape] = React.useState(0)
   let [stateMouse, setStateMouse] = React.useState(false)
   let [x, setX] = React.useState(0)
   
   const incrementIndex = function () {
      if (index < maxIndex){
         index++
      }
      if (index > maxIndex){
         index = maxIndex
      }
      setIndex(index)
      setTransformTape(transformTape = index * (widthUnit * numberUnitsScreen))
   }

   const decrementIndex = function () {
      if(index > 0){
         index--
      }
      if (index < 0){
         index = 0
      }
      setIndex(index)
      setTransformTape(transformTape = index * (widthUnit * numberUnitsScreen))
   }

   function start (e){
      let xStart
      e.type === "touchstart"? xStart = e.touches[0].clientX : xStart = e.clientX
      e.currentTarget.style.transition = "0s"
      setStateMouse(stateMouse = true)
      setX(x = xStart)
   }

   function move (e){
      let xMove
      e.type === "touchmove"? xMove = e.touches[0].clientX : xMove = e.clientX
      if (stateMouse){
         setTransformTape(transformTape = -transformTape - xMove)
      }
   }

   function end (e){
      let xEnd
      e.type === "touchend"? xEnd = e.changedTouches[0].clientX : xEnd = e.clientX
      e.currentTarget.style.transition = "0.3s"
      let difOX = x - xEnd
      setStateMouse(stateMouse = false)
      if (difOX > 0){
         incrementIndex()
      }
      else{
         decrementIndex()
      }
   }

   function onMouseLeave (e){
      e.currentTarget.style.transition = "0.3s"
      setStateMouse(stateMouse = false)
      setTransformTape(transformTape = index * (widthUnit * numberUnitsScreen))
   }

   return (
      <Element className="project" name="project">
      <div className="button-slider">
         <img className="button-slider-left-image" src="images/left-arrow.png" alt="" onClick={decrementIndex}/>
      </div>
      <div className="container no-margin">
         <div className="resume-title">
            <div className="line-title"></div>
            <div className="title">Мои проекты</div>
            <div className="project-button">Смотреть все проекты</div>
         </div>
         <div className="project-content">
            <div className="button-slider button-screen-small" onClick={decrementIndex}>
               <img className="button-slider-left-image" src="images/left-arrow.png" alt="" />
            </div>
            <div className="project-window">
               <div className="project-content-tape"
                  style={{transform:`translate3d(-${transformTape}px, 0px, 0px)`}}
                  onMouseDown={start} 
                  onMouseMove={move} 
                  onMouseUp={end}
                  onMouseLeave={onMouseLeave}
                  onTouchStart={start}
                  onTouchMove={move}
                  onTouchEnd={end}
               >
                  {projectList.map((project) => 
                  <div className="project-unit" key={project.id}>
                     <div className="project-unit-content">
                        <div className="project-type">{project.type}</div>
                        <div className="project-image-block">
                           <img
                              className="project-image"
                              src={project.img}
                              alt=""
                           />
                        </div>
                        <div className="project-title">{project.title}</div>
                        <div className="project-description">
                           {project.description}
                        </div>
                     </div>
                  </div>
                  )}   
               </div>
            </div>
            <div className="button-slider button-screen-small">
               <img className="button-slider-right-image" src="images/left-arrow.png" alt="" onClick={incrementIndex} />
            </div>
         </div>
      </div>
      <div className="button-slider">
         <img className="button-slider-right-image" src="images/left-arrow.png" alt="" onClick={incrementIndex} />
      </div>
   </Element>
   )}

   export default Project