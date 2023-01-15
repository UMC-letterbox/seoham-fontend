import { useState, useref } from "react";
import "../App.css";

const LetterPaper = ({setSelected, id, src}) => {
    return (
        <button 
            className="flex flex-col items-center w-5/12 h-5/12 my-1" 
            onClick= {(e)=> {
                console.log('선택된 편지지: ', e.target.value);
                setSelected(e.target.value);
            }}
            value = {id}
            >
            <label className="w-20">
                <input
                    className="radio-btn w-20"
                    type="radio"
                    value={id}
                    name="paper"/>
                <div 
                className="w-20 h-20 rounded-md paperBtn"
                style={{background: `url(${src})`}} >
                </div>
                <span className="text-sm buri text-black"> 편지지{id}</span>
            </label>
        </button>
    )
};


export const papers = [
    {
        id: 1,
        src: "/img/paper1.jpg"
    },
    {
        id: 2,
        src: "/img/paper2.jpg"
    },
    {
        id: 3,
        src: "/img/paper3.jpg"
    },
    {
        id: 4,
        src: "/img/paper4.jpg"
    },
    {
        id: 5,
        src: "/img/paper5.jpg"
    },
    {
        id: 6,
        src: "/img/paper6.jpg"
    },
];



const SelectPaper = ({setSelected, selected, setIsOpen}) => {
    return (
        <div className="flex-col justify-center">
            <header className=" text-black w-20 ml-12 mt-5 mb-3">
                    편지지 선택
            </header>
            <div className="flex flex-wrap justify-center items-center">
                
                {
                    papers.map((paper) => (
                        <LetterPaper key={paper.id} id={paper.id} src= {paper.src} setSelected={setSelected}/>
                    ))
                }
            </div>
            
            <div className = "flex justify-center items-center">
            <button
                className="mt-3 bg-red-400 flex justify-center items-center decoration-white w-32  h-10 text-center font-semibold rounded-full text-slate-50 "
                onClick ={() => {setIsOpen(false)}}
            > 편지지 선택완료</button>
            </div>
        </div>
    )
}

export default SelectPaper;
