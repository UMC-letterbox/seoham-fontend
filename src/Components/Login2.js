import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login2 = () => {
  const navigate = useNavigate();
  const [inputEmail, setInputEmail] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [state1, setState1] = useState(false);

  const onClick1 = () => {
    setState1((current) => !current);
  };

  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const signUp = () => {
    fetch("https://www.duke0410.shop/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: inputEmail,
        passWord: inputPw,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.isSuccess === true) {
          localStorage.setItem("login_token", response.result.jwt);
          console.log(response.result.jwt);
          localStorage.setItem("userIdx", response.result.userIdx);
          alert("로그인 되었습니다");
          navigate("/home");
        } else {
          alert("이메일과 비밀번호를 다시 한 번 확인해 주세요.");
        }
      });
  };

  return (
    <div class="m-5 px-5 py-4">
      <h1 class="my-10 pt-5 pb-7 text-4xl text-center buri font-bold text-[#ff8080]">
        서함
      </h1>
      <div class="my-3 flex justify-center">
        <input
          class="rounded border py-1 w-4/5 buri leading-loose bg-transparent"
          placeholder="이메일 입력"
          type="text"
          name="input_email"
          value={inputEmail}
          onChange={handleInputEmail}
        />
      </div>
      <div class="my-3 flex justify-center">
        <input
          class="rounded border py-1 w-4/5 buri leading-loose bg-transparent"
          placeholder="비밀번호 입력(영문,숫자,특수문자 조합 8~16자)"
          type={state1 ? "text" : "password"}
          name="input_pw"
          value={inputPw}
          onChange={handleInputPw}
        />
        <button class="absolute mt-2 right-20" onClick={onClick1}>
          {state1 ? (
            <img src="/img/show.png" className="w-6" />
          ) : (
            <img src="/img/hide.png" className="w-6" />
          )}
        </button>
      </div>
      <div class="flex justify-center pt-12 pb-5">
        <button
          onClick={signUp}
          class="border rounded cursor-pointer rounded w-4/5 px-12 py-2 buri bg-[#ff8080] text-white"
        >
          로그인
        </button>
      </div>
      <div class="flex justify-evenly">
        <Link to="/findid">
          <button class="text-xs">계정찾기</button>
        </Link>
        <p class="font-thin">|</p>
        <Link to="/findpw">
          <button class="text-xs">비밀번호찾기</button>
        </Link>
        <p class="font-thin">|</p>
        <Link to="/contract">
          <button class="text-xs">회원가입</button>
        </Link>
      </div>
    </div>
  );
};

export default Login2;
