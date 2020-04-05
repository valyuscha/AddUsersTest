import React, {Component} from 'react'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import {FormattedMessage} from 'react-intl'
import {connect} from 'react-redux'
import {getAllUsers} from '../../../redux/actions/getUsersActions'

import {Container} from '../App/style'
import Button from '../../UI/Button/index'

import {
  ShowUsersWrapper,
  ShowUsersName,
  ShowUsersText,
  ShowUsersItemsWrapper,
  ShowUsersItemWrapper,
  ShowUsersItemImageWrapper,
  ShowUsersItemImage,
  ShowUsersItemDescription,
  ShowUsersItemName,
  ShowUsersItemJob,
  ShowUsersItemEmail,
  ShowUsersItemPhone
} from './style'

class ShowUsers extends Component {
  componentDidMount() {
    this.props.axiosUsers()
  }

  renderUser = () => {
    if (!this.props.users.length) {
      return (
        <Loader
          type="TailSpin"
          color="#ef6c00"
          height={50}
          width={50}
          style={{margin: '80px auto'}}
        />
      )
    }

    const translateUsers = this.props.users.map(user => {
      let userPosition

      switch (user.position) {
        case 'Lawyer':
          userPosition = 'lawyer_position'
        break
        case 'Content manager':
          userPosition = 'content_manager_position'
        break
        case 'Security':
          userPosition = 'security_position'
        break
        case 'Designer':
          userPosition = 'designer_position'
          break
        default: return ''
      }

      return {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        position: userPosition,
        position_id: user.position_id,
        photo: user.photo
      }
    })

    return translateUsers.map(user => {
      return (
        <ShowUsersItemWrapper key={user.id}>
          <ShowUsersItemImageWrapper>
            <ShowUsersItemImage src={user.photo}/>
          </ShowUsersItemImageWrapper>
          <ShowUsersItemDescription>
            <ShowUsersItemName>
              {user.name}
            </ShowUsersItemName>
            <ShowUsersItemJob>
              <FormattedMessage
                id={user.position}
              />
            </ShowUsersItemJob>
            <ShowUsersItemEmail>
              {user.email}
            </ShowUsersItemEmail>
            <ShowUsersItemPhone>
              {user.phone}
            </ShowUsersItemPhone>
          </ShowUsersItemDescription>
        </ShowUsersItemWrapper>
      )
    })
  }

  render() {
    return (
      <Container id="ShowUsers">
        <ShowUsersWrapper>
          <ShowUsersName>
            <FormattedMessage
              id="users_block"
              defaultMessage="Our cheerful users"
            />
          </ShowUsersName>
          <ShowUsersText>
            <FormattedMessage
              id="registration_date"
              defaultMessage="Attention! Sorting users by registration date"
            />
          </ShowUsersText>
          <ShowUsersItemsWrapper>
            {this.renderUser()}
          </ShowUsersItemsWrapper>
          {
            this.props.isShowButton &&
            <Button
              users
              text="more_users"
              onClick={this.props.isShowUsers ? this.props.axiosUsers : null}
            />
          }
        </ShowUsersWrapper>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.getUsers.users,
    isShowButton: state.getUsers.isShowButton,
    isShowUsers: state.getUsers.isShowUsers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    axiosUsers: () => dispatch(getAllUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowUsers)