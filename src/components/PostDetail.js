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
    const {currentPostId} = this.props
    const {data: {title, body, userId}} = await api.get(`/posts/${currentPostId}`)
    this.setState({
      title,
      body,
      userId
    })
  }
  
  render() {
    const {goToEditPostFormPage, userId} = this.props
    const {userId: authorId, title, body} = this.state

    return (
      <Layout title="게시물 내용">
        <h1>게시물</h1>
        {userId === authorId && <button onClick={() => goToEditPostFormPage(this.props.currentPostId)}>수정</button>}
        <div>{title}</div>
        <div>{body}</div>
      </Layout>
    )
  }
}

export default withUser(withPage(PostDetail))