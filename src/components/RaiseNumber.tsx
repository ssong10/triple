import React, { useRef, useEffect } from 'react'
import {countNumber} from 'utils/countNumber'

interface Props {
  target: number,
  time?: number,
}

const RaiseNumber:React.FC<Props> = ({target,time}) => {
  useEffect(()=> {
    countNumber(showNumber,target,time)
  })
  const numberRef = useRef<HTMLInputElement>(null)
  const showNumber = (value:number) => {
    if (numberRef.current) {
      numberRef.current.innerText = `${value}`
    }
  }
  return (
    <span ref={numberRef}></span>
  )
}
export default RaiseNumber