import style from './index.module.css'

const Loader = ({className}) => {
   return(
      <img className={`${style.loader} ${className}`} src="/images/projectImages/googleBooksApi/loading.png" alt="" />
   )
}

export default Loader