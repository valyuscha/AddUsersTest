import styled from 'styled-components'
import {colors} from '../../../themes/colors'

const {white, orange, contextgrey, red} = colors

export const ModalWindowWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .6);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`

export const ModalWindow = styled.div`
  width: 700px;
  margin: 5% auto 0;
  background: ${white};
  padding: 30px;
  border-radius: 5px;
  
  @media screen and (max-width: 800px) {
    width: 80%;
  }
  
  @media screen and (max-width: 445px) {
    width: 70%;
    margin-top: 35%; 
  }
`

export const ModalWindowMain = styled.div``

export const ModalWindowMainText = styled.p`
  font-size: 30px;
  color: ${p => p.successMessage ? contextgrey : red};
  
  @media screen and (max-width: 445px) {
    font-size: 26px;
    text-align: center;
  }
`

export const ModalWindowBottom = styled.div`
    text-align: right;
`

export const ModalWindowBottomButton = styled.button`
  background: none;
  border: none;
  color: ${orange};
  font-size: 20px;
  font-weight: bold;
  margin-top: 50px;
  outline: none;
  cursor: pointer;
`
