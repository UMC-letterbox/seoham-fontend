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

const Tag = () => {
  const tagList = useContext(DiaryStateContext);
  const { tagName } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    const Name = `${tagName}`;
    setData(tagList.filter((it) => Name === it.tagName));
  }, [tagList]);
  return (
    <div class="sm: justify-center items-center m-0 px-3 bg-gray-200 min-h-screen">
      <MyHeader
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
      />
      <Select
        TagText={
          <MyButton text={"일단 이걸로"} onClick={() => alert("안녕")} />
        }
        DateText={""}
        SenderText={""}
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
      <Viewbox tagList={data} />
    </div>
  );
};

export default Tag;
