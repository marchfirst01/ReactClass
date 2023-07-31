import { useState } from "react"

export default function SingupStatePage(){
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  function onChangeEmail(event){
    setEmail(event.target.value)
  }

  function onChangePassword(event){
    setPassword(event.target.value)
  }

  function onClickSignUp(){
    //검증하기
    if(email.includes("@") === false){
      setError("이메일이 올바르지 않음")
    } else { 
      //Backend 컴퓨터에 있는 API(함수) 요청하기
      setError("")
      alert("회원가입 완료") 
    }
  }

  return(
    <>
      이메일: <input type="text" onChange={onChangeEmail} />
      <div id="error">{error}</div>
      비밀번호: <input type="password" onChange={onChangePassword} />
      <button onClick={onClickSignUp}>회원가입</button>
    </>
  )
}