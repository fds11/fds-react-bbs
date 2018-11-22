import React, { Component } from 'react'

import { withPage } from '../contexts/PageContext';
import { withUser } from '../contexts/UserContext';

class Layout extends Component {
  render() {
    const {title, username, goToLoginFormPage, logout, children} = this.props
    return (
      <div>
        <div className="header">
          헤더
          <div>{username}</div>
          {username ? (
            <button onClick={logout}>로그아웃</button>
          ) : (
            <button onClick={goToLoginFormPage}>로그인</button>
          )}
        </div>
        <h1 className="title">{title}</h1>
        {children}
        <div className="foooter">푸터</div>
      </div>
    )
  }
}

export default withPage(withUser(Layout))