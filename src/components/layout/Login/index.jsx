import { useState } from "react"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth"
import { setDoc, doc, collection, serverTimestamp, updateDoc } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

import {useFetching} from '../../../hooks/useFetching'
import {database} from '../../../firebase'
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import style from "./index.module.css"

function Login({successAction}) {
   const auth = getAuth()

   const [typeForm, setTypeForm] = useState('login')

   const [login, setLogin] = useState('')
   const [password, setPassword] = useState('')
   const [loginError, setLoginError] = useState('')
   
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [createPassword, setCreatePassword] = useState('')
   const [registerError, setRegisterError] = useState('')

   let users = []

   const [usersCollection] = useCollection(
      collection(database, "users")
   )

   usersCollection?.forEach(el => users.push(el.id))

   const [setUserInDb, isSetUserInDbLoading] = useFetching(async({user, name}) => {  
      await setDoc(doc(database, 'users', user.uid), {
         uid: user.uid,
         displayName: name
            ? name 
            : user.displayName
               ? user.displayName
               : '',
         email: user.email? user.email : '',
         provider: user.providerData[0]?.providerId? user.providerData[0].providerId : '',
         regDate: serverTimestamp()
      });
   })

   const [updateSignInDate] = useFetching(async(user) => {
      await updateDoc(doc(database, "users", user.uid), {
         signInDate: serverTimestamp()
      });
   })

   const signUp = () => {
      setRegisterError('')
      createUserWithEmailAndPassword(auth, email, createPassword)
        .then((userCredential) => {
            const user = userCredential.user;
            setTypeForm('login')
            setUserInDb({user, name})
            setName('')
            setEmail('')
            setCreatePassword('')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setRegisterError(errorMessage)
        }); 
   }

   const checkUser = (user) => {
      let isSignUp = users.filter(el => el === user.uid)
      if(isSignUp.length === 0){
         setUserInDb({user})
      }
   }

   const signInGoogle = async() => {
      const provider = new GoogleAuthProvider()
      const {user} = await signInWithPopup(auth, provider)
      await checkUser(user)
      updateSignInDate(user)
      successAction()
   }

   const signInGitHub = async() => {
      const provider = new GithubAuthProvider()
      const {user} = await signInWithPopup(auth, provider)
      await checkUser(user)
      updateSignInDate(user)
      successAction()
   }

   const signInEmail = () => {
      setLoginError('')
      signInWithEmailAndPassword(auth, login, password)
         .then((userCredential) => {
            const user = userCredential.user
            updateSignInDate(user)
            setLogin('')
            setPassword('')
            successAction()
         })
         .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            setLoginError(errorMessage)
         });
   }

   return (
      <div className = {style.root}>
         <div className = {style.switch_btn_block}>
            <button 
               className = {
                  typeForm === 'signUp'
                  ?  [style.create_account_btn, style.active_switch_btn].join(' ')
                  :  style.create_account_btn
               }
               onClick = {() => setTypeForm('signUp')}
            >
               Регистрация
            </button>
            <button 
               className = {
                  typeForm === 'login'
                  ?  [style.login_btn, style.active_switch_btn].join(' ')
                  :  style.login_btn
               }
               onClick = {() => setTypeForm('login')}
            >
               Войти
            </button>
         </div>
         <div 
            className = {style.login}
            style = {
               typeForm === 'login'
               ?  {display: 'flex'}
               :  {display: 'none'}
            }  
         >
            <h1 className = {style.title}>Войти в аккаунт</h1>
            <div className = {style.auth_line}>
               Авторизоваться с помощью:
               <div className = {style.auth_providers}>
                  <img 
                     className = {style.google_provider} 
                     src="/images/googleIcon.png" 
                     onClick={signInGoogle} 
                  />
                  <img 
                     className = {style.google_provider} 
                     src="/images/githubIcon.png" 
                     onClick={signInGitHub} 
                  />
               </div>
            </div>
            {
               loginError
               ?
                  <div className = {style.alert_error}>
                     <img className = {style.alert_icon} src="/images/warn.png" alt="" />
                     {loginError}
                  </div>
               :
                  ''
            }
            <Input 
               className = {style.input} 
               placeholder = "Почта" 
               value = {login} 
               onChange = {e => setLogin(e.target.value)}
            />
            <Input 
               className = {style.input} 
               type = 'password'
               placeholder = "Пароль"
               value = {password} 
               onChange = {e => setPassword(e.target.value)} 
            />
            <Button 
               className = {style.btn}
               onClick = {signInEmail}
            >
               Вход
            </Button>
            <a className = {style.forgot_password}>Забыли пароль?</a>
         </div>
         <div 
            className = {style.sign_up}
            style = {
               typeForm === 'signUp'
               ?  {display: 'flex'}
               :  {display: 'none'}
            }  
         >
            <h1 className = {style.title}>Регистрация</h1>
            {  registerError
               ?    
                  <div className = {style.alert_error}>
                     <img className = {style.alert_icon} src="/images/warn.png" alt="" />
                     {registerError}
                  </div>
               :
                  ''
            }
            <Input
               className = {style.input}
               placeholder = 'Введите имя'
               value = {name}
               onChange = {e => setName(e.target.value)}
            />
            <Input
               className = {style.input}
               placeholder = 'Введите почту'
               value = {email}
               onChange = {e => setEmail(e.target.value)}
            />
            <Input
               className = {style.input}
               type = 'password'
               placeholder = 'Придумайте пароль'
               value = {createPassword}
               onChange = {e => setCreatePassword(e.target.value)}
            />
            <Button
               className = {style.btn}
               onClick = {signUp}
            >
               Зарегистрироваться
            </Button>
         </div>
      </div>
   );
 }
 
 export default Login;