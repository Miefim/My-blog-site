import MainHeader from '../../../../layout/HeaderInner'
import Header from "../../components/Header"
import BooksList from "../../components/BooksList"
import Footer from '../../../../layout/Footer'
import style from './index.module.css'

const MainPage = () => {
   return(
      <>
         <MainHeader buttonUpActive={false}/>
         <div className={style.root}>
            <Header/>       
            <BooksList/>
         </div>
         <Footer/>
      </>
   )
}

export default MainPage 