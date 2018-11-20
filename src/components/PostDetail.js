import React, { Component } from 'react'

export default class PostDetail extends Component {
  render() {
    const {postId} = this.props
    return (
      <div>
        <h1>게시물</h1>
        {postId}
      </div>
    )
  }
}
