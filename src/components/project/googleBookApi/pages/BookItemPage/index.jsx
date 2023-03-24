import MainHeader from '../../../../layout/HeaderInner'
import Header from "../../components/Header"
import BookItem from "../../components/BookItem"
import Footer from '../../../../layout/Footer'
import style from './index.module.css'

const BookItemPage = () => {
   return(
      <>
         <MainHeader className={style.mainHeader} buttonUpActive={false}/>
         <div className={style.root}>
            <Header/>
            <BookItem/>
         </div>
         <Footer/>
      </>
      
   )
}

export default BookItemPage