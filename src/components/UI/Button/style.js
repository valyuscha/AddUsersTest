import styled from 'styled-components'
import {colors} from '../../../themes/colors'

const {orange, grey, white, darkgray} = colors

export const PageButton = styled.button`
    width: 290px;
    border-radius: 4px;
    padding: 10px 0;
    text-align: center;
    border: 2px solid;
    box-sizing: border-box;
    outline: none;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    ${p => p.headerSignUp 
        ? `border-color: ${orange}; background-color: ${orange}; color: ${white};` 
        : p.users 
        ? `border-color: ${orange}; background-color: ${white}; color: ${orange}; margin-top: 56px`
        : p.registration 
        ? `border-color: ${orange}; background-color: ${orange}; color: ${white}; margin: 70px auto 0;` 
        : `border-color: ${grey}; background-color: ${grey}; color: ${darkgray}; margin: 70px auto 0; cursor: not-allowed;`};
   
    &:hover {
        opacity: .9;
    }
    
    @media screen and (max-width: 768px) {
      margin-top: 30px;
      ${p => p.headerSignUp
            ? 'margin-top: 0'
            : 'margin-top: 30px'    
        };
    }
`