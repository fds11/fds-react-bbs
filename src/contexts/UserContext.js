import React, { Component } from 'react'

import api from '../api'
import { withPage } from './PageContext';

const {Provider, Consumer} = React.createContext()

class UserProvider extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      userId: null,
      username: null,
      login: this.login.bind(this),
      logout: this.logout.bind(this),
      registerUser: this.registerUser.bind(this)
    }
  }

  async componentDidMount() {
    if (localStorage.getItem('token')) {
      await this.refreshUser()
    }
  }

  async registerUser(username, password) {
    // 사용자 이름 중복체크
    const {data: users} = await api.get('/users', {
      params: {
        username
      }
    })
    if (users.length > 0) {
      alert('이미 같은 이름이 사용 중입니다.')
      return
    }
    const res = await api.post('/users/register', {
      username,
      password
    })
    localStorage.setItem('token', res.data.token)
    this.refreshUser()
    // 게시글 목록 보여주기
    this.props.pushState('/post-list')
  }
  
  async login(username, password) {
    const res = await api.post('/users/login', {
      username,
      password
    })
    localStorage.setItem('token', res.data.token)
    await this.refreshUser()
    // 게시글 목록 보여주기
    this.props.pushState('/post-list')
  }

  logout() {
    // 로컬 스토리지에서 토큰 제거
    localStorage.removeItem('token')
    // 사용자 정보 캐시 초기화
    this.setState({
      userId: null,
      username: null
    })
    // 로그인 폼 보여주기
    this.props.pushState('/login')
  }

  async refreshUser() {
    const res2 = await api.get('/me')
    this.setState({
      userId: res2.data.id,
      username: res2.data.username
    })
  }

  render() {
    return (
      <Provider value={this.state}>{this.props.children}</Provider>
    )
  }
}

function withUser(WrappedComponent) {
  return function WithUser(props) {
    return (
      <Consumer>{value => <WrappedComponent {...value} {...props} />}</Consumer>
    )
  }
}

UserProvider = withPage(UserProvider)

export {
  UserProvider,
  Consumer as UserConsumer,
  withUser
}