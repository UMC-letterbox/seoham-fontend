import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login2 = () => {
  const navigate = useNavigate();
  const [inputEmail, setInputEmail] = useState("");
  const [inputPw, setInputPw] = useState("");

  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const signUp = () => {
    fetch("api주소", {
      method: "POST",
      body: JSON.stringify({
        email: inputEmail,
        password: inputPw,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.token) {
          localStorage.setItem("login_token", response.token);
          console.log(response.data);
          localStorage.setItem("userIdx", response.data);
          alert("로그인 되었습니다");
          navigate("/");
        } else {
          alert("이메일과 비밀번호를 다시 한 번 확인해 주세요.");
        }
      });
  };
  
  return (
    <div class="m-5 px-5 py-4">
      <h1 class="my-10 py-5 text-4xl text-center text-red-300">서함</h1>
      <div class="my-3 flex justify-center">
        <input
          class="rounded border w-4/5 leading-loose"
          placeholder="이메일 입력"
          type="text"
          name="input_email"
          value={inputEmail}
          onChange={handleInputEmail}
        />
      </div>
      <div class="my-3 flex justify-center">
        <input
          class="rounded border w-4/5 leading-loose"
          placeholder="비밀번호 입력(영문,숫자,특수문자 조합 8~16자)"
          type="password"
          name="input_pw"
          value={inputPw}
          onChange={handleInputPw}
        />
      </div>
      <div class="flex justify-center py-10">
          <button
            onClick={signUp}
            class="border rounded-full cursor-pointer rounded px-12 py-2 bg-[#64c964] text-white"
          >
            로그인
          </button>
      </div>
      <div class="flex justify-evenly">
        <Link to="/findid">
          <button>계정찾기</button>
        </Link>
        <Link to="/findpw">
          <button>비밀번호찾기</button>
        </Link>
        <Link to="/contract">
          <button>회원가입</button>
        </Link>
      </div>
    </div>
  );
};

export default Login2;

export function GetToken() {
  fetch("API주소", {
    method: "POST",
    headers: {
      Authorization: localStorage.getItem("access_token"),
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res.data);
    });
}
