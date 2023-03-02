import "./styles.css"
import HeaderMiddle from "~/components/HeaderMiddle/HeaderMiddle"
import Header from "~/components/Header/Header"
import Login from "~/components/Login/Login"
import React from "react"
import Register from "~/components/Register/Register"

const SelectEditor = () => {
  const [loginForm, setLoginForm] = React.useState(false)

  return (
    <div>
      <HeaderMiddle />
      <Header />
      {!loginForm ? <Login setLoginForm={setLoginForm} /> : <Register setLoginForm={setLoginForm} />}
    </div>
  )
}

export default SelectEditor
