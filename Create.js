import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [inputPw, setInputPw] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputAdmire, setInputAdmire] = useState("");
  const [inputPwre, setInputPwre] = useState("");
  const [inputId, setInputId] = useState("");
  const [isId, setIsId] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState("");
  const handleInputId = (e) => {
    setInputId(e.target.value);
  };
  const onClick = () => {
    alert("닉네임 설정이 완료되었습니다");
  };
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

  const onConfirm = () => {
    alert("일단은 맞다하자");
  };

  const clickSignup = (e) => {
    e.preventDefault();
    if (
      isId === false ||
      isEmail === false ||
      isPasswordConfirm === false ||
      isPassword === false ||
      isNumber === false
    ) {
      // 조건 1. 아이디 중복체크를 통해서 저장한 usableId값이 false라면
      alert("유효성 및 중복확인부분을 전부해주세요");
    } else {
      // 조건 3. 아이디도 사용가능하고 필수항목도 전부 입력 되었다면
      fetch("API주소", {
        // 백엔드로 api호출!
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: inputEmail,
          password: inputPw,
          nickname: inputId,
        }),
      }).then((res) => {
        if (res.isSuccess == true ) {
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
    const { usableId } = isId;
    fetch("API주소", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: usableId }),
    }).then((response) => {
      if (response.isSuccess == true ) {
        alert("사용 가능한 닉네임입니다."); // 백엔드로 보낸 데이터 결과 200 일 경우
        setIsId(true); //사용 가능한 아이디 일 경우 state상태에 true값으로 변경, 나중에 회원가입 버튼 클릭 이벤트핸들러에 필요!
      }else {
        // 그 외에는 사용 불가한 아이디
        alert("사용 불가한 아이디거나 중복됩니다.");
      }
    });
  };
  const onChangeEmail = (e) => {
    setInputEmail(e.target.value);
    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
    if (!emailRegExp.test(inputEmail)) {
      window.alert("이메일의 형식이 올바르지 않습니다!");
    } else {
      const { email_number } = inputEmail;
      fetch("API주소", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email_number,}),
    }).then((response) => {
      if (response.isSuccess == true ) {
        window.alert("사용 가능한 이메일 입니다. 인증번호를 보냈습니다");
        setIsEmail(true);
      }else {
        alert("이미 사용하고 있는 이메일입니다 다시 시도해주세요");
      }
    });
    }
  };
  const certifyNumber = (e) => {
    e.preventDefault();
    const { email_number } = inputEmail;
    const {certification_number} = inputAdmire;
    fetch("API주소", {
      method: "POST",
      body: JSON.stringify({
        email: email_number,
        certificationNumber : certification_number,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.isSuccess == true) {
          alert("인증번호가 맞습니다 비밀번호 변경을 해주세요");
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
    if (inputPw === inputPwre) {
      alert("비밀번호 확인되었습니다");
      setIsPasswordConfirm(true);
    } else {
      alert("비밀번호를 확인해주세요");
    }
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
          onClick={onChangeEmail}
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
          onClick={certifyNumber}
          class="text-center border rounded-full text-red-300 w-1/4 border-red-300"
        >
          확인
        </button>
      </div>
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
          onClick={idCheck}
          class="text-center border rounded-full text-red-300 w-1/4 border-red-300"
        >
          중복확인
        </button>
      </div>
      <h2 class="px-10 py-5 ">비밀번호</h2>
      <div class="py-5">
        <input
          class="mx-7 rounded border-b-2 w-4/5 leading-loose"
          placeholder="비밀번호를 입력해주세요"
          type="password"
          name="input_pw"
          value={inputPw}
          onChange={onChangePassword}
        />
        <p class="mx-7">{passwordMessage}</p>
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
        <button
          onClick={onPwConfirm}
          class="text-center border rounded-full text-red-300 w-1/4 border-red-300"
        >
          중복확인
        </button>
      </div>
      <div class="flex justify-center ">
        <button
          onClick={clickSignup}
          class="h-12 w-5/6 my-3 mx-10 border cursor-pointer rounded px-10 py-3 bg-[#FFB6C1] text-white"
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default Create;
