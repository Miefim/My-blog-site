import { useState } from "react"
import { getAuth } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import { collection, addDoc, serverTimestamp  } from "firebase/firestore"; 

import { database } from "../../../firebase"
import { useFetching } from "../../../hooks/useFetching"
import LoaderCircle from "../../UI/LoaderCircle";
import Input from "../../UI/Input"
import Textarea from "../../UI/Textarea"
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
            <h1 className={style.title}>Добавление поста</h1>
            <Input 
               placeholder={'Название статьи'} 
               value = {title} 
               onChange = { e => setTitle(e.target.value) }
            />
            <Textarea 
               className={style.textarea} 
               placeholder={'Статья'} 
               value = {item} 
               onChange = { e => setItem(e.target.value) }
            />
            <Button 
               disabled = {!title && !item} 
               onClick = { addNewPost } 
               className={style.btn}
            >
               {isPostLoading ? <LoaderCircle/> : 'Создать пост'}
               {postError? "Ошибка" : ''}
            </Button>
            </>
         :
            <h1>Ах ты хитруша какая, это только для одмена</h1>
         }  
      </div>
   )
}

export default CreateBlog