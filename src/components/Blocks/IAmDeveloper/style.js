import styled from 'styled-components'
import {colors} from '../../../themes/colors'

const {contextgrey} = colors

export const IAmDeveloperName = styled.h2`
  font-size: 42px;
  width: 527px;
  text-align: center;
  margin: 0 auto 51px;
  
  @media screen and (max-width: 590px) {
    width: 100%;
  }
  
  @media screen and (max-width: 445px) {
    font-size: 26px;
    width: 270px;
  }
`

export const IAmDeveloperRow = styled.div`
  display: flex;
  justify-content: space-between;
  
  @media screen and (max-width: 950px) {
    flex-direction: column;
  }
`

export const DevelopmentRelationWrapper = styled.div`
  @media screen and (max-width: 950px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 50px;
    
    &:last-child {
      margin-bottom: 122px;
    }
  }
  
  @media screen and (max-width: 445px) {
    flex-direction: column;
    margin-bottom: 30px;
    
    &:last-child {
      margin-bottom: 70px;
    }
  }
`

export const DevelopmentRelationImageWrapper = styled.div`
  width: 100px;
  
  @media screen and (max-width: 445px) {
    margin: 0 auto;
    width: 88px;
  }
`

export const DevelopmentRelationImage = styled.img.attrs(() => ({
  alt: ""
}))`
  width: 100%;
`

export const DevelopmentRelationContext = styled.div`
  @media screen and (max-width: 950px) {
    margin-left: 36px;
  }
  
  @media screen and (max-width: 660px) {
    width: 60%;
  }
  
  @media screen and (max-width: 445px) {
    margin: 5px auto 0;
    width: 80%;
  }
`

export const DevelopmentRelationName = styled.h3`
  font-size: 26px;
  margin: 28px 0 15px;
  
  @media screen and (max-width: 950px) {
    margin: 0;
  }
  
  @media screen and (max-width: 445px) {
    font-size: 22px;
    text-align: center;
  }
`

export const DevelopmentRelationText = styled.p`
  color: ${contextgrey};
  font-size: 16px;
  line-height: 22px;
  width: 278px;
  margin-bottom: 140px;
  
  @media screen and (max-width: 950px) {
    width: 460px;
    margin-bottom: 0;
  }
  
  @media screen and (max-width: 660px) {
    width: 100%;
  }
  
  @media screen and (max-width: 445px) {
    text-align: center;
  }
`