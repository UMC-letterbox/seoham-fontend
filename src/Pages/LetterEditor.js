import React from "react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import ModalContainer from "../Components/ModalContainer";
import { useNavigate, useLocation } from "react-router-dom";
import { render } from "@testing-library/react";
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
    tagId: 0,
    letterIdx: 0, //편지지 ID
    //postIdx: 0, 발행된 편지 Id -> 수정, 삭제시 사용
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [isWritten, setIswritten] = useState(false);
  const [daySelected, setDaySelected] = useState([]); //날짜 선택 여부 - hy 추가
  const [tagSelected, setTagSelected] = useState(""); //태그 선택 여부 - hy 추가
  const [tags, setTags] = useState([]);
  const senderInput = useRef(); //DOM요소 접근
  const contentInput = useRef();
  const navigate = useNavigate();
  const { state } = useLocation();
  const userId = jsonLocalStorage.getItem("userIdx");
  //추가된 state들
  const [testTag, setTestTag] = useState([]);
  const [visible, setvisible] = useState(false);

  let letsgo = 0;
  // const {paper} = state;
  const goSelectPaper = () => {
    jsonLocalStorage.setItem("letterobj", data);
    navigate("/selectpaper");
  };

  function setInit() {
    //로컬스토리지에서 기존의 데이터 불러오기
    let chk = jsonLocalStorage.getItem("letterobj");
    if (chk != null) {
      setData({
        ...data,
        sender: chk.sender,
        content: chk.content,
        date: chk.date,
      });
      console.log(data);
    } else {
      return;
    }
  }

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
    const temp = jsonLocalStorage.getItem("letterobj");
    const { paper } = state;
    const newItem = {
      userIdx: userId,
      sender: temp.sender,
      date: temp.date,
      tagIdx: parseInt(temp.tagId),
      content: temp.content,
      letterIdx: parseInt(state),
    };
    console.log("서버에 전달될 newItem", newItem);
    return newItem;
  };
  const handleSubmit = () => {
    console.log("최종 data", data);
    let newItem = onCreate();
    register(newItem);
  };
  function register(newItem) {
    console.log(newItem);
    fetch("https://www.duke0410.shop/posts/new", {
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
          localStorage.removeItem("letterobj");
          navigate("/home");
        }
      });
  }

  function getTagList(userId) {
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
        setTags(newArray);
      })
      .catch((err) => console.log(err));
  }
  React.useEffect(() => {
    //태그목록 불러오기
    getTagList(userId);
    setInit();
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

  return (
    <div className="overflow-scroll ">
      <header className="flex flex-row mx-11 mt-9 mb-2.5">
        <Link to={"/home"}>
          <button>
            <img src="/img/close.png" className="w-3.5 h-3.5" />
          </button>
        </Link>
        <h2 className="buri text-center font-bold text-lg flex-grow">
          편지 작성
        </h2>
        <button disabled={!isWritten} onClick={handleSubmit}>
          {isWritten ? (
            <img src="/img/check-green.png" className="w-4" />
          ) : (
            <img src="/img/check-empty.png" className="w-4" />
          )}
        </button>
      </header>
      <div className="buri flex justify-center items-center py-5">
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
        <div className="w-72 h-96 rounded-t bg-[#F5F5F5] drop-shadow-lg">
          <textarea
            className="w-72 h-72 rounded-t bg-[#F5F5F5] text-black buri"
            placeholder="편지내용을 작성해주세요"
            ref={contentInput}
            name="content"
            value={data.content}
            onChange={handleChangeState}
          />
          <p style={{ color: "red" }} className="text-sm">
            {errorMsg}
          </p>
        </div>
      </div>

      <ModalContainer setSelected={setDaySelected} selected={daySelected} />
      <div className="flex flex-col justify-center">
        <div className="text-center my-2.5">
          <button
            className=" bg-white decoration-white w-72  h-10 text-center font-semibold rounded-xl text-[#989898] border border-[#989898]"
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

        <div className="text-center">
          <select
            onChange={handleChangeState}
            value={tagSelected}
            name="tagId"
            className=" w-72 h-10 text-center font-semibold rounded-xl text-[#989898] border border-[#989898]"
          >
            <option value="-1">
              {" "}
              {data.tagId == " "
                ? "# 태그 선택"
                : tags.map((tag) => {
                    if (tag.tagIdx == data.tagId) {
                      return tag.tagName;
                    }
                  })}
            </option>
            {tags.map((tag) => (
              <option key={tag.tagIdx} value={tag.tagIdx}>
                {tag.tagName}
              </option>
            ))}
          </select>
        </div>
        <div className="text-center my-2.5">
          <button
            className=" bg-white decoration-white w-72  h-10 text-center font-semibold rounded-xl text-[#EF9F9F] border border-[#EF9F9F]"
            onClick={goSelectPaper}
          >
            {" "}
            편지지선택
          </button>
        </div>
      </div>
    </div>
  );
};
export default LetterEditor;
