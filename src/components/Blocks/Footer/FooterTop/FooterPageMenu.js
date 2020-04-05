import React from 'react'
import {Link, animateScroll as scroll} from "react-scroll"
import {FormattedMessage} from 'react-intl'

import {Container} from '../../App/style'
import {footerTopLinks} from '../server'

import {
  FooterTopWrapper,
  FooterTop,
  FooterTopLogoWrapper,
  FooterTopLogo,
  FooterTopMenu,
  FooterTopMenuItems,
  FooterTopMenuItemsLink,
} from './style'

const scrollToTop = () => {
  scroll.scrollToTop()
}

const FooterPageMenu = () => {
  return (
    <FooterTopWrapper>
      <Container>
        <FooterTop>
          <FooterTopLogoWrapper>
            <FooterTopLogo onClick={scrollToTop}/>
          </FooterTopLogoWrapper>
          <FooterTopMenu>
            {
              footerTopLinks.map(item => {
                return (
                  <FooterTopMenuItems key={item.id}>
                    <Link
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <FooterTopMenuItemsLink>
                        <FormattedMessage
                          id={item.name}
                          defaultMessage={item.defaultMessage}
                        />
                      </FooterTopMenuItemsLink>
                    </Link>
                  </FooterTopMenuItems>
                )
              })
            }
          </FooterTopMenu>
        </FooterTop>
      </Container>
    </FooterTopWrapper>
  )
}

export default FooterPageMenu