import style from "./index.module.css"
import icon from "./img/icon.png"

function NotFoundBlock() {
   return (
   <>   
      <div className={style.root}>
         <img className={style.icon} src={icon} alt="" />
         <h1 className={style.title}>Похоже, что такой страницы не существует :(</h1>
      </div>
   </> 
   );
 }
 
 export default NotFoundBlock;