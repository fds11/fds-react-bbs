import React, { Component } from 'react';
import classNames from 'classnames';

export default class PostListView extends Component {
  render() {
    const {
      posts,
      onPostDetailPage,
      onNewPostFormPage,
      onLoginFormPage,
      loading,
    } = this.props;
    const titleClass = classNames('PostList__title', {
      'PostList__title--loading': loading,
    });
    return (
      <React.Fragment>
        <div className="PostList">
          <button onClick={() => onNewPostFormPage()}>새 글 쓰기</button>
          <h1 className={titleClass}>게시물 목록</h1>
          <ul className="PostList__list">
            {posts.map(post => (
              <li
                className="PostList__item"
                key={post.id}
                onClick={() => onPostDetailPage(post.id)}
              >
                {post.title}
              </li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
