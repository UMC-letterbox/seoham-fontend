import React, { useEffect } from "react";
import {useRef, useState} from "react";
import axios from 'axios';
const FileEditor = () => {
    const dropBox=useRef();
    const img_box = useRef();
    const [file, setFile] = useState("");
    
    useEffect( () => {
        preview();
        return () => preview();
    });

    const preview = () => {
        if(!file) return false;

        const imgEl = img_box;
        const reader = new FileReader;

        reader.onLoad = () => (
            imgEl.style.backgroundImage = `urL(${reader.result})`
        );
        reader.readAsDataURL(file[0]);
    };
    
    function handleFiles(f){
        //input으로 들어온 파일 처리하는 함수
        const newfile = f.target.files;
        setFile(newfile);
        console.log(file);
    }
    function handleClick(e){
        //저장하기 버튼 클릭시 
        const formdata = new FormData();
        formdata.append('uploadImage', file[0]);
        console.log(formdata);
        const config = {
            Headers: {
                'content-type' : 'multipart/form-data',
            },
        };
        axios.post('api', formdata,config); //api대신 URL주소
        //
    
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
        
        const newfile = e.dataTransfer.files; //배열
        setFile(newfile);
        console.log(newfile);
    }
    return (
        <div>
            <header>
                <h1 className="text-center font-bold text-lg">파일 불러오기</h1>
            </header>
            <div>
            <input 
                type="file"
                id="input"
                accept="img/*"
                onChange={handleFiles}
                />
            </div>
            
            <div
                className="bg-slate-200 h-52 text-center"
                onDragEnter={handleDragEnter}
                onDragOver= {handleDragOver}
                onDrop = {handleDrop}
                ref={dropBox}>
                드롭박스 안에 사진을 옮겨주세요!
            </div>

            <div
                className="flex justify-center">
            <button 
            className=" bg-red-400 decoration-white w-28  h-10 text-center font-semibold rounded-full text-slate-50"
            onClick={handleClick}> 저장하기 </button>
            </div>
            <div ref={img_box}>
            </div>
        </div>
    )
}

export default FileEditor;