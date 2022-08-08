import { useState } from "react";
import { Link } from "react-router-dom";

const FindId = () => {
  const [inputPw, setInputPw] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputAdmire, setInputAdmire] = useState("");
  const [inputPwre, setInputPwre] = useState("");

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };
  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };
  const handleInputAdmire = (e) => {
    setInputAdmire(e.target.value);
  };
  const handleInputPwre = (e) => {
    setInputPwre(e.target.value);
  };

  const onEmail = () => {
    alert("이메일로 인증번호가 전송되었습니다");
  };

  const onConfirm = () => {
    alert("일단은 맞다하자");
  };

  return (
    <div>
      <h1 class="my-5 py-2 text-xl text-center">회원가입</h1>
      <h2 class="my-3 py-2 text-xl text-center">서함에 오신 것을 환영합니다</h2>
      <h2 class="px-10 py-5 ">계정</h2>
      <div class="py-5 flex justify-center">
        <input
          class="rounded border-b-2 w-3/5 leading-loose"
          placeholder="이메일을 입력해주세요"
          type="text"
          name="input_email"
          value={inputEmail}
          onChange={handleInputEmail}
        />
        <button
          onClick={onEmail}
          class="text-center border rounded-full text-red-300 w-1/4 border-red-300"
        >
          인증번호 전송
        </button>
      </div>
      <div class="py-5 flex justify-center">
        <input
          class="rounded border-b-2 w-3/5 leading-loose"
          placeholder="인증번호를 입력해주세요"
          type="text"
          name="input_admire"
          value={inputAdmire}
          onChange={handleInputAdmire}
        />
        <button
          onClick={onConfirm}
          class="text-center border rounded-full text-red-300 w-1/4 border-red-300"
        >
          확인
        </button>
      </div>
      <h2 class="px-10 py-5 ">비밀번호</h2>
      <div class="py-5 flex">
        <input
          class="mx-7 rounded border-b-2 w-4/5 leading-loose"
          placeholder="비밀번호를 입력해주세요"
          type="password"
          name="input_pw"
          value={inputPw}
          onChange={handleInputPw}
        />
      </div>
      <div class="py-5 flex ">
        <input
          class="mx-7 rounded border-b-2 w-4/5 leading-loose"
          placeholder="비밀번호를 확인해주세요"
          type="password"
          name="input_pw"
          value={inputPwre}
          onChange={handleInputPwre}
        />
      </div>
      <div class="flex justify-center ">
        <Link to="/contract">
          <button class="h-12 w-5/6 my-3 mx-10 border cursor-pointer rounded px-10 py-3 bg-[#FFB6C1] text-white">
            다음
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FindId;
