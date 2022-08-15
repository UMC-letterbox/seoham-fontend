//인증구현
//Jwt 먼저 하기!

import { useNavigate } from "react-router-dom";
const navigate = useNavigate();
//로그인 페이지에서 할거(러프하게 일단은…)
this.state = { email: "", pw: "", nickname: "" };
handleInputValue = (e) => {
  const { name, value } = e.target;
  this.setState({
    [name]: value,
  });
};
//이게 만약 필요하게 되면....;; 하아...
const { password, email } = this.state;
const signUp = () => {
  fetch("api주소", {
    method: "POST",
    body: JSON.stringify({
      email: inputEmail,
      password: inputPw,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.token) {
        localStorage.setItem("login_token", response.token);
        alert("로그인 되었습니다");
        navigate("/");
      } else {
        alert("이메일과 비밀번호를 다시 한 번 확인해 주세요.");
      }
    });
};

//-body에 들어가는 객체의 키값은 백엔드가 정한 이름을 가져야한다.

//회원가입하기
//const {nickname, password,  email, usableId} = this.state; 이거 오류나서.. 근데 이게 필요할까? 필요하겠지?
fetch("API주소", {
  method: "POST",
  body: JSON.stringify({
    email: inputEmail,
    password: inputPw,
    nickname: inputId,
  }),
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})
  .then((res) => res.json())
  .then((res) => {
    res.message === "SUCCESS"
      ? alert("회원가입 완료")
      : alert("다시 확인해주세요");
  });

//또다른 방법(회원가입에 필요한 것들)
clickSignup = (e) => {
  const navigate = useNavigate();
  e.preventDefault();
  if (isId === false || isEmail === false) {
    // 조건 1. 아이디 중복체크를 통해서 저장한 usableId값이 false라면
    alert("아이디또는 이메일 중복확인을 해주세요");
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
      if (res.status === 400) {
        alert("다시 한 번 확인해주세요!");
      } else {
        // 아니라면 가입 완료!
        alert("가입 완료 !");
        navigate("/"); //로그인이 되면 메인페이지로 이동
      }
    });
  }
  //request header에 access token 보내기
  fetch("API주소", {
    method: "POST",
    headers: {
      Authorization: localStorage.getItem("login_token"),
    },
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response.data);
    });
};

//이메일 넘겨주기(그 인증번호 보내줄때)
checkEmail = (e) => {
  e.preventDefault();
  const { email_number } = inputEmail;
  fetch("API주소", {
    method: "POST",
    body: JSON.stringify({
      Email: email_number,
    }),
  });
};
//이메일 인증번호 검사(수정된 부분)
certifyEmail = (e) => {
  e.preventDefault();
  const { email_number } = inputEmail;
  fetch("API주소", {
    method: "POST",
    body: JSON.stringify({
      email: email_number,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.MESSAGE === "SUCCESS") {
        alert("이메일이 유효합니다 비밀번호 변경을 진행해주세요");
      } else {
        alert("이메일이 유효하지 않거나 존재하지 않습니다.");
      }
    });
};
//그 닉네임 관련(중복확인) 사용가능 불가능 true/false
const [isId, setIsId] = React.useState(false);
idCheck = (e) => {
  e.preventDefault();
  const { usableId } = isId;
  fetch("API주소", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: usableId }),
  }).then((response) => {
    if (response.status === 200) {
      alert("사용 가능한 닉네임입니다."); // 백엔드로 보낸 데이터 결과 200 일 경우
      setIsId(true); //사용 가능한 아이디 일 경우 state상태에 true값으로 변경, 나중에 회원가입 버튼 클릭 이벤트핸들러에 필요!
    } else if (response.status === 409) {
      alert("이미 사용중인 아이디 입니다."); // 이미 데이터베이스에 있는 아이디일 경우 409
    } else {
      // 그 외에는 사용 불가한 아이디
      alert("사용 불가한 아이디입니다.");
    }
  });
};

const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
const onPwConfirm = () => {
  if (inputPw === inputPwre) {
    alert("비밀번호 확인되었습니다");
    setIsPasswordConfirm(true);
    navigate("/Contract");
  } else {
    alert("비밀번호를 확인해주세요");
  }
};
//비밀번호는 그냥 그 state 비밀번호랑 지금 친거랑 똑같은지만 확인하면 되니깐..(이건 또 다른 방법)
const onChangePasswordConfirm = (e) => {
  const currentPasswordConfirm = e.target.value;
  setIsPasswordConfirm(currentPasswordConfirm);
  if (password !== currentPasswordConfirm) {
    alert("비밀번호가 똑같지 않아요");
    setIsPasswordConfirm(false);
  } else {
    alert("비밀번호 일치합니다.");
    setIsPasswordConfirm(true);
  }
};

//비밀번호 최소 규정(뭐 아이디도 될 수 있고…)
handlePw = (e) => {
  const { pw } = inputPw;
  fetch("API주소", {
    method: "POST",
    body: JSON.stringify({
      password: pw,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      if (res.message === "INVALID_PASSWORD") {
        alert("비밀번호 형식을 지켜주세요");
      }
      if (!/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/.test(pw)) {
        alert("숫자+영문자+특수문자 조합으로 8자리 이상 사용해야 합니다.");
      }
    });
};
const idRegExp = /^[a-zA-z0-9]{4,12}$/;
// <-얘가 대소문자 영어, 숫자로 최소 4글자에서 12글자로!
const pwRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
// <—얘가 3조합으로 8자리 이상
//이메일 경우
const [isEmail, setIsEmail] = useState(false);
const onChangeEmail = (e) => {
  const currentEmail = e.target.value;
  setInputEmail(currentEmail);
  const emailRegExp =
    /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
  if (!emailRegExp.test(currentEmail)) {
    alert("이메일의 형식이 올바르지 않습니다!");
    setIsEmail(false);
  } else {
    alert("사용 가능한 이메일 입니다.");
    setIsEmail(true);
  }
};

//버튼 활성화(여기서는 로그인인데…)
onKeyUp = { changeButton }; //이걸 추가해주면 된다!
const [button, setButton] = useState(false);
const changeButton = () => {
  inputEmail.includes(
    "@" && inputPw.length >= 5 ? setButton(true) : setButton(false)
  );
};
//이때는 css에 disabled도 추가를 해줘야겠지..?
