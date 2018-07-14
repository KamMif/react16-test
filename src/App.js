import React, { Component, Fragment } from 'react';

import Toggle from './Toggle/ToggleRenderPropsChilderen';
import Portal from './Portal';
import Modal from './Portal/Modal';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Toggle>
          {({ on, toggle }) => (
            <Fragment>
              <button onClick={toggle}>Ligin</button>
              <Modal on={on} toggle={toggle}>
                <h1>Steel In Modal</h1>
              </Modal>
            </Fragment>
          )}
        </Toggle>
      </div>
    );
  }
}

export default App;
