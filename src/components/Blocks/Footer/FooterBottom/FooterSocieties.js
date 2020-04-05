import React from 'react'

import {
  footerBottomSocieties
} from '../server'

import {
  FooterBottomWrapper,
  FooterBottomTextWrapper,
  FooterBottomText,
  FooterBottomSocietiesWrapper,
  FooterBottomSocietiesLinks,
  FooterBottomSocietiesIcons
} from './style'

const FooterSocieties = () => {
  return (
    <FooterBottomWrapper>
      <FooterBottomTextWrapper>
        <FooterBottomText>
          © abz.agency specially for the test task
        </FooterBottomText>
      </FooterBottomTextWrapper>
      <FooterBottomSocietiesWrapper>
        {
          footerBottomSocieties.map(item => {
            return (
              <FooterBottomSocietiesLinks key={item.id}>
                <FooterBottomSocietiesIcons
                  src={item.name}
                />
              </FooterBottomSocietiesLinks>
            )
          })
        }
      </FooterBottomSocietiesWrapper>
    </FooterBottomWrapper>
  )
}

export default FooterSocieties