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
                        <img src="/img/close.png" className="w-6 h-6"/>
                    </button>
                </Link>
                <p className="font-bold text-2xl">TAG</p>
                <button>
                    <img src="/img/check-green.png" className="w-7 h-7" onClick={clickCheck}/>
                </button>
            </div>
            <div className="body flex justify-center mt-10">
                <div
                    style={{backgroundColor: color}}
                    className="grid place-content-center w-8/12 h-52 rounded m-10" 
                >
                    <p className="font-bold text-lg">#{tagName}</p>
                </div>
            </div>
            <div className="inputbox">
                <div className="flex justify-center m-3">
                    태그 이름 &nbsp;
                    <input type="text" className="border-b-4 w-8/12" onChange={changeTag}/>
                </div>
                <div className="flex justify-center m-3">
                    태그 색상 &nbsp;
                    <div className="flex justify-around w-8/12">
                        <button className="bg-rose-300 w-8 h-10" onClick={()=>{setColor('rgb(253,164,175)');}}/>
                        <button className="bg-amber-100 w-8 h-10" onClick={()=>{setColor("rgb(254,243,199)")}}/>
                        <button className="bg-lime-200 w-8 h-10" onClick={()=>{setColor("rgb(217,249,157)")}}/>
                        <button className="bg-sky-100 w-8 h-10" onClick={()=>{setColor("rgb(224,242,254)")}}/>
                        <button className="bg-fuchsia-200 w-8 h-10" onClick={()=>{setColor("rgb(245,208,254)")}}/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default New_tag;