import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../App";
import MyButton3 from "../Components/MyButton3";
import UpButton from "../Components/UpButton";
import Select from "../Components/Select";
import MyButton from "../Components/MyButton";
import MyHeader from "../Components/MyHeader";
import MyButton1 from "../Components/MyButton1";
import Datebox from "../Components/Datebox";
import MainHeader from "../Components/MainHeader";

const Date = () => {
  const tagList = useContext(DiaryStateContext);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  
  //받아온 날짜별 편지 저장용 배열--------------------------------------
  let postsByDates = [];
  //날짜별 편지 받는 api
  function getPostbyDates(){
    fetch(`https://www.duke0410.shop/posts/date`,{
      method: "GET",
      headers: {
        'X-ACCESS-TOKEN': localStorage.getItem('login_token')
      }
    })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if(res.isSuccess == true){
        res.result.map(item => postsByDates.push(item));
        setData(postsByDates)
        console.log(postsByDates);
      }
      else {
        console.log("실패");
      }
    })
  }
  useEffect(() => {
    //날짜별편지조회 Api 연결부분. 이후 test시 주석해제--------------------
    getPostbyDates();
  },[])

/*
  useEffect(() => {
    setData(tagList);
  }, [tagList]);*/

  return (
    <div class="m-0 px-3 min-h-screen">
      {/*<MyHeader
        headText={""}
        leftChild={<MyButton text={"서함"} onClick={() => alert("안녕")} />}
        rightChild={
          <MyButton1 text={"프로필"} onClick={() => alert("프로필")} />
        }
      />*/}
      <MainHeader />
      <Select
        TagText={
          <MyButton text={"태그별"} onClick={() => {navigate("/home");}} isClick={false}/>
        }
        DateText={
          <MyButton text={"날짜별"} onClick={() => navigate("/date")} isClick={true}/>
        }
        SenderText={
          <MyButton text={"보낸이별"} onClick={() => navigate("/sender")} isClick={false}/>
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
      <div class="py-4">
        <Datebox dataList={data} />
      </div>
    </div>
  );
};

export default Date;
