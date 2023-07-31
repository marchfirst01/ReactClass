import { Button, Email, EmailInput, Img } from "../../styles/emotion"

export default function EmotionPage() {

    //자바스크립트 쓰는 곳

    return (
        //html 쓰는 곳
        <div>
            <Email>이메일</Email>
            <EmailInput type="text"/>
            <Button>클릭하세요</Button>
            <Img src="/vercel.svg" />
        </div>
        )
}