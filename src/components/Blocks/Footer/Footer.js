import React from 'react'

import {Container} from '../App/style'
import FooterPageMenu from './FooterTop'
import FooterOtherSources from './FooterCenter'
import FooterSocieties from './FooterBottom'

import {
  FooterWrapper
} from './style'

const Footer = ({id}) => {
  return (
    <FooterWrapper id={id}>
      <FooterPageMenu/>
      <Container>
        <FooterOtherSources/>
        <FooterSocieties/>
      </Container>
    </FooterWrapper>
  )
}

export default Footer