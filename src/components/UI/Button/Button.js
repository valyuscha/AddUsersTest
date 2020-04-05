import React from 'react'
import {FormattedMessage} from 'react-intl'
import {PageButton} from './style'

const Button = ({headerSignUp, users, registration, text, preventDefault, onClick}) => {
    return (
        <PageButton
            headerSignUp={headerSignUp}
            users={users}
            registration={registration}
            onClick={onClick}
        >
          <FormattedMessage
            id={text}
            defaultMessage={text}
          />
            </PageButton>
    )
}

export default Button