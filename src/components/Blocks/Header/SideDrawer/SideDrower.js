import React, {Component} from 'react'
import {Link} from 'react-scroll'
import {connect} from 'react-redux'
import {FormattedMessage} from 'react-intl'
import {
  closeLanguagesList,
  getHeaderUser,
  getSelectedLanguage,
  showLanguagesList
} from '../../../../redux/actions/headerMenuActions'

import {headerLinks, languages} from '../server'

import {
  SideDrawerWrapper,
  UserLanguageWrapper,
  UserWrapper,
  UserImageWrapper,
  UserImage,
  UserData,
  UserName,
  UserEmail,
  Menu,
  ListItem,
  ListItemLink,
  LanguageWrapper,
  SelectedLanguageWrapper,
  LanguageButtonsList,
  LanguageButtonsWrapper,
  LanguageButtons,
  SelectedLanguage,
  LanguageLayout,
} from './SideDrowerStyle'

class SideDrawer extends Component {
  componentDidMount() {
    this.props.axiosUser()
  }

  render() {
    const {user, selectedLanguage, isSelected, getSelectedLanguage, closeLanguagesList, showLanguagesList} = this.props

    return (
      <SideDrawerWrapper show={this.props.show}>
        <UserLanguageWrapper>
          <UserWrapper>
            <UserImageWrapper>
              <UserImage src={user.photo}/>
            </UserImageWrapper>
            <UserData>
              <UserName>{user.name}</UserName>
              <UserEmail>{user.email}</UserEmail>
            </UserData>
          </UserWrapper>
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
        </UserLanguageWrapper>
        <Menu>
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
        </Menu>
      </SideDrawerWrapper>
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
    showLanguagesList: () => dispatch(showLanguagesList()),
    closeLanguagesList: () => dispatch(closeLanguagesList())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer)