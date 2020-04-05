import React from 'react'
import {FormattedMessage} from 'react-intl'

import {
  footerCenterPhoneEmail,
  footerCenterLinksPart
} from '../server'

import {
  FooterCenterWrapper,
  FooterCenterPhoneEmail,
  FooterCenterPhoneEmailItems,
  FooterCenterPhoneEmailItemsImage,
  FooterCenterLinksWrapper,
  FooterCenterLinksPart,
  FooterCenterLinksPartItems,
  FooterCenterLinksPartItemsLink
} from './style'

const FooterOtherSources = () => {
  return (
    <FooterCenterWrapper>
      <FooterCenterPhoneEmail>
        {
          footerCenterPhoneEmail.map(item => {
            return (
              <FooterCenterPhoneEmailItems key={item.id}>
                <FooterCenterPhoneEmailItemsImage src={item.img}/>
                {item.text}
              </FooterCenterPhoneEmailItems>
            )
          })
        }
      </FooterCenterPhoneEmail>
      <FooterCenterLinksWrapper>
        {
          footerCenterLinksPart.map(item => {
            return (
              <FooterCenterLinksPart key={item.id}>
                {
                  item.arr.map(item => {
                    return (
                      <FooterCenterLinksPartItems key={item.id}>
                        <FooterCenterLinksPartItemsLink>
                          <FormattedMessage
                            id={item.id}
                            defaultMessage={item.defaultMessage}
                          />
                        </FooterCenterLinksPartItemsLink>
                      </FooterCenterLinksPartItems>
                    )
                  })
                }
              </FooterCenterLinksPart>
            )
          })
        }
      </FooterCenterLinksWrapper>
    </FooterCenterWrapper>
  )
}

export default FooterOtherSources