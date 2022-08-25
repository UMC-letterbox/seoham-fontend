import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../App";
import MyButton3 from "../Components/MyButton3";
import UpButton from "../Components/UpButton";
import Select from "../Components/Select";
import MyButton from "../Components/MyButton";
import MyHeader from "../Components/MyHeader";
import MyButton1 from "../Components/MyButton1";
import Senderbox from "../Components/Senderbox";
import MainHeader from "../Components/MainHeader";

const Sender = () => {
  const tagList = useContext(DiaryStateContext);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  console.log(tagList)
  /*
  useEffect(() => {
    setData(tagList);
  }, [tagList]);
  */
    //보낸이목록 저장용 배열
    //let senders = []; //map으로 받아서 하면 안되네요
  //보낸이 목록조회
  function getSenderList(){
    const userId = JSON.parse(localStorage.getItem("userIdx"));
    fetch(`https://www.duke0410.shop/posts/senders?userIdx=${userId}`,{
      method: "GET",
      headers: {
        "x-access-token": localStorage.getItem('login_token')
      }
    })
    .then((res)=>res.json())
    .then((res) => {
      console.log(res);
      if(res.isSuccess){
        console.log('보낸이 리스트', res.result);
        setData(res.result);
        //res.result.map(item => senders.push(item));
      }
      else{
        console.log("실패");
      }
    })
  }
  useEffect(() => {
    //보낸이목록 불러오기 API 부분, 이후 test 시 주석해제
    getSenderList();
  }, [])




  return (
    <div class="sm: justify-center items-center m-0 px-3 min-h-screen">
      {/*<MyHeader
        headText={""}
        leftChild={<MyButton text={"서함"} onClick={() => alert("안녕")} />}
        rightChild={
          <MyButton1 text={"프로필"} onClick={() => alert("프로필")} />
        }
      />*/}
      <MainHeader />
      <Select
        TagText={<MyButton text={"태그별"} onClick={() => {navigate("/home");}} isClick={false}/>
        }
        DateText={
          <MyButton text={"날짜별"} onClick={() => navigate("/date")} isClick={false}/>
        }
        SenderText={
          <MyButton text={"보낸이별"} onClick={() => navigate("/sender")} isClick={true}/>
        }
      />
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
      <div class="whitespace-nowrap">
        <Senderbox tagList={data} />
      </div>
    </div>
  );
};

export default Sender;
