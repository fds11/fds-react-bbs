import React, { Component } from 'react';
import './App.css';

import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import PostList from './components/PostList'
import PostDetail from './components/PostDetail';
import NewPostForm from './components/NewPostForm';
import EditPostForm from './components/EditPostForm';
import { UserProvider } from './contexts/UserContext';
import { PageProvider, PageConsumer } from './contexts/PageContext';

class App extends Component {
  render() {
    return (
      <PageProvider>
        <UserProvider>
          <PageConsumer>{({ page }) => (
            <div className="App">
              {page === 'login' ? (
                <LoginForm />
              ) : page === 'register' ? (
                <RegisterForm />
              ) : page === 'post-list' ? (
                <PostList />
              ) : page === 'post-detail' ? (
                <PostDetail />
              ) : page === 'new-post-form' ? (
                <NewPostForm />
              ) : page === 'edit-post-form' ? (
                <EditPostForm />
              ) : null}
            </div>
          )}</PageConsumer>
        </UserProvider>
      </PageProvider>
    );
  }
}

export default App;
