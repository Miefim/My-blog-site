import { useState } from 'react'
import style from './index.module.css'

const DropDown = ({children, className, listStyle}) => {
   const [visible, setVisible] = useState(false)
   const [selected, setSelected] = useState(children[0]?.props.children)

   const selectMaterial = (e) => {
      setSelected(e.currentTarget.innerText)
   }

   return(
      <div className={[style.dropDown, className].join(' ')} onClick={() => {setVisible(!visible)}}>
         {selected}
         <img 
            className={visible? [style.dropDownIcon, style.activeIcon].join(' ') : style.dropDownIcon} 
            src="\images\projectImages\goldStore\arrowDown.svg" alt="" 
         />
         {visible && 
         <div className={[style.dropDownList, listStyle].join(' ')}>
            {[...children].map((el, i) => 
            <p className={style.dropDownChildren} onClick={selectMaterial} key={i}>
               {el.props.children}
               {
                  el.props.children === selected && 
                  <svg className={style.dropDownSvg} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M4.29998 7.9L0.56665 4.16667L1.28332 3.45L4.29998 6.46667L10.7 0.0666656L11.4167 0.783333L4.29998 7.9Z" fill="black"/>
                  </svg>
               }
            </p>
            )}
         </div>}
      </div>
   )
}

export default DropDown