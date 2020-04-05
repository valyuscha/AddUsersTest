import styled from 'styled-components'
import {colors} from '../../../../themes/colors'

const {white} = colors

export const FooterCenterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0 37px;
`

export const FooterCenterPhoneEmail = styled.ul`
  width: 258px;
  
  @media screen and (max-width: 900px) {
    width: 200px;
  }
  
  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
`

export const FooterCenterPhoneEmailItems = styled.li`
  list-style: none;
  font-size: 20px;
  display: flex;
  align-items: center;
  padding-bottom: 30px;
  &:last-child {
    padding-bottom: 0;
  }
  
  @media screen and (max-width: 900px) {
    font-size: 18px;
  }
  
  @media screen and (max-width: 768px) {
    justify-content: center;
    padding-bottom: 17px;
  }
`

export const FooterCenterPhoneEmailItemsImage = styled.img.attrs(() => ({
  alt: "",
}))`
  padding-right: 10px;
  
   @media screen and (max-width: 768px) {
    display: none;
  }
`

export const FooterCenterLinksWrapper = styled.div`
  width: 540px;
  display: flex;
  justify-content: space-between;
  
  @media screen and (max-width: 900px) {
    width: 430px;
  }
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const FooterCenterLinksPart = styled.ul`
  text-align: right;
`

export const FooterCenterLinksPartItems = styled.li`
  list-style: none;
  padding-bottom: 20px;
  &:last-child {
    padding-bottom: 0;
  }
`

export const FooterCenterLinksPartItemsLink = styled.a.attrs(() => ({
  href: '#!'
}))`
 color: ${white};
 text-decoration: none;
 -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
 &:hover {
  text-decoration: underline;
 }
`