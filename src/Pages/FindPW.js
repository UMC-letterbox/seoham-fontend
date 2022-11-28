import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const FindPw = () => {
  const navigate = useNavigate();
  const [inputPw, setInputPw] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputAdmire, setInputAdmire] = useState("");
  const [newPw, setNewpw] = useState("");
  const [isPassword, setIsPassword] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState("");
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);

  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };
  const handleInputAdmire = (e) => {
    setInputAdmire(e.target.value);
  };
  const handleInputNewPw = (e) => {
    setNewpw(e.target.value);
  };
  const onClick1 = () => {
    setState1((current) => !current);
  };
  const onClick2 = () => {
    setState2((current) => !current);
  };

  const onClick = () => {
    alert("비밀번호가 변경되었습니다.");
  };
  const onEmail = () => {
    alert("이메일로 인증번호가 전송되었습니다");
  };

  const certifyEmail = (e) => {
    e.preventDefault();
    fetch("https://www.duke0410.shop/mail/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: inputEmail,
      }),
    }).then((response) => {
      if (response.status === 200) {
        window.alert("사용 가능한 이메일 입니다. 인증번호를 보냈습니다");
        setIsEmail(true);
      } else {
        alert("이미 사용이거나 유효하지 않는 이메일입니다.");
      }
    });
  };
  // const certifyEmail = (e) => {
  //   e.preventDefault();
  //   const { email_number } = inputEmail;
  //   fetch(
  //     `https://www.duke0410.shop/user/check-find-password/?email=${inputEmail}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   ).then((res) => {
  //     if (res.status === 200) {
  //       alert("이메일이 유효합니다 인증번호를 전송했습니다");
  //       setIsEmail(true);
  //     } else {
  //       alert("이메일이 유효하지 않거나 존재하지 않습니다.");
  //     }
  //   });
  // };
  const certifyNumber = (e) => {
    e.preventDefault();
    fetch("https://www.duke0410.shop/mail/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        authCode: inputAdmire,
        email: inputEmail,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.result === true) {
          alert("인증번호가 맞습니다 비밀번호 설정을 해주세요");
          setIsNumber(true);
        } else {
          alert("인증번호가 맞지 않습니다.");
        }
      });
  };
  const onChangePassword = (e) => {
    setInputPw(e.target.value);
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegExp.test(inputPw)) {
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
      );
    } else {
      setPasswordMessage("안전한 비밀번호 입니다.");
      setIsPassword(true);
    }
  };
  const onPwConfirm = () => {
    if (
      isEmail === true &&
      isPassword === true &&
      inputPw === newPw &&
      isNumber === true
    ) {
      fetch("https://www.duke0410.shop/user/find-password", {
        // 백엔드로 api호출!
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: inputEmail,
          passWord: newPw,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.result.success === true) {
            alert("비밀번호 변경되었습니다.");
            navigate("/login");
          } else {
            alert("조금 있다가 다시 시도해주십시오");
          }
        });
    } else {
      alert("비밀번호를 확인해주세요");
    }
  };
  return (
    <div>
      <h1 class="my-5 py-2 text-xl text-center">계정 / 비밀번호찾기</h1>
      <div class="py-3 my-3 flex justify-center border-b-2 border-red-300">
        <div>
          <Link to="/findid">
            <button class="mx-7 buri">계정찾기</button>
          </Link>
        </div>
        <div>
          <Link to="/findpw">
            <button class="mx-7 buri text-[#ff8080]">비밀번호찾기</button>
          </Link>
        </div>
      </div>
      <h2 class="pl-11 pt-5 font-semibold buri">비밀번호 찾기</h2>
      <div class="py-3 flex justify-center">
        <input
          class="rounded border-b-2 text-sm w-1/2 leading-loose bg-transparent border-[#989898]"
          placeholder="이메일을 입력해주세요"
          type="text"
          name="input_email"
          value={inputEmail}
          onChange={handleInputEmail}
        />
        <button
          onClick={certifyEmail}
          class="text-center border text-sm rounded-full text-red-300 w-1/4 border-red-300 dark:bg-[#323435]"
        >
          인증번호 전송
        </button>
      </div>
      <div class="py-5 flex justify-center">
        <input
          class="rounded border-b-2 text-sm w-1/2 leading-loose bg-transparent border-[#989898]"
          placeholder="인증번호를 입력해주세요"
          type="text"
          name="input_admire"
          value={inputAdmire}
          onChange={handleInputAdmire}
        />
        <button
          onClick={certifyNumber}
          class="text-center border rounded-full text-red-300 w-1/4 border-red-300 dark:bg-[#323435]"
        >
          확인
        </button>
      </div>
      <h2 class="pl-11 pt-5 font-semibold buri">비밀번호 수정</h2>
      <div class="py-5 flex">
        <input
          class="ml-11 rounded border-b-2 text-sm w-2/3 leading-loose bg-transparent border-[#989898]"
          placeholder="비밀번호를 입력해주세요"
          type={state1 ? "text" : "password"}
          name="input_pw"
          value={inputPw}
          onChange={onChangePassword}
        />
        <button onClick={onClick1}>
          {state1 ? (
            <img src="/img/show.png" className="w-6" />
          ) : (
            <img src="/img/hide.png" className="w-6" />
          )}
        </button>
      </div>
      <div class="py-5 flex ">
        <input
          class="ml-11 rounded border-b-2 text-sm w-2/3 leading-loose bg-transparent border-[#989898]"
          placeholder="비밀번호를 확인해주세요"
          type={state2 ? "text" : "password"}
          name="input_pw"
          value={newPw}
          onChange={handleInputNewPw}
        />
        <button onClick={onClick2}>
          {state2 ? (
            <img src="/img/show.png" className="w-6" />
          ) : (
            <img src="/img/hide.png" className="w-6" />
          )}
        </button>
      </div>
      <div class="pt-5 flex justify-center">
        <button
          onClick={onPwConfirm}
          class="h-12 w-4/5 my-3 mx-10 border cursor-pointer rounded-full px-12 py-3 buri bg-[#f4a0a0] text-white"
        >
          비밀번호 변경
        </button>
      </div>
    </div>
  );
};

export default FindPw;
