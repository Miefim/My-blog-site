import { useState } from 'react'
import style from './index.module.css'

const DropDown = ({children, className, selected, setSelected}) => {
   const [isOpen, setIsOpen] = useState(false)

   return(
      <div className={`${style.dropDown} ${className}`} onClick={() => setIsOpen(!isOpen)}>
         <img src="/images/projectImages/googleBooksApi/downArrow.png" className={`${style.dropDown_icon} ${isOpen && style.activeDropDown_ico}`} alt=''/>
         {selected ? selected : children[0]?.props.children}
         <div className={`${style.dropDownList} ${isOpen && style.active}`}>
            {
               children.map((el, i) => 
                  <div className={style.dropDownList_item} key={i} onClick={() => setSelected(el.props.children)}>
                     {el.props.children}
                     {el.props.children === selected && <img src="/images/projectImages/googleBooksApi/ok.png" className={style.item_icon} alt=''/>}
                  </div>
               )
            }
            
         </div>
      </div>
   )
}

export default DropDown