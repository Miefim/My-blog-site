import { useEffect, useState, Fragment } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useSnackbar } from 'notistack'

import { setList, getUserFetch } from "../../../Redux/saga/projectTestTaskSlice"

import LoaderCircle from "../../UI/LoaderCircle"
import Input from "../../UI/Input"
import Button from "../../UI/Button"
import ModalWin from "../../UI/ModalWin"
import style from "./index.module.css"

const TestTaskReduxSaga = () => {
   const {list, user, isLoading, error} = useSelector(state => state.projectTestTask)

   const dispatch = useDispatch()
   
   const [inputValue, setInputValue] = useState('')
   const [modalAddVisible, setModalAddVisible] = useState(false)
   const [modalDeleteVisible, setModalDeleteVisible] = useState(false)
   const [activeItem, setActiveItem] = useState('')
   const [isFirstRender, setFirstRender]  = useState(true)

   const { enqueueSnackbar, closeSnackbar } = useSnackbar()

   const fetchUser = () => {
      dispatch(getUserFetch())
   }

   useEffect(() => {
      if(user && !isFirstRender){
         enqueueSnackbar(`Id: ${user.data.user.id}, Имя: ${user.data.user.username}, Email: ${user.data.user.email}`, {
            variant: 'success',
            persist: true,
            action: () => (
               <Fragment>
                  <Button className={style.closeButton} onClick={() => closeSnackbar()}>X</Button>
               </Fragment> 
            )
         })
      }
      setFirstRender(false)
   },[user])

   useEffect(() => {
      closeSnackbar() 
      if(error){
         enqueueSnackbar(`Error server`, {
            variant: 'error',
            persist: true,
         })
      }
   },[error])

   const switchModalAddVisible = () => {
      setModalAddVisible(true)
   }

   const setInputChange = (e) => {
      setInputValue(e.target.value)
   }

   const cancel = () => {
      setModalAddVisible(false)
      setModalDeleteVisible(false)
      setInputValue('')
   }

   const add = () => {
      dispatch(setList([...list, inputValue]))
      setInputValue('')
      setModalAddVisible(false)
   }

   const selectItem = (e) => {
      setActiveItem(activeItem === e.target.id ? null : e.target.id)
   }

   const deleteItem = () => {
      dispatch(setList(list.filter(el => el !== list[activeItem])))
      setActiveItem('')
      setModalDeleteVisible(false)
   } 

   const swichModaldelete = () => {
      setModalDeleteVisible(true)
   }

   return(
      <div className={style.root}>
         <div className={style.buttonBlock}>
            <Button 
               className={style.button} 
               onClick={switchModalAddVisible}
            >
               Добавить
            </Button>
            <Button 
               className={style.deleteButton}
               disabled={!activeItem}
               onClick={swichModaldelete}
            >
               Удалить
            </Button>
            <Button 
               className={style.buttonGQL} 
               onClick={fetchUser}
            >
               {error ? error : isLoading ? <LoaderCircle/> : 'Тест GraphQL'}
            </Button>
         </div>
         {list.length === 0 
         ?  <h1 className={style.title}>Записей нет</h1>
         :
         <div className={style.listBlock}>
            {list.map((item, index) => 
               <div 
                  className={activeItem === String(index) ? [style.listUnit, style.active].join(' ') : style.listUnit} 
                  onClick={selectItem}
                  id={index}
                  key={index}
               >
                  {`${index + 1}: ${item}`}
               </div>
            )}
         </div>}  
         <ModalWin 
            visible={modalAddVisible} 
            setVisible={setModalAddVisible} 
            className={style.modalContent}
         >
            <h1 className={style.title}>Добавить запись</h1>
            <Input 
               className={style.input}
               type="text" 
               value={inputValue} 
               onChange={setInputChange} 
            />
            <div className={style.buttonBlock}>
               <Button 
                  className={style.button}
                  disabled={!inputValue}
                  onClick={add}
               >
                  OK
               </Button>
               <Button 
                  className={style.button}
                  onClick={cancel}
               >
                  Отмена
               </Button>
            </div>
         </ModalWin>
         <ModalWin 
            visible={modalDeleteVisible} 
            setVisible={setModalDeleteVisible} 
            className={style.modalContent}
         >
            <h1 className={style.title}>Удалить запись?</h1>
            <div className={style.buttonBlock}>
               <Button 
                  className={style.button}
                  onClick={deleteItem}
               >
                  Да
               </Button>
               <Button 
                  className={style.button}
                  onClick={cancel}
               >
                  Нет
               </Button>
            </div>
         </ModalWin>
      </div>
   )
}

export default TestTaskReduxSaga