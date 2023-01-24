import { useState } from "react"
import { getAuth } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import { collection, addDoc, serverTimestamp  } from "firebase/firestore"; 

import TextareaItem from '../../UI/TextareaItem'
import InpuTitleItem from '../../UI/InputTitleItem'
import { database } from "../../../firebase"
import { useFetching } from "../../../hooks/useFetching"
import LoaderCircle from "../../UI/LoaderCircle";
import Button from "../../UI/Button"
import style from "./index.module.css"

function CreateBlog({callback}) {
   const auth = getAuth()
   const [user] = useAuthState(auth)

   const [title, setTitle] = useState('')
   const [item, setItem] = useState('')

   const [addNewPost, isPostLoading, postError] = useFetching(async() => {
      await addDoc(collection(database, "posts"), {
         img: `/images/blogImages/${Math.floor(Math.random() * (6 - 1 + 1)) + 1}.jpg`,
         title,
         text: item,
         date: serverTimestamp(),
       });
      setTitle('')
      setItem('')
      if(callback){
         callback() 
      } 
   })
   
   return(
      <div className={style.root}>
         {user?.uid === process.env.REACT_APP_ADMIN_UID
         ? 
            <>
            <h1 className={style.title}>Add new post</h1>
            <InpuTitleItem 
               placeholder={'Title'} 
               value = {title} 
               onChange = { e => setTitle(e.target.value) }
            />
            <TextareaItem 
               className={style.textarea} 
               placeholder={'Item'} 
               value = {item} 
               onChange = { e => setItem(e.target.value)}
            />
            <Button 
               disabled = {!title && !item} 
               onClick = { addNewPost } 
               className={style.btn}
            >
               {isPostLoading ? <LoaderCircle/> : 'Add post'}
               {postError? "Error" : ''}
            </Button>
            </>
         :
            <h1>Oh, what a cunning you are, this is only for admin</h1>
         }  
      </div>
   )
}

export default CreateBlog