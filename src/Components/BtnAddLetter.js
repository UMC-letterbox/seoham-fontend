import {Link} from "react-router-dom"
function BtnAddLetter() {
    return (
        <div>
            <Link to="MakeNewTag">
                태그만들기
            </Link>
        </div>
    )
}

export default BtnAddLetter;