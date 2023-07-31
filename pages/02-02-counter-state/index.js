import { useState } from 'react'

export default function CounterStatePage() {

  //기존 방식: let count = 0
  const [count, setCount] = useState(0)

  function OnClickCountUp(){
    //기존 방식: count = count + 1
    setCount(count + 1)
  }

  function OneClickCountDown(){
    //기존 방식: count = count - 1
    setCount(count - 1)
  }

  return(
    <>
      <div>{count}</div>
      <button onClick={OnClickCountUp}>카운트 증가</button>
      <button onClick={OneClickCountDown}>카운트 감소</button>
    </>
  )
}