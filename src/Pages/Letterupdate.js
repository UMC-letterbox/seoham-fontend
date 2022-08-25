import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import {Link} from "react-router-dom";
import ModalContainer from "../Components/ModalContainer";
import { useNavigate, useLocation } from 'react-router-dom';

const jsonLocalStorage = {
    setItem: (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    },
    getItem: (key) => {
        return JSON.parse(localStorage.getItem(key));
    },
};
const Letterupdate = () => {

    const [data, setData] = useState();
    const [tags, setTags]= useState([]);
    const [isWritten, setIswritten]= useState(false);
    const [daySelected, setDaySelected] = useState([]); //날짜 선택 여부 - hy 추가
    const [tagSelected, setTagSelected] = useState(""); //태그 선택 여부 - hy 추가
    
    const navigate = useNavigate();
    const {state} = useLocation();
    const {postId} = useParams();
    const userId = JSON.parse(localStorage.getItem("userIdx"));

    //상태변경함수들---------------------------------------------------
    const handleChangeState = (e)=> {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
        chkCondition();
    }
    const chkCondition= () => {
        if(data?.sender.length >= 3 && data?.content.length >=10){
            setIswritten( true);
        }else{
            setIswritten(false);
        }
    }
    function setInit(){
        //로컬스토리지에서 기존의 데이터 불러오기
        let chk = jsonLocalStorage.getItem('letterobj');
        if(chk != null){
            setData({
                ...chk});
            console.log(data);
        }else {
            return ;
        }
    }
    //onClick 이벤트핸들러 ----------------------------------------------
    const goSelectPaper = () => {
        jsonLocalStorage.setItem('letterobj', data);
        navigate("/selectpaper");
    }
    //데이터불러오는 함수들-------------------------------------------------
    function getPostbyId(){
        fetch(`https://www.duke0410.shop/posts/${postId}`,{
            method: "GET",
            headers: {
                "X-ACCESS-TOKEN": localStorage.getItem('login_token')
            },
        })
        .then((res) => res.json())
        .then((res)=> {
            console.log("result: ", res.result);
            let prevPost = {};
            prevPost ={...res.result};
            setData({
                ...prevPost,
                date: `${prevPost.date.slice(0,4)}${prevPost.date.slice(5,7)}${prevPost.date.slice(8,10)}`,
            });
        })
    }
    function getTagList(userId){
        
        fetch(`https://www.duke0410.shop/posts/tags?userIdx=${userId}`,{
            method: "GET",
            headers: {
                "X-ACCESS-TOKEN": localStorage.getItem('login_token')
            },
        })
        .then((res) => res.json())
        .then((res) => {
            const currentTags = [];
            res.result.map(item => currentTags.push(item));
            console.log("받아온 태그리스트",currentTags);
            let newArray = [...currentTags];
            setTags(newArray);
        })
        .catch(err => console.log(err))
    }
    //서버제출할 때 필요한 함수들 ----------------------------------------------
    const handleSubmit = () => {
        
        console.log("최종 data", data);
        let newItem = onCreate();
        register(newItem);
        
    }
    const onCreate = () => {
        //새로운 편지 만들기
        
        const newItem = {
            sender :  data.sender ,
            date : data.date,
            tagIdx : parseInt(data.tagIdx),
            content : data.content ,
            letterIdx: data.letterIdx,
        };
        console.log("서버에 전달될 newItem",newItem);
        return newItem;
    }
    function register(newItem){
        console.log(newItem);
        fetch(`https://www.duke0410.shop/posts/edit/${postId}`, {
                method: "PATCH",
                headers: {
                    "X-ACCESS-TOKEN": localStorage.getItem('login_token'),
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify(newItem),
        })
        .then((res) => res.json())
        .then((res)=> {
            console.log(res);
            if(res.isSuccess === true){
                console.log(res.result);
                //초기화
                localStorage.removeItem("letterobj");
                navigate(-1);
            }
        })
    }  

    useEffect(()=>{
        let chk = jsonLocalStorage.getItem('letterobj');
        if(chk != null){
            //편지지 고르고 온 상태
            setInit();
        }else{
            //처음 수정들어온 상태
            getPostbyId();
        }
        getTagList(userId);
    },[]);
    useEffect(()=>{
        chkCondition();
        console.log(data);
        // setDaySelected([
        //     data?.date.substring(0,4),
        //     data?.date.substring(5,6),
        //     data?.date.substring(8,10),
        // ]);
        
    },[data])
    useEffect(()=>{
        let tempdate = parseInt(`${daySelected[0]}${daySelected[1]}${daySelected[2]}`);
        console.log(tempdate);
        if(isNaN(tempdate)){
            return ;
        }else{
            setData({
                ...data,
                date: tempdate,
            });
        }
    },[daySelected]);

    return (
        <div className="overflow-scroll ">
            <header className="flex flex-row mx-11 mt-9 mb-2.5">
                <Link to={"/home"}>
                    <button><img src="/img/close.png" className="w-3.5 h-3.5"/></button>
                </Link>
                <h2 className="buri text-center font-bold text-lg flex-grow">편지 수정</h2>
                <button
                    disabled={!isWritten}
                    onClick={handleSubmit}
                    > 
                    {isWritten ? <img src="/img/check-green.png" className="w-4"/> : <img src="/img/check-empty.png" className="w-4"/>}
                </button>
            </header>
            <div className="buri flex justify-center items-center py-5">
                <div className="w-72">
                    <span className="text-center font-semibold mr-1.5">보낸이:</span>
                    <input className="w-61"
                        placeholder="보낸이를 작성해주세요"
                        name="sender"
                        value={data?.sender}
                        onChange={ handleChangeState}
                    />
                </div>
            </div>
            
            <div className="flex flex-col justify-center items-center">
                
                <div className="w-72 h-96 rounded-t bg-[#F5F5F5] drop-shadow-lg">
                    
                    <textarea 
                        className="w-72 h-full rounded-t bg-[#F5F5F5] buri"
                        placeholder="편지내용을 작성해주세요"
                        name="content"
                        value= {data?.content}
                        onChange={ handleChangeState}
                        />
                    
                </div>
                
            </div>
            
            <ModalContainer setSelected={setDaySelected} selected={daySelected}/>

            <div className="flex flex-col justify-center">
                <div className="text-center"> {/* 가져온 부분 */}
                    <select onChange={handleChangeState} 
                    value={tagSelected} name="tagIdx" className=" w-72 h-10 text-center font-semibold rounded-xl text-[#989898] border border-[#989898]">
                        <option value="-1"> {tags?.map((tag)=>{if(tag.tagIdx == data?.tagIdx){return tag.tagName}})}</option>
                        {
                            tags.map((tag) => (
                                <option key ={tag.tagIdx} value={tag.tagIdx}>{tag.tagName}</option>
                            ))
                        }
                    </select>   
                </div>
                
            </div>
        </div>
    )
}

export default Letterupdate;
