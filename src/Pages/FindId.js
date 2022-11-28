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
    fetch(
      `https://www.duke0410.shop/user/check-find-email/?nickName=${inputId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.result.exist === true) {
          alert("닉네임이 유효합니다. 이메일 찾기를 눌러주세요");
          console.log(response.result);
          setIsId(true); //여기 부분이 말이... 차암...
        } else {
          alert("닉네임이 존재하지 않습니다.");
          console.log(response.result);
        }
      });
  };
  const findEmail = () => {
    const { id_number } = inputId;
    if (isId === true) {
      fetch(`https://www.duke0410.shop/user/find-email/?nickName=${inputId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.isSuccess === true) {
            setEmailMessage(
              ` : 당신의 이메일은 ${response.result.email}입니다.`
            );
            console.log(response.result);
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
        <div>
          <Link to="/findid">
            <button class="mx-7 buri text-[#ff8080]">계정찾기</button>
          </Link>
        </div>
        <div>
          <Link to="/findpw">
            <button class="mx-7 buri">비밀번호찾기</button>
          </Link>
        </div>
      </div>
      <div class="pt-10 pb-4 flex justify-center">
        <input
          class="rounded border-b-2 w-1/2 text-sm leading-loose bg-transparent border-[#989898]"
          placeholder="닉네임을 입력해주세요"
          type="text"
          name="input_id"
          value={inputId}
          onChange={handleInputId}
        />
        <button
          onClick={certifyId}
          class="text-center text-sm border rounded-full py-1 text-red-300 w-1/4 border-red-300 dark:bg-[#323435]"
        >
          확인
        </button>
      </div>
      <p class="ml-10 text-xs text-[#989898]">인증결과 {EmailMessage}</p>
      <div class="pt-10 flex justify-center">
        <button
          onClick={findEmail}
          class="h-12 w-4/5 my-10 mx-10 border cursor-pointer rounded-full px-12 py-3 buri bg-[#f4a0a0] text-white"
        >
          이메일 찾기
        </button>
      </div>
    </div>
  );
};

export default FindId;
