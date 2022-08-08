import { useState } from "react";
import Join from "../Components/Join";

const Contract = () => {
  const [inputId, setInputId] = useState("");

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };
  const onClick = () => {
    alert("중복중복");
  };
  return (
    <div>
      <h1 class="my-5 py-2 text-xl text-center">회원가입</h1>
      <h2 class="px-10 py-5">닉네임</h2>
      <div class="flex justify-center">
        <input
          class="rounded border-b-2 w-3/5 leading-loose"
          placeholder="닉네임을 입력해주세요"
          type="text"
          name="input_email"
          value={inputId}
          onChange={handleInputId}
        />
        <button
          onClick={onClick}
          class="text-center border rounded-full text-red-300 w-1/4 border-red-300"
        >
          중복 확인
        </button>
      </div>
      <div class="py-10 my-5">
        <Join />
      </div>
    </div>
  );
};

export default Contract;
