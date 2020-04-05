import React from 'react'
import {Link} from "react-scroll"
import {FormattedMessage} from 'react-intl'

import {Container} from '../../App/style'
import Button from '../../../UI/Button'

import {
  HeaderBottom,
  HeaderBottomNameText,
  HeaderBottomName,
  HeaderBottomText
} from './style'

const HeaderBanner = () => {
  return (
    <HeaderBottom>
      <Container>
        <HeaderBottomNameText>
          <HeaderBottomName>
            <FormattedMessage
              id="test_assignment"
              defaultMessage="Test assignment for Frontend Developer position"
            />
          </HeaderBottomName>
          <HeaderBottomText>
            <FormattedMessage
              id="kindly_remind"
              defaultMessage="We kindly remind you that your test assignment should be submitted as a link to
            github/bitbucket repository. Please be patient, we consider and respond to every application
            that meets minimum requirements. We look forward to your submission. Good
            luck!"
            />
          </HeaderBottomText>
        </HeaderBottomNameText>
        <Link
          to="FormValidation"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <Button
            headerSignUp
            text="sign_up"
          />
        </Link>
      </Container>
    </HeaderBottom>
  )
}

export default HeaderBanner