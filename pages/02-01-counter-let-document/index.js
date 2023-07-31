export default function CounterLetDocumentPage() {

  function OnClickCountUp(){
    const Count = Number(document.getElementById("count").innerText) + 1
    document.getElementById("count").innerText = Count
  }

  function OneClickCountDown(){
    const Count = Number(document.getElementById("count").innerText) - 1
    document.getElementById("count").innerText = Count
  }

  return(
    <>
      <div id="count">0</div>
      <button onClick={OnClickCountUp}>카운트 증가</button>
      <button onClick={OneClickCountDown}>카운트 감소</button>
    </>
  )
}