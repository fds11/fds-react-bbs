import React, { Component } from 'react'

export default class Layout extends Component {
  render() {
    return (
      <div>
        <div className="header">헤더</div>
        <h1 className="title">{this.props.title}</h1>
        {this.props.children}
        <div className="foooter">푸터</div>
      </div>
    )
  }
}
