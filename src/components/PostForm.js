import React, { Component } from 'react'
import classNames from 'classnames'
import {Form} from 'semantic-ui-react'

import s from './PostForm.module.scss'

// defaultValue에 다른 값을 또 넣어주지 않도록 주의
export default class PostForm extends Component {
  static defaultProps = {
    // true가 주어지면, 편집 모드 스타일이 적용됨
    editing: false,
    // 폼 전송 시 호출되는 함수, title과 body를 인수로 받음
    onSubmit: () => {}
  }
  render() {
    const {editing} = this.props
    const titleClass = classNames(s.titleInput, {
      [s.editing]: editing
    })
    return (
      <div>
        <Form onSubmit={e => {
          e.preventDefault()
          const title = e.target.elements.title.value
          const body = e.target.elements.body.value
          this.props.onSubmit(title, body)
          }}>
          <Form.Input className={titleClass} type="text" name="title" defaultValue={this.props.title} />
          <Form.TextArea name="body" cols="30" rows="10" defaultValue={this.props.body}></Form.TextArea>
          <button>전송</button>
        </Form>
      </div>
    )
  }
}
