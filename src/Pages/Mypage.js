import {Link} from "react-router-dom";
import {useState, useRef, useEffect} from "react";
import ModalContainer_pass from "../Components/ModalContainer_pass";
import ModalContainer_name from "../Components/modalContainer_name";
import "../css/font.css";
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

    const UserSvgWhite = () => {
        return (
          <svg  viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="99" fill="white" stroke="#BABABA" strokeWidth="2"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M88.9344 110.246C72.1782 110.246 58.3579 122.816 56.3882 139.04C56.1219 141.233 57.9384 143.033 60.1475 143.033H139.852C142.062 143.033 143.878 141.233 143.612 139.04C141.642 122.816 127.822 110.246 111.066 110.246H88.9344Z" fill="#FAD4D4"/>
          <circle cx="100" cy="77.4591" r="22.9508" fill="black" fillOpacity="0.4"/>
          <circle cx="100" cy="77.4591" r="22.9508" fill="#FAD4D4"/>
          </svg>
    
        )
      }
    const LetterIcon = () => {
        return (
            <div className="w-5 mr-2">
                <svg viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.8333 0.166687H2.16659C1.02075 0.166687 0.083252 1.10419 0.083252 2.25002V14.75C0.083252 15.8959 1.02075 16.8334 2.16659 16.8334H18.8333C19.9791 16.8334 20.9166 15.8959 20.9166 14.75V2.25002C20.9166 1.10419 19.9791 0.166687 18.8333 0.166687ZM18.4166 4.59377L11.6041 8.85419C10.927 9.28127 10.0728 9.28127 9.39575 8.85419L2.58325 4.59377C2.32284 4.4271 2.16659 4.14585 2.16659 3.84377C2.16659 3.14585 2.927 2.72919 3.52075 3.09377L10.4999 7.45835L17.4791 3.09377C18.0728 2.72919 18.8333 3.14585 18.8333 3.84377C18.8333 4.14585 18.677 4.4271 18.4166 4.59377Z" fill="white"/>
                </svg>
            </div>
        )
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
                    <div className="w-32">
                        <UserSvgWhite />
                    </div>
                </div>
                <div className="flex justify-center items-center mt-5">
                    <LetterIcon />
                    <p className="text-white buri">{LetterNum}</p>
                </div>
                <div className="flex justify-center mt-2.5 pb-6">
                    <div className="text-white buri">
                        <span>{userName}</span>
                        <span className="text-sm buri"> 님</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-center"> {/* 입력칸 부분 */}
            <div>
                <p className="mb-2.5 mt-5 buri">이메일</p>
                <p>{currentEmail}</p>

                <p className="my-2.5 buri">닉네임</p>
                <div className="flex justify">
                    <input className="w-61 border-b-2"
                            name="nickname"
                            value= {name}
                            onChange={handleNameChange}
                        />
                    <ModalContainer_name/>
                </div>
                <p className="my-2.5 buri">현재 비밀번호</p>
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