import axios from "axios"
import React from "react"

function Register(props: any) {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [passwordCheck, setPasswordCheck] = React.useState("")

  const config = {
    headers: { Authorization: `Bearer tokentokentoken` },
  }

  const Registration = () => {
    const obj = {
      email: email,
      password: password,
    }
    if (password === passwordCheck) {
      axios.post("url", obj, config).then((res) => console.log(res))
      console.log(obj)
    }
  }
  return (
    <div className="LoginMainIntro">
      <div className="FrameLoginFormFrame">
        <div>
          <div className="LoginMainText">
            <h1>Создать презентацию</h1>
          </div>
          <div className="LoginMainForm">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="LoginMainFormInput"
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Пароль"
              className="LoginMainFormInput"
            />
            <input
              type="password"
              onChange={(e) => setPasswordCheck(e.target.value)}
              placeholder="Пароль"
              className="LoginMainFormInput"
            />
            <button className="LoginMainFormButton" onClick={() => Registration()}>
              Регистрация
            </button>
            <div className="LoginMainFormHelp">
              <span className="LoginMainFormNoacc">Есть аккаунт? </span>
              <span className="LoginMainFormNoaccTwo" onClick={() => props.setLoginForm(false)}>
                Войти
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
