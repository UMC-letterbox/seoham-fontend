import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Next from "./Pages/Next";
import New from "./Pages/New";
import Tag from "./Pages/Tag";
import React, { useReducer, useRef } from "react";
import Date from "./Pages/Date";
import Sender from "./Pages/Sender";
import SenderUser from "./Pages/SenderUser";
import Letter from "./Pages/Letter";
import View from "./Pages/View";
import SelectLetterType from "./Pages/New";
import FileEditor from "./Pages/FileEditor";
import LetterEditor from "./Pages/LetterEditor";
import SelectPaper from "./Pages/SelectPaper";
import New_tag from "./Pages/New_tag";
import View_tags from "./Pages/View_tags";
import View_letter from "./Pages/View_letter";
import FindId from "./Pages/FindId";
import FindPw from "./Pages/FindPW";
import Create from "./Pages/Create";
import LoginPage from "./Pages/LoginPage";
import Contract from "./Pages/Contract";
import Mypage from "./Pages/Mypage";
import Modi_tag from "./Pages/Modi_tag";
import Landing from "./Pages/Landing";
import Letterupdate from "./Pages/Letterupdate";
const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const newItem = {
        ...action.data,
      };
      newState = [newItem, ...state];
      break;
    }
    default:
      return state;
  }
  return newState;
};

const dummyData = [
  {
    id: 1,
    tagName: "NewYear",
    sender: "래비",
    date: 1738179241923,
    content: "새해복 많이 받으렴",
    randid: Math.floor(Math.random() * 3) + 1,
  },
  {
    id: 2,
    tagName: "Christmas",
    sender: "아리스",
    date: 1738179241916,
    content: "메리크리스마스",
    randid: Math.floor(Math.random() * 3) + 1,
  },
  {
    id: 3,
    tagName: "Spring",
    sender: "무지",
    date: 1738179241923,
    content: "봄이 그렇게 좋냐 멍청이들아",
    randid: Math.floor(Math.random() * 3) + 1,
  },
  {
    id: 4,
    tagName: "Spring",
    sender: "앨리스",
    date: 1738179241918,
    content: "아임 쏘 매드",
    randid: Math.floor(Math.random() * 3) + 1,
  },
  {
    id: 5,
    tagName: "NewYear",
    sender: "래비",
    date: 1660469314000,
    content: "새해복 많이 받으렴",
    randid: Math.floor(Math.random() * 3) + 1,
  },
  {
    id: 6,
    tagName: "NewYear",
    sender: "래비",
    date: 1738179241923,
    content: "새해복 많이 받으렴",
    randid: Math.floor(Math.random() * 3) + 1,
  },
  {
    id: 7,
    tagName: "NewYear",
    sender: "래비",
    date: 1738179241923,
    content: "새해복 많이 받으렴",
    randid: Math.floor(Math.random() * 3) + 1,
  },
  {
    id: 8,
    tagName: "NewYear",
    sender: "래비",
    date: 1738179241923,
    content: "새해복 많이 받으렴",
    randid: Math.floor(Math.random() * 3) + 1,
  },
  {
    id: 9,
    tagName: "NewYear",
    sender: "래비",
    date: 1660469314000,
    content: "새해복 많이 받으렴",
    randid: Math.floor(Math.random() * 3) + 1,
  },
];

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, dummyData);

  const dataId = useRef(0);
  //CREATE
  const onCreate = (date, tagName, sender, content, randid) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        tagName,
        sender,
        content,
        randid: Math.floor(Math.random() * 3) + 1,
      },
    });
    dataId.current += 1;
  };
  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            
            <Route path="/next" element={<Next />} />
            <Route path="/new" element={<New />} />
            <Route path="/tag/:tagName" element={<Tag />} />
            <Route path="/date" element={<Date />} />
            <Route path="/sender" element={<Sender />} />
            <Route path="/senderUser/:sender" element={<SenderUser />} />
            <Route path="/letter" element={<Letter />} />
            <Route path="/view/:id" element={<View />} />
            <Route path="/selectlettertype" element={<SelectLetterType />} />
            <Route path="/fileeditor" element={ <FileEditor />} />
            <Route path="/lettereditor" element={<LetterEditor />} />
            <Route path="/letterupdate/:postId" element={<Letterupdate />} />
            <Route path="/selectpaper" element={<SelectPaper />} />
            <Route path="/newTag" element={<New_tag />}/>
            <Route path="/tags/:id" element={<View_tags />}/>
            <Route path="/letter/:tagId/:id" element={<View_letter/>}/>
            <Route path="/lettereditor/:postId" element={<LetterEditor />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/modiTag" element={<Modi_tag/>}/>

            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/findid" element={<FindId/>}/>
            <Route path="/findpw" element={<FindPw/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/contract" element={<Contract/>}/>
          </Routes>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
