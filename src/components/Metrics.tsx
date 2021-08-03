import React from 'react'
import styled from 'styled-components'
import RaiseNumber from './RaiseNumber'
import FadeInDelay from 'styles/FadeIn'

interface Metric {
  number : number,
  unit: string,
  info: string
}
const MetricsItems:Metric[] = [
  {
    number: 630,
    unit: '만 명',
    info: '여행자',
  },
  {
    number: 95,
    unit: '만 개',
    info: '여행 리뷰',
  },
  {
    number: 425,
    unit: '만 개',
    info: '여행 일정',
  }
]
const MetricContainer = styled.div`
  position:relative;
  font-size: 2em;
  ${FadeInDelay(200)}
`
const MetricWrap = styled.div`
  margin-bottom: 12px;
`
  
const Metrics:React.FC = () => {
  return (
    <MetricContainer >
      {MetricsItems.map((metric,idx) => (
        <MetricWrap key={idx}>
          <strong>
            <RaiseNumber target={metric.number} time={2000}/>
            {metric.unit}
          </strong>
          <span>
            의 {metric.info}
          </span>
        </MetricWrap>
      ))}
    </MetricContainer>
  )
}
export default Metrics