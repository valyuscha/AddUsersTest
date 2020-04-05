import styled from 'styled-components'
import {colors} from '../../../../themes/colors'

const {menuBurgerBlue} = colors

export const BurgerButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 22px;
  width: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  
  &:focus {
    outline: none;
  }
`

export const BurgerButtonLine = styled.div`
  width: 23px;
  height: 2px;
  border: 1px solid ${menuBurgerBlue};
  border-radius: 5px;
  background: ${menuBurgerBlue};
`