import React, {Component} from 'react'
import {Link, animateScroll as scroll} from "react-scroll"
import {connect} from 'react-redux'
import {getToken} from '../../../../redux/actions/registerActions'
import {getHeaderUser, getSelectedLanguage} from '../../../../redux/actions/headerMenuActions'
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
  LanguageSelect,
  LanguageOption,
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
    const {user} = this.props

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
                <LanguageWrapper selectedLanguage={this.props.selectedLanguage}>
                  <LanguageSelect
                    onClick={e => this.props.getSelectedLanguage(e)}
                  >
                    {
                      languages.map(item => {
                        return (
                          <LanguageOption
                            key={item.id}
                          >
                            {item.name}
                          </LanguageOption>
                        )
                      })
                    }
                  </LanguageSelect>
                </LanguageWrapper>
              </Authorisation>
            </HeaderList>
            <DrawerToggleButtonWrapper>
              <DrawerToggleButton onClick={this.props.drawerToggleClickHandler}/>
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
    selectedLanguage: state.headerMenu.selectedLanguage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    axiosUser: () => dispatch(getHeaderUser()),
    getSelectedLanguage: (event) => dispatch(getSelectedLanguage(event)),
    getToken: () => dispatch(getToken())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu)