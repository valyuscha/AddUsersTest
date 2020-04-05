import React from 'react'
import {FormattedMessage} from 'react-intl'

import {Container} from '../App/style'
import {name, developmentRelations} from './server'

import {
  IAmDeveloperName,
  IAmDeveloperRow,
  DevelopmentRelationWrapper,
  DevelopmentRelationImageWrapper,
  DevelopmentRelationImage,
  DevelopmentRelationContext,
  DevelopmentRelationName,
  DevelopmentRelationText
} from './style'

const IAmDeveloper = ({id}) => {
  return (
    <Container id={id}>
      <IAmDeveloperName>
        <FormattedMessage
          id={name.id}
          defaultMessage={name.defaultMessage}
        />
      </IAmDeveloperName>
      <IAmDeveloperRow>
        {
          developmentRelations.map(item => {
            return (
              <DevelopmentRelationWrapper key={item.id}>
                <DevelopmentRelationImageWrapper>
                  <DevelopmentRelationImage
                    src={item.img}
                  />
                </DevelopmentRelationImageWrapper>
                <DevelopmentRelationContext>
                  <DevelopmentRelationName>
                    <FormattedMessage
                      id={item.nameId}
                      defaultMessage={item.nameDefaultMessage}
                    />
                  </DevelopmentRelationName>
                  <DevelopmentRelationText>
                    <FormattedMessage
                      id={item.textId}
                      defaultMessage={item.textDefaultMessage}
                    />
                  </DevelopmentRelationText>
                </DevelopmentRelationContext>
              </DevelopmentRelationWrapper>
            )
          })
        }
      </IAmDeveloperRow>
    </Container>
  )
}

export default IAmDeveloper