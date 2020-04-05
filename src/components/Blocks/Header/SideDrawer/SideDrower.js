import React, {Component} from 'react'
import {Link} from 'react-scroll'
import {connect} from 'react-redux'
import {FormattedMessage} from 'react-intl'
import {getHeaderUser, getSelectedLanguage} from '../../../../redux/actions/headerMenuActions'

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
  LanguageSelect,
  LanguageOption
} from './SideDrowerStyle'

class SideDrawer extends Component {
  componentDidMount() {
    this.props.axiosUser()
  }

  render() {
    const {user} = this.props

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
    selectedLanguage: state.headerMenu.selectedLanguage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    axiosUser: () => dispatch(getHeaderUser()),
    getSelectedLanguage: (event) => dispatch(getSelectedLanguage(event))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer)