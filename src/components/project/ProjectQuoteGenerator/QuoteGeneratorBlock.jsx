import React from "react"

import style from "./QuoteGeneratorBlock.module.css"

function QuoteGeneratorBlock () {
   const [quote, setQuote] = React.useState('')

   const getQuote = () => {
      fetch(`https://api.quotable.io/random`)
      .then((response) => {
         return response.json()
      })
      .then((data) => {
         setQuote(data)
      })  
   }

   return (
      <div className={style.container}>
         <div className={style.content}>
            <p className={style.quote} style={quote? {display: "flex"} : {display: "none"}}>"{quote.content}"</p>
            <p className={style.author} style={quote? {display: "flex"} : {display: "none"}}>-<i>{quote.author}</i>-</p>
         </div>
         <button className={style.button} onClick={getQuote}>Generate</button>
      </div>
   )
}

export default QuoteGeneratorBlock