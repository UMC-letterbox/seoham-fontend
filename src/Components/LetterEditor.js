import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import MyButton2 from "./MyButton2";
import MyHeader from "./MyHeader";

const LetterEditor = () => {
  const contentRef = useRef();
  const [content, setContent] = useState("");
  const [date, setDate] = useState();
  const [sender, setSender] = useState("");
  const navigate = useNavigate();
  const getRandid = Math.floor(Math.random() * 4);
  return (
    <div>
      <MyHeader
        headText={"편지작성"}
        leftChild={<MyButton2 text={"X"} onClick={() => navigate(-1)} />}
        rightChild={<MyButton2 text={"Y"} onClick={() => alert("작성완료")} />}
      />
      <div class="sm: justify-center items-center m-0 px-3 bg-gray-200 min-h-screen">
        <div>
          <textarea
            class="box-border w-full sm:min-h-full resize-y rounded-md my-5 bg-pink-200"
            placeholder="입력하시오"
            ref={contentRef}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          {/* 사파리에선 이 방법이 안 먹혀!! */}
          <input
            class="bg-transparent cursor-pointer float-right"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
          />
          <input
            class="float-right bg-transparent"
            type="text"
            placeholder="보낸이"
            value={sender}
            onChange={(e) => setSender(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default LetterEditor;
