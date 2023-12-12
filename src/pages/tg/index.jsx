import React from 'react'
import TelegramLoginButton from 'telegram-login-button';

const Tg = () => {
   return (
      <div>
         <TelegramLoginButton
            botName="youngwishes_bot"
            dataOnauth={(user) => console.log(user)}
         />
      </div>
   );
}

export default Tg