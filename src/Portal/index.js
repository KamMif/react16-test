import { Component } from 'react';
import ReactDOM from 'react-dom';

const poratlRoot = document.getElementById('portal');

export default class Portal extends Component {
  constructor() {
    super();
    this.el = document.createElement('div');
  }

  componentDidMount = () => {
    poratlRoot.appendChild(this.el);
  }

  componentWillUnmount = () => {
    poratlRoot.removeChild(this.el);
  }


  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.el);
  }
}