import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [inputPw, setInputPw] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputAdmire, setInputAdmire] = useState("");
  const [inputPwre, setInputPwre] = useState("");
  const [inputId, setInputId] = useState("");
  const [validmail, setValidmail] = useState(false);
  const [isId, setIsId] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const handleInputId = (e) => {
    setInputId(e.target.value);
    if (e.target.value.length < 2 || e.target.value.length > 8) {
      setIsId(false);
    } else {
      setIsId(true);
    }
  };
  const onClick1 = () => {
    setState1((current) => !current);
  };
  const onClick2 = () => {
    setState2((current) => !current);
  };
  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };
  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
    if (!emailRegExp.test(inputEmail)) {
      setEmailMessage("이메일의 형식이 올바르지 않습니다!");
    } else {
      setEmailMessage("");
      setValidmail(true);
    }
  };
  const handleInputAdmire = (e) => {
    setInputAdmire(e.target.value);
  };
  const handleInputPwre = (e) => {
    setInputPwre(e.target.value);
  };

  const onConfirm = () => {
    alert("일단은 맞다하자");
  };

  const clickSignup = () => {
    if (
      isId === false ||
      isNumber === false ||
      isEmail === false ||
      inputPw !== inputPwre ||
      isPassword === false
    ) {
      // 조건 1. 아이디 중복체크를 통해서 저장한 usableId값이 false라면
      alert("유효성 및 중복확인부분을 전부해주세요");
    } else {
      // 조건 3. 아이디도 사용가능하고 필수항목도 전부 입력 되었다면
      fetch("https://www.duke0410.shop/user/join", {
        // 백엔드로 api호출!
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: inputEmail,
          passWord: inputPw,
          nickName: inputId,
        }),
      }).then((res) => {
        if (res.status === 200) {
          alert("가입 완료 !");
          navigate("/login");
        } else {
          // 가입완료부분
          alert("다시 한번 확인해주세요!"); //이게 error부분
        }
      });
    }
  };

  const idCheck = (e) => {
    e.preventDefault();
    if (isId === false) {
      alert("닉네임 설정을 다시해주세요");
    } else {
      e.preventDefault();
      const { usableId } = isId;
      fetch(
        `https://www.duke0410.shop/user/check-join-nickname/?nickName=${inputId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((response) => {
          if (response.result.valid === true) {
            alert("사용 가능한 닉네임입니다."); // 백엔드로 보낸 데이터 결과 200 일 경우
            setIsId(true); //사용 가능한 아이디 일 경우 state상태에 true값으로 변경, 나중에 회원가입 버튼 클릭 이벤트핸들러에 필요!
          } else {
            // 그 외에는 사용 불가한 아이디
            alert("사용 불가한 아이디거나 중복됩니다.");
          }
        });
    }
  };
  const onChangeEmail = (e) => {
    e.preventDefault();
    if (validmail === false) {
      alert("이메일 형식을 지켜주세요!");
    } else {
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
    }
  };
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
  return (
    <div>
      <h1 class="my-5 py-2 text-xl text-center">회원가입</h1>
      <h2 class="px-10 text-lg font-semibold buri">계정</h2>
      <div class="py-5 flex justify-center">
        <input
          class="rounded text-sm border-b-2 w-1/2 leading-loose bg-transparent border-[#989898]"
          placeholder="이메일을 입력해주세요"
          type="text"
          name="input_email"
          value={inputEmail}
          onChange={handleInputEmail}
        />
        <button
          onClick={onChangeEmail}
          class="ml-2 text-center border rounded-full text-red-300 w-1/4 border-red-300 dark:bg-[#323435]"
        >
          인증번호 전송
        </button>
      </div>
      <p class="text-sm mx-10">{emailMessage}</p>
      <div class="py-5 flex justify-center">
        <input
          class="rounded text-sm border-b-2 w-1/2 leading-loose bg-transparent border-[#989898]"
          placeholder="인증번호를 입력해주세요"
          type="text"
          name="input_admire"
          value={inputAdmire}
          onChange={handleInputAdmire}
        />
        <button
          onClick={certifyNumber}
          class="ml-2 text-center border rounded-full text-red-300 w-1/4 border-red-300 dark:bg-[#323435]"
        >
          확인
        </button>
      </div>
      <h2 class="px-10 py-5 font-semibold buri">닉네임</h2>
      <div class="flex justify-center">
        <input
          class="rounded border-b-2 text-sm w-1/2 leading-loose bg-transparent border-[#989898]"
          placeholder="닉네임을 입력해주세요(2~8자)"
          type="text"
          name="input_email"
          value={inputId}
          onChange={handleInputId}
        />
        <button
          onClick={idCheck}
          class="ml-2 text-center border rounded-full text-red-300 w-1/4 border-red-300 dark:bg-[#323435]"
        >
          중복확인
        </button>
      </div>
      <h2 class="px-10 py-5 font-semibold buri">비밀번호</h2>
      <div>
        <input
          class="ml-10 rounded text-sm border-b-2 w-2/3 leading-loose bg-transparent border-[#989898]"
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
      <p class="text-sm mx-10">{passwordMessage}</p>
      <div class="py-5">
        <input
          class="ml-10 rounded text-sm border-b-2 w-2/3 leading-loose bg-transparent border-[#989898]"
          placeholder="비밀번호를 확인해주세요"
          type={state2 ? "text" : "password"}
          name="input_pw"
          value={inputPwre}
          onChange={handleInputPwre}
        />
        <button onClick={onClick2}>
          {state2 ? (
            <img src="/img/show.png" className="w-6" />
          ) : (
            <img src="/img/hide.png" className="w-6" />
          )}
        </button>
      </div>
      <div class="flex justify-center ">
        <button
          onClick={clickSignup}
          class="h-12 w-5/6 my-3 mx-10 border cursor-pointer rounded px-10 py-3 bg-[#ff8080] buri text-lg text-white"
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default Create;
