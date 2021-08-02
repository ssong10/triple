/*
  1 초 이상의 사용을 권장합니다.
  ms의 기본 시간은 2초로 설정되어있습니다
  소숫점 단위는 표기하지 않습니다.
  끝나는 시간은 정확하지 않고 기준이 되는 시간입니다
  cpu 성능이나 환경에 따라 느려질 수 있습니다.
*/

const DEFAULT_TIME = 2000

export const countNumber = (
  callback: (...args:any[]) => void ,
  targetNumber:number,
  ms?:number,
) : void => {
  let currentNumber = 0;
  const raiseRatio = (targetNumber.toString().length + 1) * 10
  
  // 기본 endTime 설정 - 2초
  const endTime = ms || DEFAULT_TIME
  
  const updateTime = () => {
    setTimeout(()=> {
      if (Math.round(currentNumber) === targetNumber) {
        return
      }
      currentNumber += (targetNumber-currentNumber) * raiseRatio / endTime
      callback(Math.round(currentNumber))
      updateTime()
    })
  }
  updateTime()
}

