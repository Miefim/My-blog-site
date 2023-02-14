import { SnackbarProvider } from 'notistack';

import HeaderInner from "../../components/layout/HeaderInner"
import TestTaskReduxSaga from "../../components/project/TestTaskReduxSaga"
import Footer from "../../components/layout/Footer"
import style from "./index.module.css"

const ProjectTestTaskReduxSagaPage = () => {
   return(
      <div className={style.root}>
         <SnackbarProvider preventDuplicate>
            <HeaderInner/>
            <TestTaskReduxSaga/>
            <Footer className={style.footer}/>
         </SnackbarProvider>  
      </div>
   )
}

export default ProjectTestTaskReduxSagaPage