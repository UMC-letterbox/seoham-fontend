import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../App";
import MyButton3 from "../Components/MyButton3";
import UpButton from "../Components/UpButton";
import Select from "../Components/Select";
import MyButton from "../Components/MyButton";
import MyHeader from "../Components/MyHeader";
import MyButton1 from "../Components/MyButton1";
import InitialTagbox from "../Components/InitialTagbox";

const Home = () => {
  const tagList = useContext(DiaryStateContext);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(tagList);
  }, [tagList]);
  return (
    <div class="sm: justify-center items-center m-0 px-3 bg-gray-200 min-h-screen">
      <MyHeader
        headText={""}
        leftChild={<MyButton text={"서함"} onClick={() => alert("안녕")} />}
        rightChild={
          <MyButton1 text={"프로필"} onClick={() => alert("프로필")} />
        }
      />
      <Select
        TagText={
          <MyButton
            text={"태그별"}
            onClick={() => {
              navigate("/");
            }}
          />
        }
        DateText={
          <MyButton text={"날짜별"} onClick={() => navigate("/date")} />
        }
        SenderText={
          <MyButton text={"보낸이별"} onClick={() => navigate("/sender")} />
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
      <div class="py-4 flex-wrap">
        <InitialTagbox tagList={data} />
      </div>
      <h2 class="text-red-400 pt-64">Hello World</h2>
    </div>
  );
};

export default Home;
