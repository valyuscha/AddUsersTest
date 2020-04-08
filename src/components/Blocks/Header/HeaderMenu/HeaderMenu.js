import React, {Component} from 'react'
import {Link, animateScroll as scroll} from "react-scroll"
import {connect} from 'react-redux'
import {getToken} from '../../../../redux/actions/registerActions'
import {
  closeLanguagesList,
  getHeaderUser,
  getSelectedLanguage,
  showLanguagesList
} from '../../../../redux/actions/headerMenuActions'
import {FormattedMessage} from 'react-intl'

import {Container} from '../../App/style'
import {headerLinks, languages} from '../server'
import DrawerToggleButton from '../SideDrawer/DrowerToggleButton'

import {
  HeaderTop,
  HeaderTopContainer,
  LogoWrapper,
  Logo,
  HeaderList,
  List,
  ListItem,
  ListItemLink,
  Authorisation,
  UserName,
  UserEmail,
  UserImageWrapper,
  UserImage,
  LanguageWrapper,
  SelectedLanguageWrapper,
  LanguageButtonsList,
  LanguageButtonsWrapper,
  LanguageButtons,
  SelectedLanguage,
  LanguageLayout,
  DrawerToggleButtonWrapper
} from './style'

class HeaderMenu extends Component {
  componentDidMount() {
    this.props.axiosUser()
    this.props.getToken()
  }

  scrollToTop = () => {
    scroll.scrollToTop()
  }

  render() {
    const {user, selectedLanguage, isSelected, getSelectedLanguage, closeLanguagesList, drawerToggleClickHandler, showLanguagesList} = this.props

    return (
      <HeaderTop>
        <Container>
          <HeaderTopContainer>
            <LogoWrapper>
              <Logo onClick={this.scrollToTop}/>
            </LogoWrapper>
            <HeaderList>
              <List>
                {
                  headerLinks.map(item => {
                    return (
                      <ListItem key={item.id}>
                        <Link
                          to={item.link}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          <ListItemLink>
                            <FormattedMessage
                              id={item.name}
                              defaultMessage={item.defaultMessage}
                            />
                          </ListItemLink>
                        </Link>
                      </ListItem>
                    )
                  })
                }
              </List>
              <Authorisation>
                <div>
                  <UserName>{user.name}</UserName>
                  <UserEmail>{user.email}</UserEmail>
                </div>
                <UserImageWrapper>
                  <UserImage src={user.photo}/>
                </UserImageWrapper>
                <LanguageWrapper>
                  <SelectedLanguageWrapper
                    lang={selectedLanguage}
                    onClick={showLanguagesList}
                  >
                    <SelectedLanguage>
                      {selectedLanguage}
                    </SelectedLanguage>
                  </SelectedLanguageWrapper>
                  { isSelected &&
                  <>
                    <LanguageButtonsList>
                      {
                        languages.map(item => {
                          return (
                            <LanguageButtonsWrapper
                              key={item.id}
                              name={item.name}
                              onClick={() => getSelectedLanguage(item.name)}
                            >
                              <LanguageButtons>
                                {item.name}
                              </LanguageButtons>
                            </LanguageButtonsWrapper>
                          )
                        })
                      }
                    </LanguageButtonsList>
                    <LanguageLayout onClick={closeLanguagesList} />
                  </>
                  }
                </LanguageWrapper>
              </Authorisation>
            </HeaderList>
            <DrawerToggleButtonWrapper>
              <DrawerToggleButton onClick={drawerToggleClickHandler}/>
            </DrawerToggleButtonWrapper>
          </HeaderTopContainer>
        </Container>
      </HeaderTop>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.headerMenu.user,
    selectedLanguage: state.headerMenu.selectedLanguage,
    isSelected: state.headerMenu.isSelected
  }
}

const mapDispatchToProps = dispatch => {
  return {
    axiosUser: () => dispatch(getHeaderUser()),
    getSelectedLanguage: (event) => dispatch(getSelectedLanguage(event)),
    getToken: () => dispatch(getToken()),
    showLanguagesList: () => dispatch(showLanguagesList()),
    closeLanguagesList: () => dispatch(closeLanguagesList())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu)