import React, { Component } from 'react'

const {Provider, Consumer} = React.createContext()

class PageProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pathname: window.location.pathname,
      params: new URLSearchParams(window.location.search),
      pushState: this.pushState.bind(this)
    }
    this.refreshLocation = this.refreshLocation.bind(this)
  }

  refreshLocation() {
    this.setState({
      pathname: window.location.pathname,
      params: new URLSearchParams(window.location.search)
    })
  }

  componentDidMount() {
    window.addEventListener('popstate', this.refreshLocation)
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.refreshLocation)
  }
 
  pushState(url) {
    window.history.pushState('', '', url)
    this.refreshLocation()
  }

  render() {
    return (
      <Provider value={this.state}>{this.props.children}</Provider>
    )
  }
}

function withPage(WrappedComponent) {
  return function WithPage(props) {
    return (
      <Consumer>{value => <WrappedComponent {...value} {...props} />}</Consumer>
    )
  }
}

export {
  PageProvider,
  Consumer as PageConsumer,
  withPage
}