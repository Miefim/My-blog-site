import HeaderInner from "../../components/layout/HeaderInner"
import Footer from "../../components/layout/Footer"
import AdminAccountBlock from "../../components/layout/AdminAccountBlock"

import style from './index.module.css'

const AdminAccountPage = () => {
   return(
      <div className={style.root}>
         <HeaderInner />
         <AdminAccountBlock />
         <Footer className={style.footer} />
      </div>
   )
}

export default AdminAccountPage