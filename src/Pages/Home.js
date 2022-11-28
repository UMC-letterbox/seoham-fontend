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
import Tagbox_hy from "../Components/Tagbox_hy";
import MainHeader from "../Components/MainHeader";

const Home = () => {
  const [taglist, setTaglist] = useState([]);
  const navigate = useNavigate();
  // const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // useEffect(() => {
  //   localStorage.setItem("theme", theme);
  //   document.body.className = theme;
  // }, [theme]);

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("userIdx"));
    fetch(`https://www.duke0410.shop/posts/tags?userIdx=${userId}`, {
      method: "GET",
      headers: {
        "X-ACCESS-TOKEN": localStorage.getItem("login_token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const currentTags = [];
        res.result.map((item) => currentTags.push(item));
        console.log(res.result);
        console.log(currentTags);
        let newArray = [...currentTags];
        setTaglist(newArray);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(typeof taglist);
  console.log(typeof taglist.taglist);
  return (
    <div class="sm: justify-center items-center m-0 px-3 min-h-screen`">
      {/* <MyHeader
        headText={""}
        leftChild={<MyButton text={"서함"} onClick={() => alert("안녕")} />}
        rightChild={
          <MyButton1 text={"프로필"} onClick={() => alert("프로필")} />
        }
      /> */}
      <MainHeader />
      <Select
        TagText={
          <MyButton
            text={"태그별"}
            onClick={() => {
              navigate("/home");
            }}
            isClick={true}
          />
        }
        DateText={
          <MyButton
            text={"날짜별"}
            onClick={() => navigate("/date")}
            isClick={false}
          />
        }
        SenderText={
          <MyButton
            text={"보낸이별"}
            onClick={() => navigate("/sender")}
            isClick={false}
          />
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
          navigate("/selectlettertype");
        }}
      />
      {/*
      <div class="py-4 flex-wrap">
        <InitialTagbox tagList={data} />
      </div>
      */}
      <div className="flex justify-center">
        <Tagbox_hy taglist={taglist} />
      </div>
      {/*<h2 class="text-red-400 pt-64">Hello World</h2>*/}
    </div>
  );
};

export default Home;
