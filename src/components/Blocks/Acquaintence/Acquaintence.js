import React from 'react'
import {FormattedMessage} from 'react-intl'
import {Link} from "react-scroll"

import {Container} from '../App/style'
import {content} from './server'

import {
  AcquaintenceName,
  AcquaintenceRow,
  AcquaintenceImageWrapper,
  AcquaintenceImage,
  AcquaintenceTextWrapper,
  AcquaintenceTextName,
  AcquaintenceText,
  AcquaintenceTextLink
} from './style'

const Acquaintence = ({id}) => {
  const {acquainted, developer, slow_experience, improve} = content

  return (
    <Container id={id}>
      <AcquaintenceName>
        <FormattedMessage
          id={acquainted.id}
          defaultMessage={acquainted.defaultMessage}
        />
      </AcquaintenceName>
      <AcquaintenceRow>
        <AcquaintenceImageWrapper>
          <AcquaintenceImage/>
        </AcquaintenceImageWrapper>
        <AcquaintenceTextWrapper>
          <AcquaintenceTextName>
            <FormattedMessage
              id={developer.id}
              defaultMessage={developer.defaultMessage}
            />
          </AcquaintenceTextName>
          <AcquaintenceText>
            <FormattedMessage
              id={slow_experience.id}
              defaultMessage={slow_experience.defaultMessage}
            />
          </AcquaintenceText>
          <AcquaintenceText>
            <FormattedMessage
              id={improve.id}
              defaultMessage={improve.defaultMessage}
            />
          </AcquaintenceText>
          <Link
            to="FormValidation"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <AcquaintenceTextLink>
              <FormattedMessage
                id="sign_up"
                defaultMessage="Sign Up"
              />
            </AcquaintenceTextLink>
          </Link>
        </AcquaintenceTextWrapper>
      </AcquaintenceRow>
    </Container>
  )
}

export default Acquaintence