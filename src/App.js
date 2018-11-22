import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import PostList from './components/PostList'
import PostDetail from './components/PostDetail';
import NewPostForm from './components/NewPostForm';
import EditPostForm from './components/EditPostForm';
import { UserProvider } from './contexts/UserContext';
import { PageProvider } from './contexts/PageContext';

// 로그인 폼에 회원가입 버튼 만들기
// 회원가입 버튼 클릭하면 회원가입 폼 보여주기

class App extends Component {
  render() {
    return (
      <UserProvider onPostListPage={() => this.handlePostListPage()}>
        <div className="App">
          {this.state.page === 'login' ? (
            <LoginForm onRegister={() => this.handleRegisterPage()} />
          ) : this.state.page === 'register' ? (
            <RegisterForm />
          ) : this.state.page === 'post-list' ? (
            <PostList
              onLoginFormPage={() => this.handleLoginFormPage()}
              onPostDetailPage={postId => this.handlePostDetailPage(postId)}
              onNewPostFormPage={() => this.handleNewPostFormPage()}
            />
          ) : this.state.page === 'post-detail' ? (
            <PostDetail postId={this.state.postId} onEditPostFormPage={postId => this.handleEditPostFormPage(postId)} />
          ) : this.state.page === 'new-post-form' ? (
            <NewPostForm onPostDetailPage={postId => this.handlePostDetailPage(postId)} />
          ) : this.state.page === 'edit-post-form' ? (
            <EditPostForm postId={this.state.postId} onPostDetailPage={postId => this.handlePostDetailPage(postId)} />
          ) : null}
        </div>
      </UserProvider>
    );
  }
}

export default App;
