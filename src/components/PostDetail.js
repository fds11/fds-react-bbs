import React, { Component } from 'react'
import api from '../api';

export default class PostDetail extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      body: '',
      title: ''
    }
  }
  
  async componentDidMount() {
    const {data: {title, body}} = await api.get(`/posts/${this.props.postId}`)
    this.setState({
      title,
      body
    })
  }
  
  render() {
    const {postId, onEditPostFormPage} = this.props
    const {title, body} = this.state

    return (
      <div>
        <h1>게시물</h1>
        <button onClick={() => onEditPostFormPage(postId)}>수정</button>
        <div>{title}</div>
        <div>{body}</div>
      </div>
    )
  }
}
