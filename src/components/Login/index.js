import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  LoginContainer,
  LoginFormContainer,
  Image,
  FormContainer,
  InputContainer,
  Button,
  Label,
  Input,
  ErrorMsg,
  Heading,
} from './styledComponents'

class Login extends Component {
  state = {
    userId: '',
    userPin: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUserPin = event => {
    this.setState({userPin: event.target.value})
  }

  renderUserPinField = () => {
    const {userPin} = this.state

    return (
      <>
        <Label htmlFor="pin">PIN</Label>
        <Input
          id="pin"
          value={userPin}
          type="password"
          onChange={this.onChangeUserPin}
          placeholder="Enter PIN"
        />
      </>
    )
  }

  onChangeUserId = event => {
    this.setState({userId: event.target.value})
  }

  renderUserIdField = () => {
    const {userId} = this.state

    return (
      <>
        <Label htmlFor="userId">User ID</Label>
        <Input
          id="userId"
          value={userId}
          type="text"
          onChange={this.onChangeUserId}
          placeholder="Enter User ID"
        />
      </>
    )
  }

  submitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })

    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {userId, userPin} = this.state
    const userDetails = {user_id: userId, pin: userPin}

    const url = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.submitSuccess(data.jwt_token)
    } else {
      this.submitFailure(data.error_msg)
    }
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginContainer>
        <LoginFormContainer>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
          />
          <FormContainer onSubmit={this.submitForm}>
            <Heading>Welcome Back</Heading>
            <InputContainer>{this.renderUserIdField()}</InputContainer>
            <InputContainer>{this.renderUserPinField()}</InputContainer>
            <Button type="submit">Login</Button>
            {showSubmitError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
          </FormContainer>
        </LoginFormContainer>
      </LoginContainer>
    )
  }
}

export default Login
