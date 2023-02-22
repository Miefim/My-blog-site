import style from './index.module.css'

const CompareBtn = ({className}) => {
   return(
      <div className={style.root}>
         <div className={[style.component1, className].join(' ')}></div>
         <div className={[style.component2, className].join(' ')}></div>
         <div className={[style.component3, className].join(' ')}></div>
      </div>
   )
}

export default CompareBtn