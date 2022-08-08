import { useState } from "react";
import { Link } from "react-router-dom";

const FindId = () => {
  const [inputId, setInputId] = useState("");

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };
  const onClick = () => {
    alert("확인되었습니다");
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
      <div class="py-10 flex justify-center">
        <input
          class="rounded border-b-2 w-3/5 leading-loose"
          placeholder="닉네임을 입력해주세요"
          type="text"
          name="input_id"
          value={inputId}
          onChange={handleInputId}
        />
        <button
          onClick={onClick}
          class="text-center border rounded-full text-red-300 w-1/5 border-red-300"
        >
          확인
        </button>
      </div>
      <div class="flex justify-center">
        <button class="h-12 w-4/5 my-3 mx-10 border cursor-pointer rounded-full px-12 py-3 bg-[#FFB6C1] text-white">
          이메일 찾기
        </button>
      </div>
    </div>
  );
};

export default FindId;
