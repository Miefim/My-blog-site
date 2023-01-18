import HeaderInner from "../../components/layout/HeaderInner";
import NasaApiBlock from "../../components/project/projectNasaApi/NasaApiBlock"
import Footer from "../../components/layout/Footer";
import style from "./index.module.css"

function ProjectNasaApiPage() {
   return (
   <div className={style.root}>  
      <HeaderInner /> 
      <NasaApiBlock />
      <Footer />
   </div> 
   );
 }
 
 export default ProjectNasaApiPage;