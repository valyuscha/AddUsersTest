import styled from "styled-components"
import {colors} from '../../../../themes/colors'
import logoLight from '../../../../assets/imgs/logo-light.png'

const {white, lightblue} = colors

export const FooterTopWrapper = styled.div`
    border-bottom: 1px solid ${lightblue};
`

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  height: 85px;
  align-items: center;
  
  @media screen and (max-width: 768px) {
    height: 260px;
    flex-direction: column;
    justify-content: center;  
    box-sizing: border-box;
    align-items: flex-start;
  }
`

export const FooterTopLogoWrapper = styled.div`
  width: 134px;
  
  @media screen and (max-width: 768px) {
    margin: 0 auto;
    padding: 30px 0 10px;
  }
`

export const FooterTopLogo = styled.img.attrs(() => ({
  src: `${logoLight}`,
  alt: "",
}))`
  width: 100%;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`

export const FooterTopMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 30px;
    margin: 0 auto;
    width: 100%;
  }
`

export const FooterTopMenuItems = styled.li`
  list-style: none;
  margin-right: 20px;
  
  &:last-child {
    margin-right: 0;
  }
  
  @media screen and (max-width: 768px) {
    margin: 0 auto;
    padding-bottom: 10px;
    
    &:last-child {
      padding-bottom: 0;
      margin: 0 auto;
    }
  }
`

export const FooterTopMenuItemsLink = styled.span`
  text-decoration: none;
  color: ${white};
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  &:hover {
    text-decoration: underline;
  }
`