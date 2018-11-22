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
      // 현재 보고 있는 페이지 이름
      page: 'post-list',
      // 현재 보고 있는 게시물의 ID
      currentPostId: null,
      goToEditPostFormPage: this.goToEditPostFormPage.bind(this),
      goToLoginFormPage: this.goToLoginFormPage.bind(this),
      goToNewPostFormPage: this.goToNewPostFormPage.bind(this),
      goToPostDetailPage: this.goToPostDetailPage.bind(this),
      goToPostListPage: this.goToPostListPage.bind(this),
      goToRegisterPage: this.goToRegisterPage.bind(this),
    }
  }

  goToLoginFormPage() {
    this.setState({
      page: 'login'
    })
  }

  goToPostListPage() {
    this.setState({
      page: 'post-list'
    })
  }

  goToRegisterPage() {
    this.setState({
      page: 'register'
    })
  }

  goToPostDetailPage(postId) {
    this.setState({
      page: 'post-detail',
      currentPostId: postId
    })
  }

  goToNewPostFormPage() {
    this.setState({
      page: 'new-post-form'
    })
  }

  goToEditPostFormPage(postId) {
    this.setState({
      page: 'edit-post-form',
      currentPostId: postId
    })
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