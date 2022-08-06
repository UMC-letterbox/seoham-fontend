import {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import * as Data from '../getTags';
import DaySelect from "../component/DaySelect";
import ModalContainer from "../component/ModalContainer";

function New_letter(){
    const [check, setCheck] = useState(false);
    const [tags, setTags] = useState([]);
    const [tagSelected, setTagSelected] = useState("");
    const [daySelected, setDaySelected] = useState([]);
    const [writer, setWriter] = useState("");
    const [contents, setContents] = useState("");
    const [selected, setSelected] = useState(0);
    const navigate = useNavigate();

    useEffect(()=>{
        setTags(Data.getTags());
    }, [])
    
    const handleTagSelect = (e) => {
        setTagSelected(e.target.value);
        console.log('TAG 선택: ', e.target.value);
    }
    const handleWriter = (e) => {
        setWriter(e.target.value);
        console.log('보낸이 작성: ', e.target.value);
    }
    const handleEmptyBtn = () => {
        window.alert("필수 내용을 입력해주세요.");
    }
    const handleContents = (e) => {
        setContents(e.target.value);
    }

    useEffect(() => {
        console.log('날짜 선택', daySelected);
        console.log('태그 선택', tagSelected);
        console.log('보낸이 작성', writer);
        console.log('편지 내용', contents)

        if ((tagSelected!=="" && tagSelected!=='-1') && daySelected!==[] && writer!==""){
            console.log("모두 작성 완료");
            setCheck(true);
        }
        else{
            setCheck(false);
        }
    }, [daySelected, tagSelected, writer, contents]);

    console.log('새 편지 페이지에서 편지지 정보 받기: ', selected)

    // 데이터 저장해주는 부분
    const clickCheck = () => {
        console.log(tagSelected, writer, contents, daySelected[0], daySelected[1], daySelected[2]);
        Data.addLetter(tagSelected, writer, contents, daySelected[0], daySelected[1], daySelected[2]);
        console.log(Data.getTags());
        navigate(-1);
    }

    return(
        <div>
            <div className="flex justify-between m-5">
                <Link to={'/'}>
                    <button>
                        <img src="/img/close.png" className="w-6 h-6"/>
                    </button>
                </Link>
                <p className="font-bold text-2xl">편지 작성</p>
                {
                    check ?
                    <button onClick={clickCheck}>
                        <img src="/img/check-green.png" className="w-7 h-7"/>                        
                    </button>
                    :
                    <button onClick={handleEmptyBtn}>
                        <img src="/img/check-empty.png" className="w-7 h-7"/>
                    </button>
                }
            </div>
            <div className="grid place-items-center h-96 m-10 border-4">
                <textarea className="w-11/12 h-60 my-5" onChange={handleContents}/>
                <div>
                    <div className="flex justify-between">
                        <span>날짜</span>
                        <span className="w-48"><DaySelect parentFunction={setDaySelected}/></span>
                    </div>
                    <div className="flex justify-between">
                        <span>보낸이&nbsp;</span>
                        <input type="text" className="border-b-4 w-48" onChange={handleWriter}/>
                    </div>
                </div>
            </div>
            <div className="grid place-items-center m-10">
                <select onChange={handleTagSelect} value={tagSelected} className="w-full border-4 text-center">
                    <option value="-1">TAG 선택</option>
                    {
                        tags.map((tag) => (
                            <option key={tag.id} value={tag.id}>{tag.name}</option>
                        ))
                    }
                </select>
                <br/>
                <ModalContainer setSelected={setSelected}/>
                <p>{selected}</p>
            </div>
        </div>
    );
}

export default New_letter;