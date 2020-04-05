import styled from 'styled-components'
import {colors} from '../../../../themes/colors'
import logo from '../../../../assets/imgs/logo.png'
import enImg from '../../../../assets/imgs/icons/en.jpg'
import ruImg from '../../../../assets/imgs/icons/ru.jpg'
import uaImg from '../../../../assets/imgs/icons/ua.jpg'

const {white, black, lightgrey, orange, blue} = colors

export const HeaderTop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background: ${white};
    color: ${black};
    width: 100%;
    z-index: 9999;
`

export const HeaderTopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 65px;
`

export const LogoWrapper = styled.div`
    width: 170px;
`

export const Logo = styled.img.attrs(() => ({
  src: `${logo}`,
  alt: "",
}))`
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`

export const HeaderList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%; 
  
  @media screen and (max-width: 1165px) {
    width: 100%;
  }
  
  @media screen and (max-width: 1023px) {
    display: none;
  }
`

export const List = styled.ul`
    display: flex;
    padding-left: 0; 
    justify-content: space-between;
`

export const ListItem = styled.li`
    font-size: 16px;
    list-style: none;
    margin-right: 15px;
    
    &:last-child {
      margin-right: 0;
    }
    
    @media screen and (max-width: 1175px) {
      margin-right: 9px;
    }
`
export const ListItemLink = styled.span`
  color: ${black};
  text-decoration: none;
  transition: all .3s;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  &:hover {
    color: ${orange}
  }
`

export const Authorisation = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const UserName = styled.p`
    margin: 0;
    text-align: right;
    font-size: 14px;
`

export const UserEmail = styled.span`
    font-size: 12px;
    color: ${lightgrey}
`

export const UserImageWrapper = styled.div`
    width: 40px;
    text-align: center;
    margin-left: 10px;
`

export const UserImage = styled.img.attrs(() => ({
  alt: "",
}))`
    width: 100%;
    border-radius: 50%;
`

export const LanguageWrapper = styled.div`
  text-align: right;
  margin-left: 20px;  
  border: 1px solid white;
  border-radius: 10px;    
  background: url(${
  p => p.selectedLanguage === 'EN'
    ? enImg
    : p.selectedLanguage === 'RU'
      ? ruImg
      : p.selectedLanguage === 'UA'
        ? uaImg
        : enImg
  }) no-repeat 50% 50%/cover;   
`

export const LanguageSelect = styled.select`
  appearance: none;
  outline: none;
  padding: 5px;
  color: ${white};
  font-weight: 800;
  font-size: 18px;
  border: 5px solid ${blue};
  border-radius: 7px;
  background: rgba(0, 0, 0, .3);
  
  &:after {
    color: ${white};
  }
`

export const LanguageOption = styled.option`
  background: aqua;
  border: 1px solid ${white};
  border-radius: 10px;
  color: ${black};
`

export const DrawerToggleButtonWrapper = styled.div`
  @media screen and (min-width: 1024px) {
    display: none;
  }
`