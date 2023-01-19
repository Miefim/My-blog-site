import style from "./index.module.css"
import icon from "./img/icon.png"

function NotFoundBlock() {
   return (
   <>   
      <div className={style.root}>
         <img className={style.icon} src={icon} alt="" />
         <h1 className={style.title}>It looks like this page doesn't exist :(</h1>
      </div>
   </> 
   );
 }
 
 export default NotFoundBlock;