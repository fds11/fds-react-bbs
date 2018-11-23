import React from 'react'
import {UserConsumer, withUser} from '../contexts/UserContext'
import { withPage } from '../contexts/PageContext';

class LoginForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault()
    const username = e.target.elements.username.value
    const password = e.target.elements.password.value
    this.props.login(username, password)
  }

  render() {
    const {pushState} = this.props
    return (
      <React.Fragment>
        <form onSubmit={e => this.handleSubmit(e)}>
          <h1>로그인</h1>
          <input type="text" name="username" />
          <input type="password" name="password" />

          <button>로그인</button>
        </form>
        <button onClick={() => pushState('/register')}>회원 가입</button>
      </React.Fragment>
    )
  }
}

export default withPage(withUser(LoginForm))