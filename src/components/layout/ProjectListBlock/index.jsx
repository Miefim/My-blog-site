import { Link } from "react-router-dom";

import projectList from '../../../assets/projectList.json'
import style from './index.module.css'

function ProjectListBlock() {
   window.scrollTo(0, 0)
   return (
      <div className={style.root}>
         <div className={style.container}>
         {projectList.map((project) => 
            <div className={style.pojectUnit} key={project.id}>
               <Link to = {project.href} className={style.imageBlock}>
                  <img className={style.image} src={project.img} alt="" />
                  <div className={style.type}>{project.type}</div>
               </Link>
               <div className={style.description}>
                  <h1>{project.title}</h1>
                  <h3>{project.description}</h3>
                  <Link to = {project.href} className={style.more}>
                     Подробнее
                     <img className={style.arrow} src='images/right-arrow.png' alt="" />
                  </Link>
               </div>
            </div>
         )}
         </div>
      </div>
   )}

   export default ProjectListBlock