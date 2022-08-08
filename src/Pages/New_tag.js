import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import * as Data from '../getTags';
//import styled from "styled-components"; 물어보고 써보기

function New_tag() {
    const [color, setColor] = useState('rgb(253,164,175)');
    const [tagName, setTagName] = useState("");
    const navigate = useNavigate();

    const changeTag = (event) => setTagName(event.target.value);
    const clickCheck = () => {
        if (tagName.length === 0) {
            window.alert("태그 이름을 입력해주세요");
        }
        else{
            // 데이터 저장 부분
            Data.addTag(tagName, color);
            navigate(-1);    
        }
    }

    return (
        <div>
            <div className="flex justify-between m-5">
                <Link to={'/'}>
                    <button>
                        <img src="/img/close.png" className="w-4 h-4"/>
                    </button>
                </Link>
                <p className="font-bold text-2xl">TAG</p>
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
                        <button className="rounded-md bg-[#BF1713] w-6 h-6" onClick={()=>{setColor('#BF1713');}}/>
                        <button className="rounded-md bg-[#E93732] w-6 h-6" onClick={()=>{setColor("#E93732")}}/>
                        <button className="rounded-md bg-[#FF5C58] w-6 h-6" onClick={()=>{setColor("#FF5C58")}}/>
                        <button className="rounded-md bg-[#FE8F8F] w-6 h-6" onClick={()=>{setColor("#FE8F8F")}}/>
                        <button className="rounded-md bg-[#FCD2D1] w-6 h-6" onClick={()=>{setColor("#FCD2D1")}}/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default New_tag;