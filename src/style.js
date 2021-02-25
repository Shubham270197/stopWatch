import styled, {css} from 'styled-components'

export const MainContent = styled.div`
  margin-top: 10px;
  width: 40%;
  border-radius: 10px;
  border: 1px solid rgb(4 3 3 / 94%);
  box-shadow: 4px 4px 4px 4px #2f2d2a1a;
  background-color: #ff005e0a;
`

export const MainHeader = styled.div`
  display: flex;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-style: italic;
  font-family: ui-sans-serif;
  color: cadetblue;
`

export const TimerData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: 700;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ customMargin }) => customMargin && css`
    margin-top: 10px;
  `}
`

export const Button = styled.button`
margin: 0px 10px;
background-color: #c7420f;
width: 100px;
height: 35px;
border: none;
border-radius: 5px;
`

export const IconContainer = styled.div`
display: flex;
margin-top: 10px;
align-items: center;
justify-content: center;
`

export const IconWrap = styled.div`
background-color: #e82020;
margin: 10px 10px
`

export const Icon = styled.i`
justify-content: center;
display: flex;
align-items: center;
height: 30px;
color: white;
cursor: pointer;
width: 35px;
`
