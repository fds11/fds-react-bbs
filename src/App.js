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
          <PageConsumer>{({ pathname, pushState }) => (
            <div className="App">
              {pathname === '/login' ? (
                <LoginForm />
              ) : pathname === '/register' ? (
                <RegisterForm />
              ) : pathname === '/post-list' ? (
                <PostList />
              ) : pathname === '/post-detail' ? (
                <PostDetail />
              ) : pathname === '/new-post' ? (
                <NewPostForm />
              ) : pathname === '/edit-post' ? (
                <EditPostForm />
              ) : pushState('/post-list')}
            </div>
          )}</PageConsumer>
        </UserProvider>
      </PageProvider>
    );
  }
}

export default App;
