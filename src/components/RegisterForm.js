import React, { Component } from 'react'

import api from '../api'
import { withPage } from '../contexts/PageContext';
import { withUser } from '../contexts/UserContext';

class RegisterForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      // 현재 입력 필드에 입력된 사용자 이름/암호
      username: '',
      password: '',
      confirmPassword: ''
    }
  }
  
  handleSubmit(e) {
    e.preventDefault()
    const {username, password, confirmPassword} = this.state
    if (password !== confirmPassword) {
      alert('패스워드가 같지 않습니다. 다시 입력해주세요.')
      return
    }
    this.props.registerUser(username, password)
  }

  handleFieldChange(e, name) {
    // name 변수에 저장되어 있는 문자열을
    // 그대로 속성 이름으로 사용하기
    this.setState({
      [name]: e.target.value
    })
  }

  render() {
    const {username, password, confirmPassword} = this.state
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
          <h1>회원 가입</h1>
          <input type="text" value={username} onChange={e => this.handleFieldChange(e, 'username')} />
          <input type="password" value={password} onChange={e => this.handleFieldChange(e, 'password')} />
          <input type="password" value={confirmPassword} onChange={e => this.handleFieldChange(e, 'confirmPassword')} />
          <button>가입</button>
      </form>
    )
  }
}

export default withUser(withPage(RegisterForm))