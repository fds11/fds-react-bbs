import React, { Component } from 'react'

const {Provider, Consumer} = React.createContext()

export default class PageProvider extends Component {
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
      postId: null,
      handleEditPostFormPage: this.handleEditPostFormPage.bind(this),
      handleLoginFormPage: this.handleLoginFormPage.bind(this),
      handleNewPostFormPage: this.handleNewPostFormPage.bind(this),
      handlePostDetailPage: this.handlePostDetailPage.bind(this),
      handlePostListPage: this.handlePostListPage.bind(this),
      handleRegisterPage: this.handleRegisterPage.bind(this),
    }
  }

  handleLoginFormPage() {
    this.setState({
      page: 'login'
    })
  }

  handlePostListPage() {
    this.setState({
      page: 'post-list'
    })
  }

  handleRegisterPage() {
    this.setState({
      page: 'register'
    })
  }

  handlePostDetailPage(postId) {
    this.setState({
      page: 'post-detail',
      postId
    })
  }

  handleNewPostFormPage() {
    this.setState({
      page: 'new-post-form'
    })
  }

  handleEditPostFormPage(postId) {
    this.setState({
      page: 'edit-post-form',
      postId
    })
  }

  render() {
    return (
      <Provider value={this.state}>{this.props.children}</Provider>
    )
  }
}

export {
  PageProvider,
  Consumer as PageConsumer
}