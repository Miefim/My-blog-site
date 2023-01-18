import style from "./index.module.css"

const ModalWin = ({children, visible, setVisible}) => {
   return(
      <div 
         style = {
            visible
            ?  {display: 'flex'}
            :  {display: 'none'}
         } 
         className = {style.root} 
         onClick = {() => setVisible(false)}
      >
         <div className={style.content} onClick = {e => e.stopPropagation()}>
            {children}
         </div>
      </div>
   )
}

export default ModalWin