import React, { Component } from 'react'

const {Provider, Consumer} = React.createContext()

class PageProvider extends Component {
  constructor(props) {
    super(props)
    // page === 'login' -> 로그인 페이지
    // page === 'register' -> 회원가입 페이지
    // page === 'post-list' -> 게시물 목록 페이지
    // page === 'post-detail' -> 게시물 세부 페이지
    // page === 'new-post-form' -> 새 글 쓰기 페이지
    // page === 'edit-post-form' -> 글 수정 페이지
    this.state = {
      pathname: window.location.pathname,
      params: new URLSearchParams(window.location.search),
      pushState: this.pushState.bind(this)
    }
    this.refreshLocation = this.refreshLocation.bind(this)
  }

  refreshLocation() {
    this.setState({
      pathname: window.location.pathname,
      params: new URLSearchParams(window.location.search)
    })
  }

  componentDidMount() {
    this.refreshLocation()
    window.addEventListener('popstate', this.refreshLocation)
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.refreshLocation)
  }
 
  pushState(url) {
    window.history.pushState('', '', url)
    this.refreshLocation()
  }

  render() {
    return (
      <Provider value={this.state}>{this.props.children}</Provider>
    )
  }
}

function withPage(WrappedComponent) {
  return function WithPage(props) {
    return (
      <Consumer>{value => <WrappedComponent {...value} {...props} />}</Consumer>
    )
  }
}

export {
  PageProvider,
  Consumer as PageConsumer,
  withPage
}