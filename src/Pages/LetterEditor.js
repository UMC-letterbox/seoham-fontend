import React from "react";
import  {useState, useRef} from "react";
import {Link} from "react-router-dom";
import ModalContainer from "../Components/ModalContainer";
// import "./App.css"

const LetterEditor=() => {
    const [state, setState]= useState({
        author: "",
        content: "",
        date: 0,

    })
    
    const [errorMsg, setErrorMsg]= useState("");
    const [isWritten, setIswritten]= useState(false);
    const [daySelected, setDaySelected] = useState([]); //날짜 선택 여부 - hy 추가
    const [tagSelected, setTagSelected] = useState(""); //태그 선택 여부 - hy 추가
    const authorInput=useRef(); //DOM요소 접근
    const contentInput=useRef();
    //let checkIcon = isWritten ? "✅" : "✔";

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

    const handleTagSelect = (e) => {
        setTagSelected(e.target.value);
        console.log('TAG 선택: ', e.target.value);
    }
    const handleChangeState = (e)=> {
        // console.log(e.target.name);
        // console.log(e.target.value);
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
        if(state.author.length >= 3 && state.content.length >=10){
            setIswritten(true);
        }else{
            setIswritten(false);
        }
        console.log(isWritten);
    }
    const handleSubmit = () => {
        if(state.author.length <3){
            //focus
            authorInput.current.focus();
            
            return ;
        }
        if(state.content.length < 10){
            //focus
            contentInput.current.focus();
            setErrorMsg("편지가 너무 짧습니다. 편지는 10글자 이상이여야 합니다.");
            return ;
        }else{
            setErrorMsg("");
        }
        alert("기본값으로 저장됩니다.");
    }
    function register(){
        
    }
    return (
        <div className="">
            <header className="flex flex-row mx-11 mt-9 mb-2.5">
                <Link to={"/"}>
                    <button><img src="/img/close.png" className="w-3.5 h-3.5"/></button>
                </Link>
                <h2 className="text-center font-bold text-lg flex-grow">편지 작성</h2>
                <button
                    disabled={isWritten}
                    onClick={
                        ()=> {
                            register();
                        }
                    }
                > 
                    {isWritten ? <img src="/img/check-green.png" className="w-4"/> : <img src="/img/check-empty.png" className="w-4"/>}
                </button>
            </header>
            <div className="flex justify-center items-center py-5">
                <div className="w-72">
                    <span className="text-center font-semibold mr-1.5">보낸이:</span>
                    <input className="w-61"
                        placeholder="보낸이를 작성해주세요"
                        ref={authorInput}
                        name="author"
                        value= {state.author}
                        onChange={ handleChangeState}
                    />
                </div>
            </div>
            
            <div className="flex flex-col justify-center items-center">
                
                <div className="w-72 h-96 rounded-t bg-[#F5F5F5] drop-shadow-lg">
                    {/*<div className="flex flex-nowrap">
                        <span className="text-center font-semibold mx-1.5">보낸이</span>
                        <input className="bg-[#F5F5F5] w-61"
                            placeholder="보낸이를 작성해주세요"
                            ref={authorInput}
                            name="author"
                            value= {state.author}
                            onChange={ handleChangeState}
                        />
                    </div>*/}
                    <textarea 
                        className="w-72 h-72 rounded-t bg-[#F5F5F5] "
                        placeholder="편지내용을 작성해주세요"
                        ref={contentInput}
                        name="content"
                        value= {state.content}
                        onChange={ handleChangeState}
                        />
                    <p style={{color: 'red'}} className="text-sm">{errorMsg}</p>
                </div>
                
            </div>

            
            {/*<div>
                <div className="text-center font-semibold">날짜선택</div>
                <select className="w-full"
                    name = "date"
                    value = {state.date}
                    onChange= {handleChangeState}    
                >
                    <option value={20220701}>20220701 </option>
                    <option value={20220702}>20220702 </option>
                    <option value={20220703}>20220703 </option>
                    <option value={20220704}>20220704 </option>
                    <option value={20220705}>20220705 </option>
                </select>
                </div>*/}
            <ModalContainer setSelected={setDaySelected} selected={daySelected}/>

            <div className="flex flex-col justify-center">
                <div className="text-center"> {/* 가져온 부분 */}
                    <select onChange={handleTagSelect} value={tagSelected} className="bg-white w-72 h-10 text-center font-semibold rounded-xl text-[#989898] border border-[#989898]">
                        <option value="-1"># 태그 선택</option>
                        {
                            tags.map((tag) => (
                                <option key={tag.id} value={tag.id}>{tag.name}</option>
                            ))
                        }
                    </select>   
                </div>

                <div className="text-center my-2.5">
                    <button 
                    className=" bg-white decoration-white w-72  h-10 text-center font-semibold rounded-xl text-[#EF9F9F] border border-[#EF9F9F]"
                    > 
                        <Link to={"/selectpaper"}> 편지지선택 </Link>
                    </button>
                </div>
                <div className="text-center ">
                    <button 
                    className=" bg-red-400 decoration-white w-28  h-10 text-center font-semibold rounded-full text-slate-50"
                    onClick={handleSubmit}> 저장하기 </button>
                </div>
            </div>
        </div>
    )
}
export default LetterEditor;