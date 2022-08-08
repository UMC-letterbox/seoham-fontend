import {useState, useEffect} from "react";
import {useParams, useNavigate, Link} from "react-router-dom";
import * as Data from '../getTags';
import Letterbox from "../Components/Letterbox";
import MyButton3 from "../Components/MyButton3";
import UpButton from "../Components/UpButton";
import Menubox from "../Components/Menubox";

function View_tags() {
    const [letters, setLetters] = useState([]);
    const [isopen, setOpen] = useState(false);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        setLetters(Data.getTag(id));
    }, []);
    console.log("태그이름:", letters.name, "태그:", letters);

    const onClick = () => {
        setOpen((current) => !current)
    }
    const clickBack = () => {
        navigate(-1);
    }

    //menu box 선택 메뉴
    const selectTag = () => {
        console.log("선택 버튼")
    }
    // 태그 수정
    const modiTag = () => {
        console.log("태그정보수정 버튼");
        //함수 내부에서 바로 페이지를 넘기는 방법이 없나? 아니면 또 인자를 추가해야하는데..
    }
    // 태그 삭제
    const deleteTag = () => {
        console.log("태그 삭제 버튼", id);
        Data.deleteTag(id);
        navigate(-1);
    }

    return(
        <div>
            <div className="flex justify-between p-3">
                <button onClick={clickBack}>
                    <img src="/img/left-arrow.png" className="w-4 h-4"/>
                </button>
                <p className="font-bold text-lg">태그 별 편지 조회</p>
                <button onClick={onClick}>
                    <img src="/img/dots.png" className="w-4 h-4"/>
                </button>
            </div>
            <div className="sticky flex justify-center bg-white">
                <div className="font-bold text-xl mt-2 p-2 w-10/12 rounded-md" style={{backgroundColor: letters.color}}>#{letters.name}</div>
            </div>
            <div className="flex justify-center">
                <Letterbox 
                    id={id}
                />
            </div> 
            <div className="z-1">
                <UpButton
                    text={"업"}
                    onClick={() => {
                    window.scrollTo(0, 0);
                    }}
                />
                <MyButton3
                    text={"+"}
                    onClick={() => {
                    navigate("/selectlettertype");
                    }}
                />
            </div>
            {isopen ? <Menubox menuContents={["선택", "태그정보수정", "태그정보삭제"]} menuFunc={[selectTag, modiTag, deleteTag]}/> : null}
        </div>
    );
}

export default View_tags;
