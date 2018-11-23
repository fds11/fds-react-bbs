import React, { Component } from 'react'
import PostForm from './PostForm'
import api from '../api';
import { withPage } from '../contexts/PageContext';

class EditPostForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      title: '',
      body: ''
    }
  }

  async componentDidMount() {
    const {params} = this.props
    const postId = params.get('postId')
    const {data: {title, body}} = await api.get(`/posts/${postId}`)
    this.setState({
      title,
      body
    })
  }
  
  async handleSubmit(e) {
    e.preventDefault()
    const {params} = this.props
    const postId = params.get('postId')
    const title = e.target.elements.title.value
    const body = e.target.elements.body.value
    await api.patch(`/posts/${postId}`, {
      title,
      body
    })
    this.props.pushState(`/post-detail?postId=${postId}`)
  }

  render() {
    const {title, body} = this.state
    if (!title) {
      return 'loading...'
    }
    return (
      <PostForm onSubmit={e => this.handleSubmit(e)} title={title} body={body} />
    )
  }
}

export default withPage(EditPostForm)