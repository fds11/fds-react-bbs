import React, { Component } from 'react'
import api from '../api';
import Layout from './Layout'
import { withPage } from '../contexts/PageContext';

class PostList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      posts: [],
      loading: false
    }
  }
  
  async componentDidMount() {
    const res = await api.get('/posts')
    this.setState({
      posts: res.data
    })
  }

  render() {
    const {posts} = this.state
    const {pushState} = this.props
    return (
      <Layout title="게시물 목록">
        <button onClick={() => pushState('/new-post')}>새 글 쓰기</button>
        <h1>게시물 목록</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id} onClick={() => pushState(`/post-detail?postId=${post.id}`)}>{post.title}</li>
          ))}
        </ul>
      </Layout>
    )
  }
}

export default withPage(PostList)