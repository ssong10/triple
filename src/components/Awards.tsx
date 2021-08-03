import React from 'react'
import styled from 'styled-components'
import appStore from 'assets/app-store.png'
import playStore from 'assets/play-store.png'

const awards: IAward[] = [
  {
    image: playStore,
    alt: 'playStore',
    description: `2018 구글 플레이스토어\n올해의 앱 최우수상`
  },
  {
    image: appStore,
    alt: 'appStore',
    description: `2018 애플 앱스토어\n오늘의 여행앱 선정`
  }
]

const AwardsWrap = styled.div`
  position:relative;
  display:flex;
  margin-top: 48px;
`
const AwardContainer = styled.div`
  display:flex;
  width: 40%;
  margin:4px 8px;
`
const Content = styled.div`
  font-size: 14px;
  color: rgba(58, 58, 58, 0.8);
  font-weight: bold;
  font-family: sans-serif;
  white-space: pre;
`
const AwardsImage = styled.img`
  height:100%;
  width:48px;
  margin-right: 8px;
`

interface IAward {
  image: string;
  alt: string;
  description: string;
}

interface Props {
  award : IAward,
  idx: number
}

const Award:React.FC<Props> = ({award,idx}) => {
  const { image, alt, description } = award
  return (
    <AwardContainer key={idx}>
      <AwardsImage src={image} alt={alt}/>
      <Content>
        {description}
      </Content>
    </AwardContainer>
  )
}

const Awards:React.FC = () => {
  return (
    <AwardsWrap>
      {awards.map((award,idx) => (
        <Award award={award} idx={idx}/>
      ))}
    </AwardsWrap>
  )
}
export default Awards