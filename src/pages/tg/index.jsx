import React from 'react'
import TelegramLoginButton from 'telegram-login-button';

const Tg = () => {
   return (
      <div>
         <TelegramLoginButton
            botName="happyoungwishes_bot"
            dataOnauth={(user) => console.log(user)}
         />
      </div>
   );
}

export default Tg