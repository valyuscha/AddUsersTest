import styled from 'styled-components'

export const FooterBottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
  
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

export const FooterBottomTextWrapper = styled.div`
  width: 194px;
`

export const FooterBottomText = styled.p`
  font-size: 12px;
`

export const FooterBottomSocietiesWrapper = styled.div`
  width: 210px;
  display: flex;
  justify-content: space-between;
`

export const FooterBottomSocietiesLinks = styled.a.attrs(() => ({
  href: "#!"
}))`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`

export const FooterBottomSocietiesIcons = styled.img.attrs(() => ({
  alt: "",
}))`
  @media screen and (max-width: 768px) {
    padding-bottom: 20px;
  }
`