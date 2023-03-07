import { Link } from "react-router-dom";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { useMemo } from "react";

import LoaderCircle from '../../UI/LoaderCircle';
import LoaderBlogList from '../../UI/skeleton/LoaderBlogList'
import { database } from "../../../firebase";
import style from './index.module.css'

function ProjectListBlock() {
   window.scrollTo(0, 0)

   const windowWidth = window.innerWidth

   const [projectCollection, isLoadCollection] = useCollection(
      collection(database, 'projects')
   )

   const projects = useMemo(() => {
      let projects = []
      projectCollection?.forEach(project => {
         projects.push({
            id: project.id,
            data: project.data()
         })
      })
      return projects
   },[projectCollection])

   projects.sort((a, b) => a.data.importance > b.data.importance ? 1 : -1)

   return (
      <div className={style.root}>
         <div className={style.container}>
            {isLoadCollection
            ?  windowWidth > 1250? [... new Array(5)].map((_, index) => <LoaderBlogList key={index}/>) : <LoaderCircle style={{height: '100px', width: '100px'}}/>
            :
            projects?.map((project) => 
               <div className={style.pojectUnit} key={project.id}>
                  <Link to = {project.data.href} className={style.imageBlock}>
                     <img className={style.image} src={project.data.img} alt="" />
                     <div className={style.type}>{project.data.type}</div>
                  </Link>
                  <div className={style.description}>
                     <h1>{project.data.title}</h1>
                     <h3>{project.data.description}</h3>
                     <Link to = {project.data.href} className={style.more}>
                        More
                        <img className={style.arrow} src='images/right-arrow.png' alt="" />
                     </Link>
                  </div>
               </div>
            )}
         </div>
      </div>
   )}

   export default ProjectListBlock