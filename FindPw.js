import { useState } from "react";
import { Link } from "react-router-dom";

const FindPw = () => {
  const [inputPw, setInputPw] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputAdmire, setInputAdmire] = useState("");
  const [newPw, setNewpw] = useState("");

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };
  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };
  const handleInputAdmire = (e) => {
    setInputAdmire(e.target.value);
  };
  const handleInputNewPw = (e) => {
    setNewpw(e.target.value);
  };

  const onClick = () => {
    alert("비밀번호가 변경되었습니다.");
  };
  const onEmail = () => {
    alert("이메일로 인증번호가 전송되었습니다");
  };

  const onConfirm = () => {
    alert("일단은 맞다하자");
  };

  return (
    <div>
      <h1 class="my-5 py-2 text-xl text-center">계정 / 비밀번호찾기</h1>
      <div class="py-3 my-3 flex justify-center border-b-2 border-red-300">
        <Link to="/findid">
          <button class="mx-7">계정찾기</button>
        </Link>
        <Link to="/findpw">
          <button class="mx-7">비밀번호찾기</button>
        </Link>
      </div>
      <h2 class="px-10 py-5">비밀번호 찾기</h2>
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
      <h2 class="px-10 py-5">비밀번호 수정</h2>
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
          value={newPw}
          onChange={handleInputNewPw}
        />
      </div>
      <div class="flex justify-center">
        <Link to="/">
          <button
            onClick={onClick}
            class="h-12 w-4/5 my-3 mx-10 border cursor-pointer rounded-full px-12 py-3 bg-[#FFB6C1] text-white"
          >
            비밀번호 변경
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FindPw;
