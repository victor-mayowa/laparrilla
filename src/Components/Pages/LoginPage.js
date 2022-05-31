import React from 'react'
import KeyBoard from '../Login/KeyBoard'
import LoginBody from '../Login/LoginBody'
import LoginNavbar from '../Login/LoginNavbar'

const LoginPage = () => {
  return (
    <div>
      <LoginNavbar/>
        <LoginBody/>
        <KeyBoard/>
    </div>
  )
}

export default LoginPage