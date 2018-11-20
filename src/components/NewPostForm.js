import React, { Component } from 'react'
import api from '../api';
import PostForm from './PostForm'

export default class NewPostForm extends Component {
  async handleSubmit(e) {
    e.preventDefault()
    const title = e.target.elements.title.value
    const body = e.target.elements.body.value
    const res = await api.post('/posts', {
      title,
      body
    })
    this.props.onPostDetailPage(res.data.id)
  }
  
  render() {
    return (
      <PostForm onSubmit={e => this.handleSubmit(e)} />
    )
  }
}
