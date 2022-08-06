import React from 'react';
import {Link} from "react-router-dom"

function Landing(){
    return (
        <div>
            <h1>
                오랫동안 추억하고 싶은 메신저를 <br/>
                아날로그 감성을 담아 보관하시겠어요
            </h1>
            <button> 서함시작하기</button>
            <Link to="mainTag"> 메이페이지로 바로가기</Link>
        </div>
    )
}

export default Landing;