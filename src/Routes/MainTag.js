import React from "react";
import LetterEditor from "./LetterEditor";
import {Link} from "react-router-dom";
import Tags from "../Components/Tags";
import PlusBtn from "../Components/PlusBtn";

function Main_Tag(){
    
    return (
        <div>
            <p className="text-center">태그별 조회</p>
            <Tags />

            <div>
                <PlusBtn />
            </div>
        </div>
    );
}
export default Main_Tag;