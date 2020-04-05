import styled from 'styled-components'
import {colors} from '../../../../themes/colors'
import headerBackground from '../../../../assets/imgs/bg-1.jpg'

const {white} = colors

export const HeaderBottom = styled.div`
    margin-top: 65px;
    padding: 140px 0 160px;
    background: url(${headerBackground}) no-repeat 50% 50%/cover;
    color: ${white};
    
    @media screen and (max-width: 768px) {
      padding: 70px 0;
    }
     
    @media screen and (max-width: 705px) {
      text-align: center;
    }
`

export const HeaderBottomNameText = styled.div`
    width: 445px;
    
     
    @media screen and (max-width: 705px) {
      margin: 0 auto;
      width: 100%;
    }
`

export const HeaderBottomName = styled.h1`
    font-size: 50px;
    margin-bottom: 30px;
     
    @media screen and (max-width: 705px) {
      font-size: 42px;
    }
    
    @media screen and (max-width: 705px) {
      font-size: 30px;
      width: 267px;
      margin: 0 auto 20px;
    }
`

export const HeaderBottomText = styled.p`
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 45px;
    
    @media screen and (max-width: 445px) {
      font-size: 16px;
      line-height: 22px;
      margin-bottom: 40px;
    }
`