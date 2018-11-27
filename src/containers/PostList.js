import React, { Component } from 'react';
import api from '../api';
import Layout from '../components/Layout';
import { UserConsumer } from '../contexts/UserContext';
import classNames from 'classnames';

import '../components/PostList.scss';
import PostListView from '../components/PostListView';

export default class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const res = await api.get('/posts');
    this.setState({
      posts: res.data,
      loading: false,
    });
  }

  render() {
    const { onPostDetailPage, onNewPostFormPage } = this.props;
    return (
      <PostListView
        posts={this.state.posts}
        loading={this.state.loading}
        onPostDetailPage={onPostDetailPage}
        onNewPostFormPage={onNewPostFormPage}
      />
    );
  }
}
