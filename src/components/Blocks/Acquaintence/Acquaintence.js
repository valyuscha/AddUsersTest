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
  return (
    <Container id={id}>
      <AcquaintenceName>
        <FormattedMessage
          id={content.acquainted.id}
          defaultMessage={content.acquainted.defaultMessage}
        />
      </AcquaintenceName>
      <AcquaintenceRow>
        <AcquaintenceImageWrapper>
          <AcquaintenceImage/>
        </AcquaintenceImageWrapper>
        <AcquaintenceTextWrapper>
          <AcquaintenceTextName>
            <FormattedMessage
              id={content.developer.id}
              defaultMessage={content.developer.defaultMessage}
            />
          </AcquaintenceTextName>
          <AcquaintenceText>
            <FormattedMessage
              id={content.slow_experience.id}
              defaultMessage={content.slow_experience.defaultMessage}
            />
          </AcquaintenceText>
          <AcquaintenceText>
            <FormattedMessage
              id={content.improve.id}
              defaultMessage={content.improve.defaultMessage}
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