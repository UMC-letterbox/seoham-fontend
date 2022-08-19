import { useState } from "react";
import { Link } from "react-router-dom";

const FindId = () => {
  const [inputId, setInputId] = useState("");
  const [isId, setIsId] = useState(false);
  const [EmailMessage, setEmailMessage] = useState("");
  const handleInputId = (e) => {
    setInputId(e.target.value);
  };
  const onClick = () => {
    alert("확인되었습니다");
  };
  const onConfirm = () => {
    alert("일단은 맞다하자");
  };
  const certifyId = (e) => {
    e.preventDefault();
    const { id_number } = inputId;
    fetch(`/user/check/${inputId}`, { 
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nickName : id_number,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200 ) {
          alert("닉네임이 유효합니다. 이메일 찾기를 눌러주세요");
          setIsId(true);
        } else {
          alert("닉네임이 유효하지 않거나 존재하지 않습니다.");
        }
      });
  };
  const findEmail = () => {
    const { id_number } = inputId;
    if (isId === true) {
      fetch(`/user/find/${inputId}`, {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nickName : id_number,
      }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 200 ) {
            setEmailMessage(`당신의 이메일은 ${res.data.email}입니다.`);
          } else {
            alert("이메일이 유효하지 않거나 존재하지 않습니다.");
          }
        });
    } else {
      alert("닉네임 확인을 먼저 해주세요");
    }
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
          onClick={certifyId}
          class="text-center border rounded-full text-red-300 w-1/5 border-red-300"
        >
          확인
        </button>
      </div>
      <div class="flex justify-center">
        <button
          onClick = {findEmail}
          class="h-12 w-4/5 my-3 mx-10 border cursor-pointer rounded-full px-12 py-3 bg-[#FFB6C1] text-white">
          이메일 찾기
        </button>
      </div>
      <p>{EmailMessage}</p>
    </div>
  );
};

export default FindId;
