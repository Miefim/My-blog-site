import projectList from '../../../assets/projectList.json'
import style from './index.module.css'

function ProjectListBlock() {
   window.scrollTo(0, 0)
   return (
      <div className={style.root}>
         <div className={style.container}>
         {projectList.map((project) => 
            <div className={style.pojectUnit} key={project.id}>
               <div className={style.imageBlock}>
                  <img className={style.image} src={project.img} alt="" />
                  <div className={style.type}>{project.type}</div>
               </div>
               <div className={style.description}>
                  <h1>{project.title}</h1>
                  <h3>{project.description}</h3>
                  <div className={style.more}>
                     Подробнее
                     <img className={style.arrow} src='images/right-arrow.png' alt="" />
                  </div>
               </div>
            </div>
         )}
         </div>
      </div>
   )}

   export default ProjectListBlock