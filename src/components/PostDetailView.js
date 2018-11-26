import React, { Component } from 'react'

import Layout from './Layout'
import {UserConsumer} from '../contexts/UserContext'

export default class PostDetailView extends Component {

  render() {
    const {postId, onEditPostFormPage, userId, title, body} = this.props

    return (
      <Layout title="게시물 내용">
        <h1>게시물</h1>
        <UserConsumer>
          {({id}) => {
            if (userId === id) {
              return <button onClick={() => onEditPostFormPage(postId)}>수정</button>
            }
          }}
        </UserConsumer>
        <div>{title}</div>
        <div>{body}</div>
      </Layout>
    )
  }
}
