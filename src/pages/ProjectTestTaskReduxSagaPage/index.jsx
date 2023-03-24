import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';

import { storeSaga } from '../../Redux/saga/store';
import HeaderInner from "../../components/layout/HeaderInner"
import TestTaskReduxSaga from "../../components/project/TestTaskReduxSaga"
import Footer from "../../components/layout/Footer"
import style from "./index.module.css"

const ProjectTestTaskReduxSagaPage = () => {
   return(
      <Provider store={storeSaga}>
         <div className={style.root}>
            <SnackbarProvider preventDuplicate>
               <HeaderInner/>
               <TestTaskReduxSaga/>
               <Footer className={style.footer}/>
            </SnackbarProvider>  
         </div>
      </Provider>
   )
}

export default ProjectTestTaskReduxSagaPage