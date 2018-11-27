import React, { Component } from 'react';
import api from '../api';
import PostForm from './PostForm';

export default class NewPostForm extends Component {
  async handleSubmit(title, body) {
    const res = await api.post('/posts', {
      title,
      body,
    });
    this.props.onPostDetailPage(res.data.id);
  }

  render() {
    return (
      <PostForm onSubmit={(title, body) => this.handleSubmit(title, body)} />
    );
  }
}
