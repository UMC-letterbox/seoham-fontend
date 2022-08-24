import React, { useEffect } from "react";
import {useRef, useState} from "react";

const FileEditor = () => {
    const dropBox=useRef();
    const img_box = useRef();
    const [imgsrc, setImgsrc] = useState("");
    // useEffect( () => {
    //     preview();
    //     return () => preview();
    // });

    // const preview = () => {
    //     if(!file) return false;

    //     const imgEl = img_box;
    //     const reader = new FileReader;

    //     reader.onLoad = () => (
    //         imgEl.style.backgroundImage = `urL(${reader.result})`
    //     );
    //     reader.readAsDataURL(file[0]);
    // };
    
    function handleFiles(f){
        //input으로 들어온 파일 처리하는 함수
        const newfile = f.target.files[0];
        console.log(newfile);
        encodeFile(newfile);
    }
    function handleClick(e){
        //저장하기 버튼 클릭시 
        const formdata = new FormData();
        // formdata.append('uploadImage', file[0]);
        // console.log(formdata);
    
    }

    function handleDragEnter(e){
        e.stopPropagation();
        e.preventDefault();
    }
    function handleDragOver(e){
        e.stopPropagation();
        e.preventDefault();
    }
    function handleDrop(e){
        //DropBox로 들어온 파일 처리하는 함수
        e.stopPropagation();
        e.preventDefault();
        
        const newfile = e.dataTransfer.files[0]; //배열
        console.log(newfile);
        encodeFile(newfile);
    }
    function encodeFile(fileBlob){
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
            reader.onload = () => {
                setImgsrc(reader.result);
                resolve();
            };
        });
    }
    return (
        <div>
            <header className="flex justify-center items-center">
                <h1 className=" inline-block my-7 text-center mg-auto font-bold text-lg">사진 불러오기</h1>
            </header>
            <div className="mx-8 ">
                
                <div
                    className="flex flex-col justify-around bg-[#F5F5F5] h-52 text-center relative"
                    onDragEnter={handleDragEnter}
                    onDragOver= {handleDragOver}
                    onDrop = {handleDrop}
                    ref={dropBox}>
                    <div>드롭박스 안에 사진을 옮겨주세요!</div>
                    <div className="flex justify-center items-center">
                        <label for="input">
                            <div className="flex flex-col flex-nowrap">
                                <img className="w-14 h-14"src="/img/uploadImg.png"/>
                                <div className="text-xs text-[#5a5b5c]">파일 업로드</div>
                            </div>
                            
                        </label>
                        <input 
                            type="file"
                            id="input"
                            accept="img/*"
                            onChange={handleFiles}
                            className="hidden"
                            />
                    </div>
                </div>

                <div ref={img_box} className="my-3">
                    {imgsrc && <img src={imgsrc} alt="preview-img" />}
                </div>
                <div className="flex justify-center">
                    <button 
                    className=" bg-red-400 decoration-white w-28  h-10 text-center font-semibold rounded-full text-slate-50"
                    onClick={handleClick}> 저장하기 </button>
                </div>
            </div>
        </div>
    )
}

export default FileEditor;
