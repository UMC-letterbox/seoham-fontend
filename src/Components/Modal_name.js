import React from "react";
import "../css/Modal.css";
import { useEffect, useState } from "react";

function Modal_name({ modalClose, modalCheck, setNickname }) {
  const onCloseModal = (e) => {
    //console.log('e.target: ', e.target);
    //console.log('e.tarcurrentTargetget: ', e.currentTarget)
    if (e.target === e.currentTarget) {
      modalClose();
    }
  };

  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(true);
  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log("닉네임 변경: ", e.target.value);
  };

  const [check, setCheck] = useState("");
  const onClick = () => {
    /* 중복체크 api 연결하기 - 400 에러*/
    console.log(name, typeof name);

    fetch("https://www.duke0410.shop/mypage/nickname/check/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        newNickname: name,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.result.valid) {
          setCheck("사용 가능한 닉네임입니다.");
          setIsValid(true);
        } else {
          setCheck("사용 불가한 닉네임입니다.");
          setIsValid(false);
        }
      });
  };

  const ChangeName = () => {
    //console.log(name, setNickname)
    //setNickname(name)
    if (isValid) {
      /* 닉네임 수정 api 연결하기 - 400 에러 */
      fetch("https://www.duke0410.shop/mypage/nickname/modify", {
        method: "PATCH",
        headers: {
          "x-access-token": localStorage.getItem("login_token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newNickname: name,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res.isSuccess) {
            alert(res.message);
            setNickname(name);
            modalClose();
          } else alert("오류가 발생하였습니다.");
        })
        .catch((err) => console.log(err));
    } else {
      window.alert("해당 닉네임을 사용할 수 없습니다.");
    }
  };

  return (
    <div className="modal_container " onClick={onCloseModal}>
      <div className="modal w-10/12 h-56 rounded-xl shadow-md px-8 py-4 dark:bg-[#323435]">
        <h1>닉네임 중복 확인</h1>
        <div>
          <div className="flex justify-center">
            <input
              className="w-40 border-b-2 mt-3 mr-1 bg-transparent"
              name="nickname"
              value={name}
              onChange={handleNameChange}
            />
            <button
              className="text-sm text-[#EF9F9F] rounded-full border border-[#EF9F9F] py-1 px-2 dark:bg-[#47484A]"
              onClick={onClick}
            >
              중복 확인
            </button>
          </div>
        </div>
        <p className="text-center py-5">{check}</p>
        <div className="flex justify-center">
          <button
            className="absolute bottom-5 bg-[#EF9F9F] rounded-full py-3 px-5 text-white"
            onClick={ChangeName}
          >
            사용하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal_name;
