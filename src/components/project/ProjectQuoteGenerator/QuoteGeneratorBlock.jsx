import React from "react"

import style from "./QuoteGeneratorBlock.module.css"

function QuoteGeneratorBlock () {
   const [quote, setQuote] = React.useState('')

   const getQuote = () => {
      fetch(`https://favqs.com/api/qotd`)
      .then((response) => {
         return response.json()
      })
      .then((data) => {
         setQuote(data.quote)
      })  
   }

   return (
      <div className={style.container}>
         <div className={style.content}>
            <p className={style.quote} style={quote? {display: "flex"} : {display: "none"}}>"{quote.body}"</p>
            <p className={style.author} style={quote? {display: "flex"} : {display: "none"}}>-<i>{quote.author}</i>-</p>
         </div>
         <button className={style.button} onClick={getQuote}>Сгенерировать</button>
      </div>
   )
}

export default QuoteGeneratorBlock