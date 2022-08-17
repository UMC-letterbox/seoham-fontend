import React from "react";
import  {useState, useRef} from "react";
import {Link} from "react-router-dom";
import ModalContainer from "../Components/ModalContainer";
import { useNavigate, useLocation } from 'react-router-dom';
import { render } from "@testing-library/react";
const jsonLocalStorage = {
    setItem: (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    },
    getItem: (key) => {
        return JSON.parse(localStorage.getItem(key));
    },
};
const LetterEditor=() => {
    const [data, setData]= useState({
        
        userIdx:0,
        sender: "",
        content: "",
        date: 0,
        tagId: 0,
        letterIdx: 0, //편지지 ID
        //postIdx: 0, 발행된 편지 Id -> 수정, 삭제시 사용
    });
    
    const [errorMsg, setErrorMsg]= useState("");
    const [isWritten, setIswritten]= useState(false);
    const [daySelected, setDaySelected] = useState([]); //날짜 선택 여부 - hy 추가
    const [tagSelected, setTagSelected] = useState(""); //태그 선택 여부 - hy 추가
    const senderInput=useRef(); //DOM요소 접근
    const contentInput=useRef();
    const navigate = useNavigate();
    const {state} = useLocation();
    const userId = jsonLocalStorage.getItem("userIdx");
    let letsgo = 0;
    // const {paper} = state;
    const goSelectPaper = () => {
        jsonLocalStorage.setItem('letterobj', data);
        navigate("/selectpaper");
    }
    function setInit(){
        //로컬스토리지에서 기존의 데이터 불러오기
        let chk = jsonLocalStorage.getItem('letterobj');
        if(chk != null){
            setData({
                sender: chk.sender,
                content: chk.content,
            }
            );
            console.log(data);
        }else {
            return ;
        }
    }
    //select 작동 확인용 배열 변수 (getTags 함수 썼다가 헷갈릴까봐 이걸로 사용합니다!) - hy 추가
    const tags = [
        {
            id: 0,
            name: "#HBD",
            color: "#FE8F8F"
        },
        {
            id: 1,
            name: "#Friends",
            color: "#FCD2D1"
        }
    ];
    const currentTags = [];
    const chkCondition= () => {
        if(data.sender.length >= 3 && data.content.length >=10){
            setIswritten( true);
        }else{
            setIswritten(false);
        }
    }
    const handleChangeState = (e)=> {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
        chkCondition();
    }
    const onCreate = () => {
        //새로운 편지 만들기
        const temp = jsonLocalStorage.getItem('letterobj');
        const {paper} = state;
        const newItem = {
            userIdx : userId,
            sender : temp.sender,
            date : temp.date,
            tagIdx : temp.tagId,
            content : temp.content,
            letterIdx: state,
        };
        console.log("서버에 전달될 newItem",newItem);
        return newItem;
    }
    const handleSubmit = () => {
        // if(data.sender.length <3){
        //     //focus
        //     senderInput.current.focus();
        //     return ;
        // }
        // if(data.content.length < 10){
        //     //focus
        //     contentInput.current.focus();
        //     setErrorMsg("편지가 너무 짧습니다. 편지는 10글자 이상이여야 합니다.");
        //     return ;
        // }else{
        //     setErrorMsg("");
        // }
        console.log("최종 data", data);
        let newItem = onCreate();
        register(newItem);
    }
    function register(newItem){
        console.log(newItem);
        fetch("/post/new", {
                method: "POST",
                headers: {
                    Authorization: localStorage.getItem('login_token')
                },
                body: JSON.stringify(newItem),
        })
        .then((res) => res.json())
        .then((res)=> {
            if(res.isSuccess === true){
                console.log(res.result);
                //초기화
                setData({
                    userIdx:0,
                    sender: "",
                    content: "",
                    date: 0,
                    tagId: 0,
                    letterIdx: 0,
                });
                localStorage.removeItem("letterobj");
            }
        })
    }
    function getTagList(userId){
        fetch("API주소",{
            method: "GET",
            headers: {
                Authorization: localStorage.getItem('login_token')
            },
            body: JSON.stringify(userId),
        })
        .then((res) => res.json())
        .then((data) => {
            data.map(item => currentTags.push(item))
        })
        .catch(err => console.log(err))
    }
    React.useEffect(() => {
        //태그목록 불러오기
        getTagList(userId);
    },[]);
    React.useEffect(()=>{
        setData({
            ...data,
            date: parseInt(`${daySelected[0]}${daySelected[1]}${daySelected[2]}`),
        });
    },[daySelected]);
    React.useEffect(()=>{
        chkCondition();
    },[data]);
    return (
        <div className="overflow-scroll">
            <header className="flex flex-row mx-11 mt-9 mb-2.5">
                <Link to={"/"}>
                    <button><img src="/img/close.png" className="w-3.5 h-3.5"/></button>
                </Link>
                <h2 className="text-center font-bold text-lg flex-grow">편지 작성</h2>
                <button
                    disabled={isWritten}
                    onClick={handleSubmit}> 
                    {isWritten ? <img src="/img/check-green.png" className="w-4"/> : <img src="/img/check-empty.png" className="w-4"/>}
                </button>
            </header>
            <div className="flex justify-center items-center py-5">
                <div className="w-72">
                    <span className="text-center font-semibold mr-1.5">보낸이:</span>
                    <input className="w-61"
                        placeholder="보낸이를 작성해주세요"
                        ref={senderInput}
                        name="sender"
                        value={data.sender}
                        onChange={ handleChangeState}
                    />
                </div>
            </div>
            
            <div className="flex flex-col justify-center items-center">
                
                <div className="w-72 h-96 rounded-t bg-[#F5F5F5] drop-shadow-lg">
                    
                    <textarea 
                        className="w-72 h-72 rounded-t bg-[#F5F5F5] "
                        placeholder="편지내용을 작성해주세요"
                        ref={contentInput}
                        name="content"
                        value= {data.content}
                        onChange={ handleChangeState}
                        />
                    <p style={{color: 'red'}} className="text-sm">{errorMsg}</p>
                </div>
                
            </div>
            
            <ModalContainer setSelected={setDaySelected} selected={daySelected}/>

            <div className="flex flex-col justify-center">
                <div className="text-center"> {/* 가져온 부분 */}
                    <select onChange={handleChangeState} value={tagSelected} name="tagId" className="bg-white w-72 h-10 text-center font-semibold rounded-xl text-[#989898] border border-[#989898]">
                        <option value="-1"># 태그 선택</option>
                        {
                            tags.map((tag) => (
                                <option key={tag.id} value={tag.id}>{tag.name}</option>
                            ))
                            //api로 태그목록 불러오기 성공하면 아래 주석 해제
                            // currentTags.map((tag) => (
                            //     <option key={tag.id} value={tag.id}>{tag.name}</option>
                            // ))
                        }
                    </select>   
                </div>
                <div className="text-center my-2.5">
                    <button className=" bg-white decoration-white w-72  h-10 text-center font-semibold rounded-xl text-[#EF9F9F] border border-[#EF9F9F]"
                    onClick = {goSelectPaper}> 편지지선택</button>
                    
                </div>
                <div className="text-center ">
                <button className=" bg-red-400 decoration-white w-28  h-10 text-center font-semibold rounded-full text-slate-50"
                onClick = {
                        () => {
                            console.log(state);
                            setInit();
                            chkCondition();
                        }
                    }>작성중인 편지내용 불러오기</button>
                </div>
            </div>
        </div>
    )
}
export default LetterEditor;