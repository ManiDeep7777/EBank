import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {NavBarHeader, NavBarContainer, Button} from './styledComponents'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  return (
    <NavBarHeader>
      <NavBarContainer>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
        />

        <Button type="button" onClick={onClickLogout}>
          Logout
        </Button>
      </NavBarContainer>
    </NavBarHeader>
  )
}

export default withRouter(Header)
