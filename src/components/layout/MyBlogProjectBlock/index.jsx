import style from './index.module.css'

const MyBlogProjectBlock = () => {
   return(
      <div className={style.root}>
         <div className='line-title' style={{margin: '80px 0 0 0'}}></div>
         <h1 className={style.title}>My Blog</h1>
         <div className={style.content}>
            Самый главный проект на данном этапе, это конечно данный сайт в 
            целом, но в этой статье хочу описать одну из наиболее интересных 
            частей сайта, а именно то как устроен блог. <br/><br/>
            <img className={style.big_picture} src="/images/projectImages/myBlog/1.png" alt="" /> <br />
            Под блоком статьи расположен блок комментариев, но прежде чем оставить 
            комментарий необходимо авторизоваться. <br />
            <img className={style.medium_picture} src="/images/projectImages/myBlog/2.png" alt="" /> <br />
            Нажав на ссылку откроется модальное окно с вариантами авторизации: логина и пароля или при помощи провайдеров
            Google или GitHub. Если у вас нет аккаунта и вариант с провайдером не подходит, то можно зарегистрироваться 
            нажав для этого соответствующую кнопку.
            <div style={{display:'flex'}}>
               <img className={style.small_picture} src="/images/projectImages/myBlog/3.png" alt="" /> 
               <img className={style.small_picture} src="/images/projectImages/myBlog/4.png" alt="" /> 
            </div>
            После успешной авторизации появляется возможность оставить коммент, а вы только посмотрите, админ даже уже успел ответить.
            Также видно, что есть возможность удаления своего комментария, у администратора есть возможность удалять все комментарии. 
            <img className={style.medium_picture} src="/images/projectImages/myBlog/5.png" alt="" /> 
            Если вы администратор, то у вас есть возможность редактировать текущий пост. Для этого переключаете флажок Edit, после чего 
            появляется возможность редактировать поля.
            <img className={style.big_picture} src="/images/projectImages/myBlog/6.png" alt="" /> <br />
            После изменения сожержимого и попытке выхода из режима редактирования вызывается модальное окно с предложением сохранить или 
            отменить изменения. В случае когда изменениния не обнаружены, выход из режима редактирования происходит по нажатию на флажок.
            <img className={style.big_picture} src="/images/projectImages/myBlog/7.png" alt="" /> <br />
            Также у администратора есть личный кабинет, откуда можно добавлять новые посты и управлять комментариями различных пользователей, 
            на изображении снизу мы видим информацию о пользователе и списов всех комментариев, которые он оставлял когда либо под всеми постами
            с возможностью удаления как всех, так и отдельно взятого. 
            <img className={style.big_picture} src="/images/projectImages/myBlog/8.png" alt="" /> <br />
            
         </div>
      </div>
   )
}

export default MyBlogProjectBlock