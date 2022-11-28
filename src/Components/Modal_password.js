import { useState } from "react";

function Modal_password({ modalClose }) {
  const onCloseModal = (e) => {
    console.log("e.target: ", e.target);
    console.log("e.tarcurrentTargetget: ", e.currentTarget);
    if (e.target === e.currentTarget) {
      modalClose();
    }
  };

  const [new_pass, setNew_pass] = useState("");
  const [new2_pass, setNew2_pass] = useState("");

  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);

  const [confirm_text, setText] = useState("");
  //https://ji-u.tistory.com/6
  //https://hianna.tistory.com/302

  const handleNewChange = (e) => {
    setNew_pass(e.target.value);
    console.log("새 비번: ", e.target.value);
  };
  const handleNew2Change = (e) => {
    setNew2_pass(e.target.value);
    console.log("새 비번 확인: ", e.target.value);
  };

  const onClick1 = () => {
    setState1((current) => !current);
  };
  const onClick2 = () => {
    setState2((current) => !current);
  };

  const ChangePassword = () => {
    console.log("비밀번호 변경");

    if (new_pass.length === 0 || new2_pass.length === 0) {
      setText("비밀번호를 입력해주세요."); //window.alert("비밀번호를 입력해주세요.")
    }
    // 비번 수정 - 400 오류
    else if (new_pass === new2_pass) {
      const passwordRegExp =
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
      if (!passwordRegExp.test(new_pass)) {
        setText("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!");
      } else {
        setText("안전한 비밀번호 입니다.");
        fetch("https://www.duke0410.shop/mypage/password/check", {
          method: "POST",
          headers: {
            "x-access-token": localStorage.getItem("login_token"),
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: new_pass,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.result.valid) {
              setText(
                "현재 비밀번호와 같습니다. 다른 비밀번호를 입력해주세요."
              );
            } else {
              fetch("https://www.duke0410.shop/mypage/password/modify", {
                method: "PATCH",
                headers: {
                  "x-access-token": localStorage.getItem("login_token"),
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  newPassword: new2_pass,
                }),
              })
                .then((res) => res.json())
                .then((res) => {
                  console.log(res);
                  if (res.isSuccess) {
                    alert(res.result);
                  } else {
                    alert("오류가 발생했습니다.");
                  }
                })
                .catch((err) => console.log(err));

              modalClose();
            }
          });
      }
    } else {
      setText("비밀번호를 다시 확인해주세요."); //window.alert("비밀번호를 다시 확인해주세요.");
    }
  };

  return (
    <div className="modal_container" onClick={onCloseModal}>
      <div className="modal w-10/12 rounded-xl shadow-md px-8 py-4 dark:bg-[#323435]">
        <h1 className="mb-7 mt-2 text-lg buri">비밀번호 변경</h1>
        <div>
          <input
            className="w-10/12 border-b-2 mt-3 mr-1 buri bg-transparent border-[#989898]"
            name="new_password"
            placeholder="새 비밀번호"
            value={new_pass}
            onChange={handleNewChange}
            type={state1 ? "text" : "password"}
          />
          <button onClick={onClick1}>
            {state1 ? (
              <img src="/img/show.png" className="w-4" />
            ) : (
              <img src="/img/hide.png" className="w-4" />
            )}
          </button>

          <input
            className="w-10/12 border-b-2 mt-6 mr-1 buri bg-transparent border-[#989898]"
            name="new2_password"
            placeholder="비밀번호 확인"
            value={new2_pass}
            onChange={handleNew2Change}
            type={state2 ? "text" : "password"}
          />
          <button onClick={onClick2}>
            {state2 ? (
              <img src="/img/show.png" className="w-4" />
            ) : (
              <img src="/img/hide.png" className="w-4" />
            )}
          </button>
        </div>

        <div className="flex justify-center mt-5">
          <p className="text-red-500">{confirm_text}</p>
        </div>

        <div className="flex justify-center">
          <button
            className="bg-[#EF9F9F] rounded-full mt-6 py-3 px-5 text-white buri"
            onClick={ChangePassword}
          >
            변경 완료
          </button>
        </div>
      </div>
    </div>
  );
}
export default Modal_password;
