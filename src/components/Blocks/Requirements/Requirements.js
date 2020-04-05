import React from 'react'
import {FormattedMessage} from 'react-intl'
import {Container} from '../App/style'
import {name, text} from './server'
import {
  RequirementsWrapper,
  RequirementsName,
  RequirementsRow,
  RequirementsTextWrapper,
  RequirementsText,
  RequirementsImageWrapper,
  RequirementsImage
} from './style'

const Requirements = ({id}) => {
  return (
    <RequirementsWrapper id={id}>
      <Container>
        <RequirementsName>
          <FormattedMessage
            id={name.id}
            defaultMessage={name.defaultMessage}
          />
        </RequirementsName>
        <RequirementsRow>
          <RequirementsTextWrapper>
            {
              text.map(item => {
                return (
                  <RequirementsText key={item.id}>
                    <FormattedMessage
                      id={item.id}
                      defaultMessage={item.defaultMessage}
                    />
                  </RequirementsText>
                )
              })
            }
          </RequirementsTextWrapper>
          <RequirementsImageWrapper>
            <RequirementsImage/>
          </RequirementsImageWrapper>
        </RequirementsRow>
      </Container>
    </RequirementsWrapper>
  )
}

export default Requirements