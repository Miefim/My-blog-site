import { useState, createContext } from 'react'

import Head from '../../components/layout/HeaderInner'
import Footer from '../../components/layout/Footer'
import Header from '../../components/project/notes/Components/Header'
import List from '../../components/project/notes/Components/List'
import Textarea from '../../components/project/notes/Components/Textarea'
import GridList from '../../components/project/notes/Components/GridList'
import style from'./index.module.css'

export const MyContext = createContext()

function ProjectNotesPage() {
  window.scrollTo(0, 0)

  const [type, setType] = useState(0)
  const [triggerGetLocalStorage, setTriggerGetLocalStorage] = useState(false)
  const [selectedItem, setSelectedItem] = useState(0)
  const [filterItems, setFilterItems] = useState(null)

  return (
    <div className={style.root}>
      <Head className={style.head}/>
      <div className={style.notes}>
        <MyContext.Provider value={{type, setType, triggerGetLocalStorage, setTriggerGetLocalStorage, selectedItem, setSelectedItem, setFilterItems, filterItems}}>
          <Header className={style.header}/>
          <div style={type === 1 || type === 2 ? {width: '100%'} : {}} className={`${style.content} ${type === 3 && style.collapseList}`}>
            <List className={type === 0 || type === 3 ? style.active : ''}/>
            <Textarea className={type === 1 ? style.noActive : type === 2 ? style.textareaBig : ''}/>
            <GridList className={type === 1 && style.active}/>
          </div>
        </MyContext.Provider>
      </div>
      <Footer className={style.footer}/>
    </div>
  )
}

export default ProjectNotesPage
