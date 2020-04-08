import React, {Component} from 'react'
import {FormattedMessage} from 'react-intl'
import {injectIntl} from 'react-intl'
import {connect} from 'react-redux'
import {showButton} from '../../../redux/actions/getUsersActions'
import {enterFields, getPositions, modalClose, modalOpen, sendForm} from '../../../redux/actions/registerActions'

import {Container} from '../App/style'
import Button from '../../UI/Button/index'
import Modal from '../../UI/Modal/index'

import {
  FormWrapper,
  FormName,
  FormText,
  Form,
  FormFieldWrapper,
  FormFieldName,
  FormField,
  ErrorMessage,
  SelectWrapper,
  Select,
  Options,
  Upload,
  UploadWrapper,
  UploadInput,
  UploadLabel,
  UploadInputFile,
  UploadLabelMini,
  UploadLabelMiniImg
} from './style'

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

class RegisterUsers extends Component {
  state = {
    isFormValid: false,
    errorMessage: {
      name: '',
      email: '',
      phone: '',
      select: '',
      file: ''
    },
    formControls: {
      name: {
        value: '',
        valid: false,
        touched: false,
        validation: {required: true}
      },

      email: {
        value: '',
        valid: false,
        touched: false,
        validation: {required: true}
      },

      phone: {
        value: '',
        valid: false,
        touched: false,
        validation: {required: true}
      },

      select: {
        value: [],
        valid: false,
        touched: false,
        validation: {required: true},
        selectedPosition: '',
        selected: false
      },

      file: {
        value: '',
        valid: false,
        touched: false,
        validation: {required: true},
        selectedFile: null
      }
    }
  }

  componentDidMount() {
    let stateSelect = {...this.state.formControls.select}
    this.props.getPositions(stateSelect)
    stateSelect = this.props.selectValue

    this.setState({stateSelect})
  }

  validateControl(value, validation) {
    if (!validation) {
      return true
    }

    let isValid = true

    if (validation.required) {
      isValid = value.trim() !== '' && isValid
    }

    return isValid
  }

  onChangeHandler = event => {
    event.preventDefault()
    const formControls = {...this.state.formControls}
    const errorMessage = {...this.state.errorMessage}
    let selectedPosition = {...this.state.formControls.select.selectedPosition}
    let selected = {...this.state.formControls.select.selected}
    const {name, value} = event.target
    const ext = value.substring(value.lastIndexOf('.') + 1)

    formControls[name].touched = false
    formControls[name].valid = this.validateControl(value, formControls[name].validation)
    if (name !== 'select') {
      formControls[name].value = value
    } else {
      selectedPosition = event.target.value
      formControls[name].selectedPosition = selectedPosition
      selected = true
      formControls[name].selected = selected
      formControls[name].defaultValue = selectedPosition
    }
    if (event.target.files && event.target.files[0]) {
      formControls[name].selectedFile = event.target.files[0]
    }

    const regexNumber = RegExp(/^[\+]{0,1}380([0-9]{9})$/)

    switch (name) {
      case 'name':
        errorMessage.name =
          value.trim().length < 1
            ? 'write_name_error'
            : value.trim().length < 2 || value.length > 60
            ? 'name_size'
            : ''
        break
      case 'email':
        errorMessage.email =
          value.trim().length < 1
            ? 'write_email_error'
            : validateEmail(value.trim()) ? ''
            : 'no_correct_email'
        break
      case 'phone':
        errorMessage.phone =
          value.trim().length < 1
            ? 'write_phone_error'
            : regexNumber.test(value) ? ''
            : 'no_correct_phone'
        break
      case 'select':
        errorMessage.select = ''
        break
      case 'file':
        errorMessage.file =
          (ext.toLowerCase() === 'jpeg' || ext.toLowerCase() === 'jpg'
            ? '' : 'photo_type_error') ||
          (event.target.files[0].size > 5242880 ? 'no_correct_size' : '') ||
          (event.target.files[0].size < 70 * 70 ? 'no_correct_width_height' : '')
        break
      default:
        break
    }

    let isFormValid = true

    Object.keys(formControls).forEach(name => {
      isFormValid = formControls[name].valid && errorMessage[name] === '' && isFormValid
    })

    this.setState({formControls, errorMessage, isFormValid})
  }

  sendForm = async (e) => {
    e.preventDefault()
    this.setState({isFormValid: false})
    const {name, email, phone, select, file} = this.state.formControls
    let fd = new FormData()

    fd.append('name', name.value)
    fd.append('email', email.value)
    fd.append('phone', phone.value)
    fd.append('position_id', select.selectedPosition)
    fd.append('photo', file.selectedFile, file.selectedFile.name)

    const successMessage = <FormattedMessage
      id="successfully_registered"
      defaultMessage="New user successfully registered"
    />

    const errorMessage = <FormattedMessage
      id="registered_with_error"
      defaultMessage="Error: Network Error"
    />

    this.props.sendForm(fd, successMessage, errorMessage)

    const formControls = {...this.state.formControls}

    formControls.name.value = ''
    formControls.name.valid = false

    formControls.email.value = ''
    formControls.email.valid = false

    formControls.phone.value = ''
    formControls.phone.valid = false

    formControls.select.selectedPosition = ''
    formControls.select.selected = false
    formControls.select.valid = false

    formControls.file.selectedFile = null
    formControls.file.valid = false
    formControls.file.value = ''

    this.props.showButton()
  }

  isTouched = () => {
    const formControls = {...this.state.formControls}
    formControls.name.touched = true
    formControls.email.touched = true
    formControls.phone.touched = true
    formControls.select.touched = true
    this.setState({formControls})
  }

  isSelectTouched = (e) => {
    const formControls = {...this.state.formControls}
    let errorMessage = {...this.state.errorMessage}
    formControls.select.touched = false
    if (e.target.name === 'select') {
      if (!formControls.select.selected) {
        errorMessage.select = 'select_error'
      }
    }

    this.setState({formControls, errorMessage})
  }

  enterFields = (e) => {
    e.preventDefault()
    const enterFieldsMessage = <FormattedMessage
      id="enter_fields"
      defaultMessage="If you want to register new user you have to enter all fields"
    />
    this.props.enterFields(enterFieldsMessage)
    this.props.modalOpen()
  }

  render() {
    const {errorMessage, isFormValid} = this.state
    const {modalSuccessMessage, modalErrorMessage, modalEnterFieldsMessage, intl, isModalOpen, modalClose} = this.props
    const {name, email, phone, select, file} = this.state.formControls

    return (
      <FormWrapper onClick={
        e => e.target.tagName.toLowerCase() !== 'input' &&
        e.target.tagName.toLowerCase() !== 'select'
          ? this.isTouched() : null}>
        <Container id="FormValidation">
          {
            isModalOpen &&
            <Modal
              successMessage={modalSuccessMessage}
              errorMessage={modalErrorMessage}
              modalEnterFieldsMessage={modalEnterFieldsMessage}
              button="OK"
              onClick={modalClose}
            />
          }
          <FormName>
            <FormattedMessage
              id="register_title"
              defaultMessage="Register to get a work"
            />
          </FormName>
          <FormText>
            <FormattedMessage
              id="update_userslist"
              defaultMessage=" Attention! After successful registration and alert, update the list of users in the block from
            the top"
            />
          </FormText>
          <Form enctype="multipart/form-data" method="">

            <FormFieldWrapper>
              <FormFieldName
                value={name.value}
                valid={errorMessage.name}
                touched={name.touched}
              >
                <FormattedMessage
                  id="nameLabel"
                  defaultMessage="Name"
                />
              </FormFieldName>
              <FormField
                type="text"
                name="name"
                value={name.value}
                valid={errorMessage.name}
                touched={name.touched}
                shouldValidate={!!name.validation}
                placeholder={intl.formatMessage({id: 'namePlaceholder'})}
                onChange={this.onChangeHandler}
              />
              {!name.touched ? null : errorMessage.name ?
                <ErrorMessage>
                  <FormattedMessage
                    id={errorMessage.name}
                  />
                </ErrorMessage> : null}
            </FormFieldWrapper>

            <FormFieldWrapper>
              <FormFieldName
                value={email.value}
                valid={errorMessage.email}
                touched={email.touched}
              >
                <FormattedMessage
                  id="emailLabel"
                  defaultMessage="Email"
                />
              </FormFieldName>
              <FormField
                type="text"
                name="email"
                value={email.value}
                valid={errorMessage.email}
                touched={email.touched}
                shouldValidate={!!email.validation}
                placeholder={intl.formatMessage({id: 'emailPlaceholder'})}
                onChange={this.onChangeHandler}
              />
              {!email.touched ? null : errorMessage.email ?
                <ErrorMessage>
                  <FormattedMessage
                    id={errorMessage.email}
                  />
                </ErrorMessage> : null}
            </FormFieldWrapper>

            <FormFieldWrapper>
              <FormFieldName
                value={phone.value}
                valid={errorMessage.phone}
                touched={phone.touched}
              >
                <FormattedMessage
                  id="phoneLabel"
                  defaultMessage="Phone"
                />
              </FormFieldName>
              <FormField
                type="text"
                name="phone"
                value={phone.value}
                valid={errorMessage.phone}
                touched={phone.touched}
                shouldValidate={!!phone.validation}
                placeholder={intl.formatMessage({id: 'phonePlaceholder'})}
                onChange={this.onChangeHandler}
              />
              {!phone.touched ? null : errorMessage.phone ?
                <ErrorMessage>
                  <FormattedMessage
                    id={errorMessage.phone}
                  />
                </ErrorMessage> : null}
            </FormFieldWrapper>
            <SelectWrapper>
              <Select
                name="select"
                value={!select.selected ? 'Select your position' : select.selectedPosition}
                valid={select.valid}
                touched={select.touched}
                shouldValidate={!!select.validation}
                errorMessage={select.errorMessage}
                onClick={this.isSelectTouched}
                onChange={this.onChangeHandler}
              >
                <Options disabled value="Select your position">
                  {intl.formatMessage({id: 'select_position', defaultMessage: "Select your position"})}
                </Options>

                {
                  select.value.map(item => {
                    return item.map(positions => {
                      return (
                        <Options
                          key={positions.id}
                          value={positions.id}
                        >
                          {intl.formatMessage({id: positions.name, defaultMessage: "Select your position"})}
                        </Options>
                      )
                    })
                  })
                }
              </Select>
              {!select.touched ? null : errorMessage.select ?
                <ErrorMessage>
                  <FormattedMessage
                    id={errorMessage.select}
                  />
                </ErrorMessage> : null}
            </SelectWrapper>

            <Upload>
              <UploadWrapper>
                <UploadInputFile
                  id="file-input"
                  type="file"
                  name="file"
                  accept="image/*"
                  value={file.value}
                  onChange={this.onChangeHandler}
                />
                <UploadInput
                  id="file-text"
                  type="text"
                  name="fileContext"
                  value={file.selectedFile ? file.selectedFile.name : ''}
                  valid={errorMessage.file}
                  disabled
                  onChange={this.onChangeHandler}
                  placeholder={intl.formatMessage({id: 'uploadPlaceholder'})}
                />
                <UploadLabel htmlFor="file-input">
                  <FormattedMessage
                    id="uploadLabel"
                    defaultMessage="Upload"
                  />
                </UploadLabel>
                <UploadLabelMini htmlFor="file-input">
                  <UploadLabelMiniImg/>
                </UploadLabelMini>
              </UploadWrapper>
              {
                errorMessage.file &&
                <ErrorMessage>
                  <FormattedMessage
                    id={errorMessage.file}
                  />
                </ErrorMessage>
              }
            </Upload>

            <Button
              text="sign_up"
              registration={isFormValid}
              onClick={isFormValid
                ? this.sendForm
                : this.enterFields}
            />
          </Form>
        </Container>
      </FormWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.getUsers.users,
    isModalOpen: state.registerReducer.isModalOpen,
    modalSuccessMessage: state.registerReducer.successMessage,
    modalErrorMessage: state.registerReducer.errorMessage,
    modalEnterFieldsMessage: state.registerReducer.enterFieldsMessage,
    selectValue: state.registerReducer.selectValue
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showButton: () => dispatch(showButton()),
    sendForm: (item, successMessage, errorMessage) => dispatch(sendForm(item, successMessage, errorMessage)),
    enterFields: (enterFieldsMessage) => dispatch(enterFields(enterFieldsMessage)),
    modalOpen: () => dispatch(modalOpen()),
    modalClose: () => dispatch(modalClose()),
    getPositions: (selectValue) => dispatch(getPositions(selectValue))
  }
}

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(RegisterUsers))