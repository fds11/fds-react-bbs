import React, { Component } from 'react'

import Layout from './Layout'
import {UserConsumer} from '../contexts/UserContext'
import withLoading from '../hoc/withLoading';

class PostDetailView extends Component {

  render() {
    const {postId, onEditPostFormPage, userId, title, body} = this.props

    return (
      <React.Fragment>
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
      </React.Fragment>
    )
  }
}

export default withLoading(PostDetailView)