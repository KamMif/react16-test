import React, { Component } from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react'

export default class Toggle extends Component {
  state = {
    on: false,
  };

  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }

  render() {
    return (
      <div>
        {this.state.on && this.props.children}
        <button onClick={this.toggle}>Show/Hide</button>
      </div>
    )
  }
}
