import React, { Component } from 'react'

import {UserConsumer} from '../contexts/UserContext'

export default class Layout extends Component {
  render() {
    const {onLoginFormPage} = this.props
    return (
      <div>
        <div className="header">
          헤더
          <UserConsumer>
            {({username, logout}) => <React.Fragment>
              <div>{username}</div>
              {username ? (
                <button onClick={logout}>로그아웃</button>
              ) : (
                <button onClick={onLoginFormPage}>로그인</button>
              )}
            </React.Fragment>}
          </UserConsumer>
        </div>
        <h1 className="title">{this.props.title}</h1>
        {this.props.children}
        <div className="foooter">푸터</div>
      </div>
    )
  }
}
