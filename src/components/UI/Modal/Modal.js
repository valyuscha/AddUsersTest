import React from 'react'

import {
  ModalWindowWrapper,
  ModalWindow,
  ModalWindowMain,
  ModalWindowMainText,
  ModalWindowBottom,
  ModalWindowBottomButton
} from './style'

const Modal = ({onClick, successMessage, errorMessage, modalEnterFieldsMessage, button}) => {
  return (
    <ModalWindowWrapper onClick={onClick}>
      <ModalWindow>
        <ModalWindowMain>
          <ModalWindowMainText
            successMessage={successMessage}>
            {successMessage ? successMessage : errorMessage}
            {!successMessage && !errorMessage ? modalEnterFieldsMessage : null}
          </ModalWindowMainText>
        </ModalWindowMain>
        <ModalWindowBottom>
          <ModalWindowBottomButton onClick={onClick}>
            {button}
          </ModalWindowBottomButton>
        </ModalWindowBottom>
      </ModalWindow>
    </ModalWindowWrapper>
  )
}

export default Modal