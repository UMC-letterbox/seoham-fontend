import {Link} from "react-router-dom";
import {useState, useRef, useEffect} from "react";
import ModalContainer_pass from "../Components/ModalContainer_pass";
import ModalContainer_name from "../Components/modalContainer_name";

function Mypage() {
    //이건 api로 받아와야하는 부분
    const LetterNum = 25; 
    const userName = "닉네임";
    const currentEmail = "abc123@gmail.com"

    // 해당 api 없음.
    useEffect(() => {

    }, []);
    //

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
        console.log('닉네임 변경: ', e.target.value);
    }
    const handlePassChange = (e) => {
        setPassword(e.target.value);
        console.log('비밀번호 변경: ', e.target.value);
    }

    const logout = () => {
        console.log("로그아웃");
        fetch('api', {
            method : 'POST',
            headers : localStorage.getItem('login_token'),
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))
        //메인화면-로그인화면으로 돌아가기
    }

    const Withdrawal = () => {
        if (window.confirm("정말로 탈퇴하시겠습니까?")){
            console.log("회원탈퇴");
            fetch('api(/mypage/{userid})', {
                method: 'DELETE',
                headers: localStorage.getItem('login_token')
            })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
        }
    }

    return(
        <div>
            <div className="bg-[#EF9F9F]"> {/* 핑크색 배경부분 - 프로필/편지수/이름 */}
                <div className="flex justify-around pt-8 mb-2.5">
                    <Link to={"/"}><button><img src="/img/left-arrow.png" className="w-4 h-4"/></button></Link>
                    <h1 className="text-white">MY PAGE</h1>
                    <span></span>
                </div>
                <div className="flex justify-center">
                    <img src="/img/user.png" className="w-32"/>
                </div>
                <div className="flex justify-center mt-5">
                    <img src="/img/letters.png" className="w-5 mr-2"/>
                    <p className="text-white">{LetterNum}</p>
                </div>
                <div className="flex justify-center mt-2.5 pb-6">
                    <div className="text-white">
                        <span>{userName}</span>
                        <span className="text-sm"> 님</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-center"> {/* 입력칸 부분 */}
            <div>
                <p className="mb-2.5 mt-5">이메일</p>
                <p>{currentEmail}</p>

                <p className="my-2.5">닉네임</p>
                <div className="flex justify">
                    <input className="w-61 border-b-2"
                            name="nickname"
                            value= {name}
                            onChange={handleNameChange}
                        />
                    <ModalContainer_name/>
                </div>
                <p className="my-2.5">현재 비밀번호</p>
                <div className="flex justify">            
                    <input className="w-61 border-b-2"
                            placeholder="현재 비밀번호 입력"
                            name="password"
                            value= {password}
                            onChange={handlePassChange}
                        />
                    <ModalContainer_pass pass={password}/>
                </div>

            </div>
            </div>
            <div className="grid place-items-center">
                <button className="rounded-2xl w-64 mt-14 mb-3 py-2.5 bg-[#F47C7C] text-white text-lg"
                        onClick={logout}>
                            로그아웃
                </button>
                <button onClick={Withdrawal}>회원탈퇴</button>
            </div>
        </div>
    );
}

export default Mypage;