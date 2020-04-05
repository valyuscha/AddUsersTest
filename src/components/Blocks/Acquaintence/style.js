import styled from 'styled-components'
import {colors} from '../../../themes/colors'
import manMobile from '../../../assets/imgs/man-mobile.svg'

const {contextgrey, orange} = colors

export const AcquaintenceName = styled.h2`
  font-size: 42px;
  text-align: center;
  margin-top: 140px;
  
  @media screen and (max-width: 768px) {
    margin-top: 70px;
  }
  
  @media screen and (max-width: 445px) {
    font-size: 26px;
  }
`

export const AcquaintenceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0 130px;
  
  @media screen and (max-width: 768px) {
    margin-bottom: 70px;
  }
  
  @media screen and (max-width: 705px) {
    flex-direction: column;
  }
`

export const AcquaintenceImageWrapper = styled.div`
  width: 289px;
  
  @media screen and (max-width: 850px) {
    width: 219px;
  }
  
  @media screen and (max-width: 705px) {
    margin-bottom: 20px;
  }
`

export const AcquaintenceImage = styled.img.attrs(() => ({
  src: `${manMobile}`,
  alt: "",
}))`
  width: 100%;
`

export const AcquaintenceTextWrapper = styled.div`
  width: 612px;
  
  @media screen and (max-width: 1000px) {
    width: 500px;
  }
  
  @media screen and (max-width: 900px) {
    width: 456px;
  }
  
  @media screen and (max-width: 705px) {
    text-align: center;
    width: 100%;
  }
`

export const AcquaintenceTextName = styled.h3`
  font-size: 26px;
  margin-bottom: 5px;
  
  @media screen and (max-width: 705px) {
    padding-bottom: 10px;
  }
  
  @media screen and (max-width: 445px) {
    font-size: 22px;
  }
`

export const AcquaintenceText = styled.p`
  color: ${contextgrey};
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 30px;
`

export const AcquaintenceTextLink = styled.span`
  text-decoration: none;
  color: ${orange};
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
  &:hover{
    text-decoration: underline;
  }
`