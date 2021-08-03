import React from 'react'
import styled from 'styled-components'
import tripleLogo from '../assets/triple.png'

const LogoWrap = styled.div`
  position:relative;
  width: 50%;
`
const LogoImage = styled.img`
  height: 338px;
`

const Text = styled.span`
  position:absolute;
  top: 80%;
  left: 150px;
  font-size:15px;
  color: rgba(58, 58, 58, 0.7);
`

const Logo:React.FC = () => {
  return (
    <LogoWrap>
      <LogoImage
        src={tripleLogo} alt="triple-logo" />
      <Text>
        2021년 5월 기준
      </Text>
    </LogoWrap>
  )
}
export default Logo