import { useParams } from "react-router-dom"
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { doc, updateDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { useState, useEffect } from "react";

import ModalWin from "../../UI/ModalWin";
import Button from "../../UI/Button";
import TextareaItem from "../../UI/TextareaItem";
import InputTitleItem from "../../UI/InputTitleItem";
import LoaderCircle from "../../UI/LoaderCircle";
import { database } from "../../../firebase";
import Comments from "../../UI/Comments"
import style from "./index.module.css"

function BlogUnit() {
   // window.scrollTo(0, 0)
   const params = useParams()
   const [user] = useAuthState(getAuth())

   const [blogUnit, isLoadingBlogUnit, blogUnitError] = useDocumentData(
      doc(database, "posts", `${params.id}`)
   )
  
   const originalTitle = blogUnit?.title
   const originalItem = blogUnit?.text

   const [visible, setVisible] = useState(false)
   const [editState, setEditState] = useState(false)
   const [title, setTitle] = useState('')
   const [item, setItem] = useState('')

   useEffect(() => {
      if(user?.uid === process.env.REACT_APP_ADMIN_UID){
         setTitle(blogUnit?.title)
         setItem(blogUnit?.text)
      }
   },[user, blogUnit])

   const swichEditState = () => {
      if(title === originalTitle && item === originalItem){
         setEditState(!editState)
      }
      else{
         setVisible(true)
      }
   }

   const saveChanges = async() => {
      await updateDoc(doc(database, "posts", params.id), {
         text: item,
         title: title
      });
      setVisible(false)
      setEditState(false)
   }
  
   const cancelChanges = () => {
      setTitle(originalTitle)
      setItem(originalItem)
      setVisible(false)
      setEditState(false)
   }
   
   return (
      <div className={style.root}>
         {blogUnitError && <h1>Server Error :(</h1> }
         {isLoadingBlogUnit
         ?  <LoaderCircle className={style.loader}/> 
         :
            <> 
               {user?.uid === process.env.REACT_APP_ADMIN_UID && 
               <div className={style.swicher} onClick={swichEditState}>
                  Edit
                  <div className={editState? [style.rail, style.rail_active].join(' ') : style.rail}>
                     <div className={editState? [style.train, style.train_active].join(' ') : style.train}>
                        {editState? 'I' : 'O'}
                     </div>
                  </div>
               </div>
               }
               <div className={style.blog_banner} style={{background: `url("${blogUnit.img}") no-repeat fixed bottom`, backgroundSize: 'cover'}}></div> 
               {!editState
               ? 
                  <div className={style.item_block}>
                     <h1 className={style.title}>{blogUnit?.title}</h1>
                     <p className={style.text}>{blogUnit?.text}</p>
                  </div>
               :  <div className={style.edit_block}>
                     <InputTitleItem value={title} onChange={e => setTitle(e.target.value)}/>
                     <TextareaItem value={item} onChange={e => setItem(e.target.value)}/>
                     <div className={style.edit_block_buttons}>
                        <Button className={style.save_btn} onClick={saveChanges} disabled={title === originalTitle && item === originalItem}>Save</Button>
                        <Button onClick={cancelChanges}>Cancel</Button>
                     </div>
                  </div>
               }
               <Comments url = {`posts/${params.id}/comments`}/>
               <ModalWin visible={visible} setVisible={setVisible}>
                  {user?.uid === process.env.REACT_APP_ADMIN_UID && <div className={style.modal_block}>
                     Want to save changes?
                     <div className={style.edit_block_buttons}>
                        <Button className={style.save_btn} onClick={saveChanges}>Save</Button>
                        <Button onClick={cancelChanges}>Cancel</Button>
                     </div>
                  </div>}
               </ModalWin>
            </>
         }  
      </div>
   )
}

export default BlogUnit