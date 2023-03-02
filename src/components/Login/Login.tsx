import useDesignEditorContext from "~/hooks/useDesignEditorContext"

function Login(props: any) {
  const { setEditorType } = useDesignEditorContext()
  return (
    <div className="LoginMainIntro">
      <div className="FrameLoginFormFrame">
        <div>
          <div className="LoginMainText">
            <h1>Создать презентацию</h1>
          </div>
          <div className="LoginMainForm">
            <input type="email" placeholder="Email" className="LoginMainFormInput" />
            <input type="password" placeholder="Пароль" className="LoginMainFormInput" />
            {/* в логин onClick={() => setEditorType("PRESENTATION")} */}
            <button className="LoginMainFormButton">Войти</button>
            <div className="LoginMainFormHelp">
              <span className="LoginMainFormNoacc">Нет аккаунта? </span>
              <span className="LoginMainFormNoaccTwo" onClick={() => props.setLoginForm(true)}>
                Регистрация
              </span>
            </div>
            <div>
              <span className="LoginMainRestore">Восстановить пароль</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
