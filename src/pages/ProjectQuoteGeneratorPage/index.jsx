import HeaderInner from "../../components/layout/HeaderInner";
import ProjectQuoteGeneratorBlock from "../../components/project/ProjectQuoteGenerator/QuoteGeneratorBlock"
import Footer from "../../components/layout/Footer";
import style from "./index.module.css"

function ProjectQuoteGeneratorPage () {
   return (
      <div className={style.root}>
         <HeaderInner /> 
         <ProjectQuoteGeneratorBlock />
         <Footer />
      </div>
   )
}

export default ProjectQuoteGeneratorPage