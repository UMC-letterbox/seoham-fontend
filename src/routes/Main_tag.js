import Navbar from "../component/Navbar";
import Tagbox from "../component/Tagbox";
import Addletter from "../component/Addletter";
import {useState, useEffect} from "react";
import Topbtn from "../component/Topbtn";

function Main_tag() {
    return(
        <div>
            <Navbar />
            <div className="flex justify-center">
                <div className="ml-3 w-10/12">
                    <button className="w-1/4 border-b-4 border-rose-300 text-rose-300">태그</button>
                    <button className="w-1/4">날짜</button>
                    <button className="w-1/4">보낸이</button>
                </div>
            </div>
            <div className="flex justify-center">
                <Tagbox />
            </div> 
            <div className="z-1">
                <Addletter />
                <Topbtn />
            </div>
        </div>
    );
}

export default Main_tag;
