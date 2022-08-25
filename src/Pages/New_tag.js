import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import * as Data from '../getTags';
//import styled from "styled-components"; 물어보고 써보기

function New_tag() {
    const [color, setColor] = useState('#BF9270');
    const [tagName, setTagName] = useState("");
    const navigate = useNavigate();

    const changeTag = (event) => setTagName(event.target.value);
    const clickCheck = () => {
        if (tagName.length === 0) {
            window.alert("태그 이름을 입력해주세요");
        }
        else{
            // 데이터 저장 부분
            Data.addTag(tagName, color); //api 연결 후 삭제

            //
            fetch('https://www.duke0410.shop/posts/tags/new', {
                method: 'POST',
                headers: {
                    "X-ACCESS-TOKEN": localStorage.getItem("login_token"),
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify({
                    tagName: tagName,
                    tagColor: color
                })
            })
            .then(res => res.json())
            .then(res => {
                if(res.success) {
                    console.log(res);
                    alert("저장 완료");
                }
            })
            //

            navigate(-1);    
        }
    }



    return (
        <div>
            <div className="flex justify-between m-5">
                <Link to={'/home'}>
                    <button>
                        <img src="/img/close.png" className="w-4 h-4"/>
                    </button>
                </Link>
                <div className="flex justify-center items-center">
                    <p className="font-bold text-xl buri">태그</p>
                    
                    <span className="w-5">
                        <svg  viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.3813 6.13125L6.8625 0.6125C6.63125 0.38125 6.3125 0.25 5.98125 0.25H1.5C0.8125 0.25 0.25 0.8125 0.25 1.5V5.98125C0.25 6.3125 0.38125 6.63125 0.61875 6.8625L6.1375 12.3813C6.625 12.8687 7.41875 12.8687 7.90625 12.3813L12.3875 7.9C12.875 7.4125 12.875 6.625 12.3813 6.13125ZM3.0625 4C2.54375 4 2.125 3.58125 2.125 3.0625C2.125 2.54375 2.54375 2.125 3.0625 2.125C3.58125 2.125 4 2.54375 4 3.0625C4 3.58125 3.58125 4 3.0625 4Z" fill="black"/>
                        </svg>
                    </span>
                </div>
                <button>
                    <img src="/img/check-green.png" className="w-6 h-6" onClick={clickCheck}/>
                </button>
            </div>
            <div className="body flex justify-center mt-10">
                <div
                    style={{backgroundColor: color}}
                    className="grid place-content-center w-8/12 h-52 rounded-md m-10 shadow-lg" 
                >
                    <p className="font-bold text-lg">#{tagName}</p>
                </div>
            </div>
            <div className="inputbox">
                <div className="flex justify-center m-3">
                    <span className="text-zinc-400">태그 이름</span>
                    <input type="text" className="border-b-4 w-6/12 ml-5" onChange={changeTag}/>
                </div>
                <div className="flex justify-center mx-3 mb-3 mt-8">
                    <span className="text-zinc-400">태그 색상</span>
                    <div className="flex justify-around w-6/12 ml-5">
                        <button className="rounded-md bg-[#BF9270] w-6 h-6" onClick={()=>{setColor('#BF9270');}}/>
                        <button className="rounded-md bg-[#E3B7A0] w-6 h-6" onClick={()=>{setColor("#E3B7A0")}}/>
                        <button className="rounded-md bg-[#EDCDBB] w-6 h-6" onClick={()=>{setColor("#EDCDBB")}}/>
                        <button className="rounded-md bg-[#FCE2DB] w-6 h-6" onClick={()=>{setColor("#FCE2DB")}}/>
                        <button className="rounded-md bg-[#FFEDDB] w-6 h-6" onClick={()=>{setColor("#FFEDDB")}}/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default New_tag;
