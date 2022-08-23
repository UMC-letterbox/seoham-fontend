import { useLocation } from 'react-router-dom';
import { useState } from "react";
import { useNavigate, Navigate } from 'react-router-dom';

const LetterPaper = ({setSelectedPaper, id, src}) => {
    
    return (
        <div className="flex flex-col items-center mx-5 my-2" >
            <button 
            onClick= {(e)=> {
                console.log(e.target.value);
                setSelectedPaper(e.target.value);
            }}
            className="w-32 h-28 rounded-md "
            style={{background: `url(${src})`}}
            value = {id} >
                {/* <img src={props.src} value = {props.id}/> */}
            </button>
            <span> 편지지{id}</span>
        </div>
    )
};



const SelectPaper = () => {
    const papers = [
        {
            id: 0,
            src: "img/paper1.jpg"
        },
        {
            id: 1,
            src: "img/paper2.jpg"
        },
        {
            id: 2,
            src: "img/paper3.jpg"
        },
        {
            id: 3,
            src: "img/paper4.jpg"
        },
        {
            id: 4,
            src: "img/paper5.jpg"
        },
        {
            id: 5,
            src: "img/paper6.jpg"
        },
    ];
    const [selectedPaper, setSelectedPaper] = useState("");
    const navi = useNavigate();
    function goLetterEditor(){
        navi("/lettereditor", {
            state: selectedPaper
            });
    }
    return (
        <div>
            <header>
                <h1 className="text-center font-bold text-lg">편지지 선택</h1>
            </header>
            <div className="flex flex-wrap justify-center items-center">
                {
                    papers.map((paper) => (
                        <LetterPaper key={paper.id} id={paper.id} src= {paper.src} setSelectedPaper={setSelectedPaper}/>
                    ))
                }
            </div>
            
            <div className = "flex justify-center items-center">
            <button
                className=" bg-red-400 flex justify-center items-center decoration-white w-28  h-10 text-center font-semibold rounded-full text-slate-50"
                onClick = {goLetterEditor}
            > 편지지 선택완료</button>
            </div>
        </div>
    )
}

export default SelectPaper;