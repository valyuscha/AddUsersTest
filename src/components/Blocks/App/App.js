import React from 'react'
import {connect} from 'react-redux'
import {IntlProvider} from 'react-intl'
import en from '../../../I18N/locales/en'
import ru from '../../../I18N/locales/ru'
import ua from '../../../I18N/locales/ua'

import {AppFont} from './style'

import Header from '../Header'
import Acquaintence from '../Acquaintence'
import IAmDeveloper from '../IAmDeveloper'
import Requirements from '../Requirements'
import ShowUsers from '../ShowUsers/ShowUsers'
import RegisterUsers from '../Register/RegisterUsers'
import Footer from '../Footer'

const local = navigator.language
let lang

const App = (props) => {
  if (props.selectedLanguage === 'EN') {
    lang = en
  } else if (props.selectedLanguage === 'RU') {
    lang = ru
  } else if (props.selectedLanguage === 'UA') {
    lang = ua
  } else {
    lang = en
  }

  return (
    <IntlProvider locale={local} messages={lang}>
      <AppFont>
        <Header/>
        <Acquaintence id="Acquaintence"/>
        <IAmDeveloper id="IAmDeveloper"/>
        <Requirements id="Requirements"/>
        <ShowUsers id="ShowUsers"/>
        <RegisterUsers id="FormValidation"/>
        <Footer id="Footer"/>
      </AppFont>
    </IntlProvider>
  )
}

const mapStateToProps = state => {
  return {
    selectedLanguage: state.headerMenu.selectedLanguage
  }
}

export default connect(mapStateToProps)(App)