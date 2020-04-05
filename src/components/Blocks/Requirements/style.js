import styled from 'styled-components'
import {colors} from '../../../themes/colors'
import requirementBackground from '../../../assets/imgs/bg-2.jpg'
import manLaptopV1 from '../../../assets/imgs/man-laptop-v1.svg'
import manLaptopV2 from '../../../assets/imgs/man-laptop-v2.svg'

const {white} = colors

export const RequirementsWrapper = styled.div`
  background: url(${requirementBackground}) no-repeat 50% 50%/cover;
  color: ${white};
`

export const RequirementsName = styled.h2`
  font-size: 42px;
  padding: 140px 0 50px;
  text-align: center;
  
  @media screen and (max-width: 768px) {
    padding: 70px 0 30px;
  }
  
  @media screen and (max-width: 705px) {
    margin: 0 auto;
  }
  
  @media screen and (max-width: 445px) {
    font-size: 26px;
    width: 254px;
  } 
`

export const RequirementsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 160px;
  
  @media screen and (max-width: 900px) {
    align-items: flex-start;
    padding-bottom: 70px;
  }
  
  @media screen and (max-width: 705px) {
    flex-direction: column-reverse;
  }
`

export const RequirementsTextWrapper = styled.div`
  width: 449px;
  
  @media screen and (max-width: 800px) {
    width: 363px;
  }
  
  @media screen and (max-width: 705px) {
    width: 100%;
    text-align: center;
    margin: 0 auto;
  } 
`

export const RequirementsText = styled.p`
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 30px;
  &:last-child {
    margin-bottom: 0;
  } 
`

export const RequirementsImageWrapper = styled.div`
  width: 429px;
  
  @media screen and (max-width: 900px) {
    height: 407px;
    background: url(${manLaptopV2}) no-repeat 50% 50%;
  }
  
  @media screen and (max-width: 705px) {
    background: none;
    width: 257px;
    height: 216px;
    margin: 0 auto 30px;
  } 
`

export const RequirementsImage = styled.img.attrs(() => ({
  src: `${manLaptopV1}`,
  alt: ""
}))`
  width: 100%;
  
  @media screen and (max-width: 900px) {
    opacity: 0;
  } 
  
  @media screen and (max-width: 705px) {
    opacity: 1;
  } 
`