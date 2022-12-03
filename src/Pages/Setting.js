import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SettingBtn from "../Components/SettingBtn";
import SettingModeBtn from "../Components/SettingModeBtn";

function Setting() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);
  const navigate = useNavigate();
  const [font, setFont] = useState(localStorage.getItem("font"));

  console.log(font, localStorage.getItem("font"));

  const onClick = () => {
    navigate(-1);
  };
  return (
    <div className={`${theme}`}>
      <div className="flex justify-around pt-8 mb-2.5">
        <button onClick={onClick}>
          <img src="/img/left-arrow.png" className="w-4 h-4" />
        </button>
        <h1>설정</h1>
        <span></span>
      </div>
      <div className="text-center my-10">
        <div className="">화면</div>
        <SettingModeBtn text={"라이트모드"} textClassName={"light"} />
        <SettingModeBtn text={"다크모드"} textClassName={"dark"} />
        {/* <SettingBtn text={"시스템 설정"}/> */}
      </div>
      <div className="text-center my-10">
        <h3 className="">글꼴</h3>
        <SettingBtn
          text={"아리따 부리"}
          textClassName={"buri"}
          setFont={setFont}
        />
        <SettingBtn
          text={"이롭게 바탕체"}
          textClassName={"Iropke"}
          setFont={setFont}
        />
        <SettingBtn
          text={"조선일보명조"}
          textClassName={"Chosun"}
          setFont={setFont}
        />{" "}
        {/**조선일보명조가 디코딩이 안돼서 일단 조선굵은명조로 넣었습니다.*/}
        <SettingBtn
          text={"Mapo 금빛나루"}
          textClassName={"Mapo"}
          setFont={setFont}
        />
      </div>
      <div className="bg-[#FCE2DB] p-5">
        <p>서함 글꼴 변경 미리보기</p>
        <p>가나다라마바사아자차카타파하</p>
        <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
        <p>abcdefghijklmnopqrstuvwxyz</p>
        <p>1234567890!@#$%^&*()</p>
      </div>
    </div>
  );
}

export default Setting;
