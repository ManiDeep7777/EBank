import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import Header from '../Header'
import {HomeContainer, Heading, HomeCardImg} from './styledComponents'

const Home = () => {
  const accessToken = Cookies.get('jwt_token')

  if (accessToken === undefined) {
    return <Redirect to="/ebank/login" />
  }
  return (
    <>
      <Header />
      <HomeContainer>
        <Heading>Your Flexibility, Our Excellence</Heading>
        <HomeCardImg
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
        />
      </HomeContainer>
    </>
  )
}

export default Home
