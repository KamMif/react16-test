import React, { Component } from 'react'
import styled from 'styled-components';

import Icon from './Icon';
import Portal from './Portal';

export default class Modal extends Component {
  render() {

    const { children, on, toggle } = this.props;
    return (
      <Portal>
        {on && (
          <ModalWrapper>
            <ModalCard>
              <CloseButton onClick={toggle}>
                <Icon name="close" color="red"/>
              </CloseButton>
              <div>{ children }</div>
            </ModalCard>
            <Background onClick={toggle}/>
          </ModalWrapper>
        )}
      </Portal>
    )
  }
}


const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = styled.div`
  position: relative;
  background: white;
  border-radius: 5px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  padding: 15px;
  z-index: 10;
  min-width: 320px;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: transparent;
  padding: 10px;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.3;
`;