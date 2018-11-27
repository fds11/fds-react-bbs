import React, { Component } from 'react';
import Layout from '../components/Layout';
import PostList from '../containers/PostList';

export default class PostListPage extends Component {
  render() {
    const { onPostDetailPage, onNewPostFormPage, onLoginFormPage } = this.props;
    return (
      <Layout title="게시물 목록" onLoginFormPage={onLoginFormPage}>
        <PostList
          onPostDetailPage={onPostDetailPage}
          onNewPostFormPage={onNewPostFormPage}
        />
      </Layout>
    );
  }
}
