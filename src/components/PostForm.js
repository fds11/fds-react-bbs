import React, { Component } from 'react'
import classNames from 'classnames'

import s from './PostForm.module.scss'

// defaultValue에 다른 값을 또 넣어주지 않도록 주의
export default class PostForm extends Component {
  static defaultProps = {
    // true가 주어지면, 편집 모드 스타일이 적용됨
    editing: false
  }
  render() {
    const {editing} = this.props
    const titleClass = classNames(s.titleInput, {
      [s.editing]: editing
    })
    return (
      <div>
        <form onSubmit={e => this.props.onSubmit(e)}>
          <input className={titleClass} type="text" name="title" defaultValue={this.props.title} />
          <textarea name="body" cols="30" rows="10" defaultValue={this.props.body}></textarea>
          <button>전송</button>
        </form>
      </div>
    )
  }
}
