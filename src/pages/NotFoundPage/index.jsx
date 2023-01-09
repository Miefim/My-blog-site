import HeaderInner from "../../components/layout/HeaderInner";
import NotFoundBlock from "../../components/layout/NotFound";
import Footer from "../../components/layout/Footer";
import style from"./index.module.css"

function NotFoundPage() {
   return (
      <div className={style.root}>
         <HeaderInner />
         <NotFoundBlock />
         <Footer />
      </div>
   );
 }
 
 export default NotFoundPage;