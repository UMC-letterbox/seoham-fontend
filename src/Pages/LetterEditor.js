import React from "react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import ModalContainer from "../Components/ModalContainer";
import { useNavigate, useLocation } from "react-router-dom";
import { render } from "@testing-library/react";
import PaperModalContainer from "../Components/PaperModalContainer";
import papers from "./SelectPaper";
const jsonLocalStorage = {
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
};
const LetterEditor = () => {
  const [data, setData] = useState({
    userIdx: 0,
    sender: "",
    content: "",
    date: 0,
    tagIdx: [],
    letterIdx: 0, //편지지 ID
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [isWritten, setIswritten] = useState(false);
  const [daySelected, setDaySelected] = useState([]); //날짜 선택 여부 - hy 추가
  const [tagSelected, setTagSelected] = useState(""); //태그 선택 여부 - hy 추가
  const [paperSelected, setPaperSelected] = useState(0); // 편지 선택 - js 추가
  const [tags, setTags] = useState([]);
  const senderInput = useRef(); //DOM요소 접근
  const contentInput = useRef();
  const navigate = useNavigate();
  const { state } = useLocation();
  const userId = jsonLocalStorage.getItem("userIdx");
  //추가된 state들
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [testTag, setTestTag] = useState([]);
  const [visible, setvisible] = useState(false);

  const chkCondition = () => {
    if (data.sender.length >= 3 && data.content.length >= 10) {
      setIswritten(true);
    } else {
      setIswritten(false);
    }
  };
  //추가된 부분!
  const chkVisible = () => {
    if (visible === false) {
      setvisible(true);
    } else {
      setvisible(false);
    }
  };
  //그 삭제시 console만 이상하고 나머지는 아주 잘 됨!(추가된 버전 2)
  const handleCheckboxState = (e) => {
    if (e.target.checked === true) {
      testTag.push(e.target.value);
      const set = new Set(testTag);
      const finalTags = [...set];
      setTestTag(finalTags);
    } else {
      const set = new Set(testTag);
      const finalTags = [...set];
      const newindex = finalTags.indexOf(e.target.value);
      finalTags.splice(newindex, 1);
      console.log(finalTags.toString());
      // const index = testTag.indexOf(e.target.value);
      // testTag.splice(index,1);
      setTestTag(finalTags);
      //여기가 왜 이럴깡..... 넣었을때는 또 잘 찍히는데 흐음... 얘가 바로바로 삭제가 안되는건가?
    }
    console.log(testTag.toString());
  };

  const handleChangeState = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    chkCondition();
  };
  const onCreate = () => {
    //새로운 편지 만들기
    // let newTaglist = [];
    // newTaglist.push(testTag.map((v) => parseInt(v)));

    const newItem = {
      userIdx: userId,
      sender: data.sender,
      date: data.date,
      tagIdx: testTag.map((v) => parseInt(v)),
      content: data.content,
      letterIdx: parseInt(paperSelected),
    };
    console.log("서버에 전달될 newItem", newItem);
    return newItem;
  };
  const handleSubmit = () => {
    let newItem = onCreate();
    register(newItem);
  };
  function register(newItem) {
    console.log(newItem);
    fetch("https://seohamserver.shop/posts/new", {
      method: "POST",
      headers: {
        "X-ACCESS-TOKEN": localStorage.getItem("login_token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.isSuccess === true) {
          console.log(res.result);
          //초기화
          setData({
            userIdx: 0,
            sender: "",
            content: "",
            date: 0,
            tagId: 0,
            letterIdx: 0,
          });
          navigate("/home");
        }
      });
  }

  function getTagList(userId) {
    fetch(`https://seohamserver.shop/posts/tags?userIdx=${userId}`, {
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
        setTags(newArray);
      })
      .catch((err) => console.log(err));
  }
  React.useEffect(() => {
    //태그목록 불러오기
    getTagList(userId);
  }, []);
  React.useEffect(() => {
    let tempdate = parseInt(
      `${daySelected[0]}${daySelected[1]}${daySelected[2]}`
    );
    console.log(tempdate);
    if (isNaN(tempdate)) {
      return;
    } else {
      setData({
        ...data,
        date: tempdate,
      });
    }
  }, [daySelected]);
  React.useEffect(() => {
    chkCondition();
  }, [data]);
  console.log("선택된 편지지 확인 at letterEdtor", paperSelected);
  console.log("testTag들",testTag);
  return (
    <div className={`${theme} overflow-scroll`}>
      <header className="flex flex-row mx-11 mt-9 mb-2.5">
        <Link to={"/home"}>
          <button>
            <img src="/img/close.png" className="w-3.5 h-3.5" />
          </button>
        </Link>
        <h2 className="text-center font-bold text-lg flex-grow">편지 작성</h2>
        <button disabled={!isWritten} onClick={handleSubmit}>
          {isWritten ? (
            <img src="/img/check-green.png" className="w-4" />
          ) : (
            <img src="/img/check-empty.png" className="w-4" />
          )}
        </button>
      </header>
      <div className="flex justify-center items-center py-5">
        <div className="w-72">
          <span className="text-center font-semibold mr-1.5">보낸이:</span>
          <input
            className="w-61 bg-transparent"
            placeholder="보낸이를 작성해주세요"
            ref={senderInput}
            name="sender"
            value={data.sender}
            onChange={handleChangeState}
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <textarea
          className="w-72 h-72 rounded-t bg-[#F5F5F5] drop-shadow-lg text-black dark:bg-[#303435]"
          placeholder="편지내용을 작성해주세요"
          ref={contentInput}
          name="content"
          value={data.content}
          onChange={handleChangeState}
          style={{
            backgroundImage: `url(img/paper${paperSelected}.jpg)`
          }}
        />
        <p style={{ color: "red" }} className="text-sm">
          {errorMsg}
        </p>
      </div>
      <div className="w-72 flex-row m-auto">
          <ModalContainer setSelected={setDaySelected} selected={daySelected} />
        </div>
      <div className="flex flex-col justify-center">
        <div className="text-center my-2.5">
          <button
            className=" decoration-white w-72  h-10 text-center font-semibold rounded-xl text-[#989898] border border-[#989898] dark:bg-[#47484A]"
            onClick={chkVisible}
          >
            {" "}
            # 태그 선택
          </button>
        </div>
        {visible === true ? (
          <>
            <div className="text-center h-4 text-[#BABABA] my-4 font-semibold">
              사용할 태그를 선택해주세요
            </div>
            <div className="overflow-y-scroll grid grid-cols-3 place-items-center h-15 mx-6 my-1">
              {tags.map((tag) => (
                <label>
                  {testTag.includes(`${tag.tagIdx}`) ? (
                    <>
                      {" "}
                      <input
                        key={tag.tagIdx}
                        type="checkbox"
                        onChange={handleCheckboxState}
                        value={tag.tagIdx}
                        id="check_option"
                        checked={true}
                        class="hidden peer"
                      />
                      <span className="border my-1 -mx-1 inline-block rounded-full text-center bg-[#ef9f9f] text-white w-24 h-7 border-[#ef9f9f]">
                        # {tag.tagName}
                      </span>
                    </>
                  ) : (
                    <>
                      <input
                        key={tag.tagIdx}
                        type="checkbox"
                        onChange={handleCheckboxState}
                        value={tag.tagIdx}
                        id="check_option"
                        class="hidden peer"
                      />
                      <span className="border my-1 -mx-1 inline-block rounded-full text-center text-[#989898] w-24 h-7 border-[#989898] bg-transparent dark:bg-[#48484A]">
                        # {tag.tagName}
                      </span>
                    </>
                  )}
                </label>
              ))}
            </div>
          </>
        ) : null}

        <div className="text-center my-2.5">
          <PaperModalContainer
            setSelected={setPaperSelected}
            selected={paperSelected}
          />
        </div>
      </div>
    </div>
  );
};
export default LetterEditor;
