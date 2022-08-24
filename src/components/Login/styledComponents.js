import styled from 'styled-components'

export const LoginContainer = styled.div`
  height: 100vh;
  background-color: #152850;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginFormContainer = styled.div`
  background-color: #e0eefe;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  border-radius: 12px;
`
export const Image = styled.img`
  width: 350px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  padding: 64px 48px 64px 48px;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 12px;
  border-top-right-radius: 12px;
  width: 350px;
  flex-shrink: 0;
  background-color: #ffffff;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`

export const Button = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 2px;
  background-color: #0b69ff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  outline: none;
`
export const Label = styled.label`
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  color: #475569;
`

export const Input = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #d7dfe9;
  background-color: #e2e8f0;
  color: #64748b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
`

export const ErrorMsg = styled.p`
  align-self: start;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  color: #ff0b37;
`

export const Heading = styled.h1`
  text-align: left;
  color: #183b56;
  font-size: 33px;
  font-weight: bold;
  font-family: 'Roboto';
`
