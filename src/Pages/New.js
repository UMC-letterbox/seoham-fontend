import React from "react";
import {Link} from "react-router-dom";
const SelectLetterType= () => {
    return(

        <div className="buri">
            <header>
                <h1 className= "mt-8 mb-11 text-center font-bold text-lg ">편지 작성</h1>
            </header>
            <div className="text-center font-semibold">
                <p>편지를 작성할 방법을 선택해주세요</p>
            </div>
            <div className="flex flex-col justify-center items-center cursor-pointer ">
                <div className="  w-9/12 h-52 bg-[#FFF2F2] rounded-2xl my-10 shadow-md">
                    <Link className="
                        text-[#989898] font-bold flex justify-center items-center w-full h-52"
                        to={"/lettereditor"}> 텍스트로 가져오기 </Link>
                </div>
                <div className="inline-block w-9/12 h-52 bg-[#F9E3E3] rounded-2xl cursor-pointer shadow-md"> 
                    <Link className="
                        text-[#989898] font-bold flex justify-center items-center w-full h-52"
                    to={"/fileeditor"}> 이미지파일로 가져오기 </Link>
                </div>
                
            </div>
        </div>
    )
};

export default SelectLetterType;
