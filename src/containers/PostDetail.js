import React, { Component } from 'react'

import PostDetailView from '../components/PostDetailView'
import api from '../api';

export default class PostDetail extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      body: '',
      title: '',
      userId: null
    }
  }
  
  async componentDidMount() {
    const {data: {title, body, userId}} = await api.get(`/posts/${this.props.postId}`)
    this.setState({
      title,
      body,
      userId
    })
  }
  
  render() {
    const {onEditPostFormPage, postId} = this.props
    const {userId, title, body} = this.state
    return (
      <PostDetailView
        userId={userId}
        onEditPostFormPage={onEditPostFormPage}
        postId={postId}
        title={title}
        body={body}
      />
    )
  }
}
