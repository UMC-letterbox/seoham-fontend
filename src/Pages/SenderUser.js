import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import MyButton from "../Components/MyButton";
import MyButton1 from "../Components/MyButton1";
import MyButton2 from "../Components/MyButton2";
import MyButton3 from "../Components/MyButton3";
import MyHeader from "../Components/MyHeader";
import Select from "../Components/Select";
import UpButton from "../Components/UpButton";
import Viewbox from "../Components/ViewBox";
import Menubox from "../Components/Menubox";

const SenderUser = () => {
  const tagList = useContext(DiaryStateContext);
  const { sender } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const numLetter = 1; //편지 개수 입력받기
  const [isopen, setOpen] = useState(false);

  useEffect(() => {
    const User = `${sender}`;
    setData(tagList.filter((it) => User === it.sender));
  }, [tagList]);

  const onClick = () => {
    setOpen((current) => !current)
  }
  //menu box 선택 메뉴
  const selectTag = () => {
    console.log("선택 버튼")
  }
  // 수정
  const modiTag = () => {
    console.log("보낸이 정보 수정 버튼");
    //함수 내부에서 바로 페이지를 넘기는 방법이 없나? 아니면 또 인자를 추가해야하는데..
  }
  //  삭제
  const deleteTag = () => {
    console.log("보낸이 삭제 버튼");
    navigate(-1);
  }

  return (
    <div class="sm: justify-center items-center m-0 px-3 min-h-screen">
      {/*<MyHeader
        leftChild={
          <MyButton2
            text={"<--"}
            onClick={() => {
              navigate(-1);
            }}
          />
        }
        headText={""}
        rightChild={<MyButton1 text={"..."} onClick={() => alert("프로필")} />}
      />*/}
      <div className="flex justify-between px-3 py-5">
        <button onClick={()=>{navigate(-1);}}>
          <img src="/img/left-arrow.png" className="w-4 h-4"/>
        </button>
        <button >
          <img src="/img/dots.png" className="w-4 h-4" onClick={onClick}/>
        </button>
      </div>
      {/*<Select
        TagText={
          <MyButton text={"일단 이걸로"} onClick={() => alert("안녕")} />
        }
        DateText={""}
        SenderText={""}
      />*/}
      <div className="flex justify ml-5"> {/* 프로필 표시 부분 - 컴포넌트로 옮겨도 괜찮을 듯?*/}
        <img src="/img/user.png" className="w-10 h-10 self-center mr-2.5"/> {/*임의로 넣음 - 랜덤으로 수정 필요*/}
        <div className="grid content-between">
          <div className="text-rose-300"><span>{sender}</span><span className="text-sm">님</span></div>
          <div>
            <img src="/img/email.png" className="w-4 inline-block align-baseline"/>
            <span className="text-rose-300">&nbsp;{numLetter}개</span>
          </div>
        </div>
      </div>
      <UpButton
        text={"업"}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      />
      <MyButton3
        text={"+"}
        onClick={() => {
          navigate("/new");
        }}
      />
      <Viewbox tagList={data} />
      {isopen ? <Menubox menuContents={["선택", "보낸이 정보 수정", "보낸이 정보 삭제"]} menuFunc={[selectTag, modiTag, deleteTag]}/> : null}
    </div>
  );
};

export default SenderUser;
