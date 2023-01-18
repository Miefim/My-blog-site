import React from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import { setProjectList } from '../../Redux/slices/projectListSlice';

function Project() {
   const projectList = useSelector(state => state.projectList.value)
   const dispatch = useDispatch()

   let [projectWindowWidth, setProjectWindowWidth] = React.useState(0)
   let [widthUnit, setWidthUnit] = React.useState(0)
   let [index, setIndex] = React.useState(0)
   let [transformTape, setTransformTape] = React.useState(0)
   let [stateMouse, setStateMouse] = React.useState(false)
   let [x, setX] = React.useState(0)
   const projectWindowRef = React.useRef()

   const numberUnitsScreen = projectWindowWidth / widthUnit
   const maxIndex = (projectList.length - numberUnitsScreen) / numberUnitsScreen

   React.useEffect(() => {
      fetch(`https://639ef68b7aaf11ceb88f020b.mockapi.io/project-items`)
      .then((response) => {
         return response.json()
      })
      .then((data) => {
         dispatch(setProjectList(data))
      })
   }, [])

   React.useEffect(() => {
      setProjectWindowWidth(projectWindowRef.current.clientWidth)
      setWidthUnit(projectWindowRef.current.children[0].children[0]?.clientWidth)
   })

   const incrementIndex = () => {
      if (index < maxIndex){
         index++
      }
      if (index > maxIndex){
         index = maxIndex
      }
      setIndex(index)
      setTransformTape(transformTape = index * (widthUnit * numberUnitsScreen))
   }

   const decrementIndex = () => {
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
      <section className="project" name="project">
         <div className="button-slider">
            <img className="button-slider-left-image" src="images/left-arrow.png" alt="" onClick={decrementIndex}/>
         </div>
         <div className="container no-margin">
            <div className="resume-title">
               <div className="line-title"></div>
               <div className="title">Мои проекты</div>
               <Link to="project_list">
                  <div className="project-button">Смотреть все проекты</div>
               </Link>
            </div>
            <div className="project-content">
               <div className="button-slider button-screen-small" onClick={decrementIndex}>
                  <img className="button-slider-left-image" src="images/left-arrow.png" alt="" />
               </div>
               <div className="project-window" ref={projectWindowRef}>
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
                     {projectList?.map((project) => 
                        <div className="project-unit" key={project.id}>
                           <div className="project-unit-content">
                              <div className="project-type">{project.type}</div>
                              <Link to={project.href} className="project-image-block">
                                 <img
                                    className="project-image"
                                    src={project.img}
                                    alt=""
                                 />
                              </Link>
                              <div className="project-title">{project.title}</div>
                              <div className="project-description">
                                 {project.subtitle}
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
      </section>
   )}

   export default Project