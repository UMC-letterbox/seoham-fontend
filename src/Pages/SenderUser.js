import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
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
import "../css/font.css";
import Modal_sender from "../Components/Modal_sender";

const SenderUser = () => {
  //const tagList = useContext(DiaryStateContext);
  const { sender } = useParams();
  const {state} = useLocation();
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [isopen, setOpen] = useState(false);
  const [modal, setModal] = useState(false);

  /*
  useEffect(() => {
    const User = `${sender}`;
    setData(tagList.filter((it) => User === it.sender));
  }, [tagList]);
  */
  useEffect(() => {
    fetch(`https://www.duke0410.shop/posts/senders/${sender}`, {
      method: 'GET',
      headers: {
        'X-ACCESS-TOKEN': localStorage.getItem('login_token')
      }
    })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      setData(res.result);
      const currentPosts = [];
      res.result.map(item => currentPosts.push(item));
      console.log(typeof(currentPosts), currentPosts)
    })
    .catch(err => console.log(err))
  }, [])

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
    setModal((current) => !current)
  }
  //  삭제
  const deleteTag = () => {
    console.log("보낸이 삭제 버튼");
    /* 보낸이 id 값 확인 필요 메시지... */
    fetch(`https://www.duke0410.shop/posts/senders/delete/${sender}`,{
      method: 'DELETE',
      headers: {
        'x-access-token': localStorage.getItem('login_token')
      }
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      if(res.isSuccess){
        alert('보낸이 정보를 삭제했습니다.')
      }
      else{
        alert('오류가 발생했습니다.')
      }
    })
    .catch(err => console.log(err))
    navigate(-1);
  }
  const UserSvgPink = () => {
    return(
      <svg  viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="100" fill="#EF9F9F"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M88.9344 110.246C72.1782 110.246 58.3578 122.816 56.3882 139.04C56.1219 141.233 57.9384 143.033 60.1475 143.033H139.852C142.062 143.033 143.878 141.233 143.612 139.04C141.642 122.816 127.822 110.246 111.066 110.246H88.9344Z" fill="#FFF2F2"/>
      <circle cx="100" cy="77.4591" r="22.9508" fill="black" fillOpacity="0.4"/>
      <circle cx="100" cy="77.4591" r="22.9508" fill="#FFF2F2"/>
    </svg>
    )
    }
  return (
    <div class="sm: justify-center items-center m-0 px-3 min-h-screen">
      <div className="flex justify-between px-3 py-5">
        <button onClick={()=>{navigate(-1);}}>
          <img src="/img/left-arrow.png" className="w-4 h-4"/>
        </button>
        <button >
          <img src="/img/dots.png" className="w-4 h-4" onClick={onClick}/>
        </button>
      </div>

      <div className="buri flex justify h-20 w-full m-auto  cursor-pointer  bg-white">
        <div className="h-20 flex justify-center items-center">
          <div className=" ml-5 w-12">
            <UserSvgPink />
          </div>
        </div>
        <div className = "mt-4 mx-5">
          <div className="text-[#F47C7C] flex items-center">
              <span className="mr-3">{sender}</span>
              <span className="text-sm">  님</span>
            </div>
            <div className="flex items-center text-[#F47C7C] mt-1 text-xs">
              <div className="w-4 mr-1">
                <svg  viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.833 0.166668H2.16634C1.02051 0.166668 0.0830078 1.10417 0.0830078 2.25V14.75C0.0830078 15.8958 1.02051 16.8333 2.16634 16.8333H18.833C19.9788 16.8333 20.9163 15.8958 20.9163 14.75V2.25C20.9163 1.10417 19.9788 0.166668 18.833 0.166668ZM18.4163 4.59375L11.6038 8.85417C10.9268 9.28125 10.0726 9.28125 9.39551 8.85417L2.58301 4.59375C2.32259 4.42708 2.16634 4.14584 2.16634 3.84375C2.16634 3.14584 2.92676 2.72917 3.52051 3.09375L10.4997 7.45834L17.4788 3.09375C18.0726 2.72917 18.833 3.14584 18.833 3.84375C18.833 4.14584 18.6768 4.42708 18.4163 4.59375Z" fill="#F47C7C"/>
                </svg>
              </div>
              &nbsp;{state.letterCount}개
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
      {modal === true ? <Modal_sender modalClose={setModal} sender={sender}/> : null}
    </div>
  );
};

export default SenderUser;
