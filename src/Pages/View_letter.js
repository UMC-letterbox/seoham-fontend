import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Menubox from "../Components/Menubox";
import * as Data from "../getTags";
import "../css/font.css";
import Tag from "./Tag";
function View_letter() {
  //param 받기. 편지보는 버튼에서 연결시키기 - 지금은 임의로 확인하기 위해 프로필이랑 연결함
  const useParam = useParams();
  const [post, setPost] = useState();
  const tagId = useParam.tagId;
  const postId = useParam.id;
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  let tags = [];
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);
  // console.log("id체크", tagId, postId);
  let data = [];
  useEffect(() => {
    fetch(`https://seohamserver.shop/posts/${postId}`, {
      //postIdx == useParams의 id // ~/posts/{id} 이렇게 쓰면 될 듯
      method: "GET",
      headers: {
        "X-ACCESS-TOKEN": localStorage.getItem("login_token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        let thisPost = [];
        thisPost = res.result;
        console.log(thisPost);
        setPost(thisPost);
      });
  }, []);
  
  const [isopen, setOpen] = useState(false);
  const navigate = useNavigate();

  const onClick = () => {
    setOpen((current) => !current);
  };
  const clickBack = () => {
    navigate(-1);
  };

  const modiLetter = () => {
    console.log("편지 수정");
    navigate(`/letterupdate/${postId}`);
    //navigate로 넘기기?
  };

  const deleteLetter = () => {
    console.log("편지 삭제");
    Data.deleteLetter(tagId, postId);

    //
    fetch(`https://seohamserver.shop/posts/delete/${postId}`, {
      method: "DELETE",
      headers: {
        "X-ACCESS-TOKEN": localStorage.getItem("login_token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        //console.log(res)
        if (res.isSuccess === true) {
          window.alert("편지가 삭제되었습니다.");
        } else {
          window.alert("오류가 발생했습니다.");
        }
      })
      .catch((err) => console.log(err));
    //

    navigate(-1);
  };

  const TagView = (i) =>{
    console.log("tagView 실행");
    console.log(post.tagName[i]);
    return(
      <span 
        //style={{backgroundColor: tColor}}
        className=" px-6 py-2 rounded-full shadow-lg text-white">
          {post?.tagName[i]}
      </span>
    )
  }

  // function makeTagList(thisPost){

  //   console.log(thisPost?.tagName[0]);
  //   let le = thisPost?.tagColor.length;
  //   console.log(le, "length");
  //   for(let i = 0;i <=le; i++){
  //     tags.push({
  //       name: thisPost?.tagName[i],
  //       color: thisPost?.tagColor[i]
  //     });
  //   }
  //   console.log(tags);
  //   console.log("taglist 함수호출됨");
  // }

  return (
    <div className={`${theme} h-screen`}>
      <div className="flex justify-between p-5">
        <button onClick={clickBack}>
          <img src="/img/left-arrow.png" className="w-4 h-4" />
        </button>
        {isopen ? (
          <Menubox
            menuContents={["수정", "삭제"]}
            menuFunc={[modiLetter, deleteLetter]}
          />
        ) : null}
        <button onClick={onClick}>
          <img src="/img/dots.png" className="w-4 h-4" />
        </button>
      </div>
      <div className="mx-10 my-5">
        <span>보낸이: {post?.sender}</span>
        <span className="text-sm">&nbsp;님</span>
      </div>
      <div
        style={{
          backgroundImage: `url('/img/paper${post?.letterIdx + 1}.jpg')`,
        }}
        className="h-4/6 mx-10 p-3 bg-gray-100 shadow-lg rounded-md"
      >
        <div className="w-11/12 h-full m-2 overflow-y-auto gangwon text-xl text-black">
          {post?.content}
        </div>
      </div>
      <div className="flex justify-end mt-5 mx-10">
        <span className="text-rose-300 border-y-2 border-rose-300 py-2">
          <span>날짜: {post?.date.slice(0, 10)}&nbsp;</span>
        </span>
      </div>
      <div className="flex justify-start mt-2 mx-10">
        {post?.tagName.map((t, index)=>( 
          <span 
            style={{backgroundColor: post?.tagColor[index]}}
            className=" px-6 py-2 rounded-full shadow-lg text-white m-2">
              {post?.tagName[index]}
          </span>))}
      </div>
      
    </div>

  );
}

export default View_letter;
