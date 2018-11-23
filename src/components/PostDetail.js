import React, { Component } from 'react'
import api from '../api';

import Layout from './Layout'
import {UserConsumer, withUser} from '../contexts/UserContext'
import { withPage } from '../contexts/PageContext';

class PostDetail extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      body: '',
      title: '',
      userId: null
    }
  }
  
  async componentDidMount() {
    const {params} = this.props
    const postId = params.get('postId')
    const {data: {title, body, userId}} = await api.get(`/posts/${postId}`)
    this.setState({
      title,
      body,
      userId
    })
  }
  
  render() {
    const {pushState, userId, params} = this.props
    const {userId: authorId, title, body} = this.state
    const postId = params.get('postId')

    return (
      <Layout title="게시물 내용">
        <h1>게시물</h1>
        {userId === authorId && <button onClick={() => pushState(`/edit-post?postId=${postId}`)}>수정</button>}
        <div>{title}</div>
        <div>{body}</div>
      </Layout>
    )
  }
}

export default withUser(withPage(PostDetail))