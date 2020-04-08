import styled from 'styled-components'
import {colors} from '../../../../themes/colors'
import enImg from '../../../../assets/imgs/icons/en.jpg'
import ruImg from '../../../../assets/imgs/icons/ru.jpg'
import uaImg from '../../../../assets/imgs/icons/ua.jpg'

const {responsiveMenuBorder, black, darkgray, white, blue} = colors

export const SideDrawerWrapper = styled.div`
  height: 100%;
  width: 250px;
  box-sizing: border-box;
  background: ${white};
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 2px 0 5px rgba(0, 0, 0, .7);
  z-index: 10000;
  transition: transform .3s ease-in-out;
  transform: ${p => p.show ? 'translateX(0)' : 'translateX(-105%)'};
`

export const UserLanguageWrapper = styled.div`
  padding: 30px 15px 24px;
  border-bottom: 1px solid ${responsiveMenuBorder};
  display: flex;
  justify-content: space-between;
`

export const UserWrapper = styled.div`
  
`

export const UserImageWrapper = styled.div`
  width: 67px;
  height: 67px;
`

export const UserImage = styled.img.attrs(() => ({
    alt: ''
}))`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`

export const UserData = styled.div`
  padding-top: 20px;
`

export const UserName = styled.h3`
  font-size: 20px;
  padding-bottom: 5px;
`

export const UserEmail = styled.p`
  font-size: 13px;
  color: ${darkgray};
`

export const Menu = styled.ul`
  padding-top: 20px;
`

export const ListItem = styled.li`
  list-style: none;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); 
  
  &:active {
    background: rgba(0, 0, 0, .2);  
  }
`

export const ListItemLink = styled.span`
  font-size: 16px;
  color: ${black};
  display: block;
  padding: 15px 0 15px 15px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`

export const LanguageWrapper = styled.div`
  width: 48px;
  height: 45px;
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

export const SelectedLanguageWrapper = styled.div`
  margin-bottom: 3px;
  width: 48px;
  height: 45px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  border: 5px solid ${blue};
  border-radius: 7px;
  background: rgba(0, 0, 0, .3);
  cursor: pointer; 
  position: relative; 
  z-index: 2;
  background: url(${
  p => p.lang === 'EN'
    ? enImg
    : p.lang === 'RU'
      ? ruImg
      : p.lang === 'UA'
        ? uaImg
        : enImg
  }) no-repeat 50% 50%/cover;
`

export const SelectedLanguage = styled.button`
  width: 48px;
  height: 38px;
  border: none;
  background: rgba(0, 0, 0, .3);
  outline: none;
  color: ${white};
  font-weight: 800;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`

export const LanguageLayout = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`

export const LanguageButtonsList = styled.div`
  width: 48px;
  box-sizing: border-box;
  border: 5px solid ${blue};
  border-radius: 5px;
  position: relative; 
  z-index: 2;
`

export const LanguageButtonsWrapper = styled.div`
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  cursor: pointer; 
`

export const LanguageButtons = styled.button`
  width: 38px;
  height: 38px;
  margin: 0 auto;
  background: aqua;
  outline: none;
  color: ${black};
  border: none;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  
  &:hover {
    background: ${blue};
    color: ${white};
  }
`