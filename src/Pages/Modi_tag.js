import {useState} from "react";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import * as Data from '../getTags';

function Modi_tag() {
    //const {tagIdx} = useParams();
    const {state} = useLocation();
    console.log(state.tagName, state.tagColor);

    const init_color = '#BF9270'
    const init_name = '생일'
    const userId = 0;

    const [color, setColor] = useState(init_color);
    const [tagName, setTagName] = useState(init_name);
    const navigate = useNavigate();

    useState(() => {
        setTagName(state.tagName);
        setColor(state.tagColor);
    }, [])

    const changeTag = (event) => setTagName(event.target.value);
    const clickCheck = () => {
        if (tagName.length === 0) {
            window.alert("태그 이름을 입력해주세요");
        }
        else{
            //
            fetch(`https://www.duke0410.shop/posts/tags/edit/${state.tagId}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type" : "application/json",
                    "X-ACCESS-TOKEN": localStorage.getItem("login_token")
                },
                body: JSON.stringify({
                    tagName: tagName,
                    tagColor: color,
                })
            })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if(res.isSuccess) {
                    console.log(res);
                    alert("저장 완료");
                }
            })
            .catch(err => console.log(err))
            //

            navigate(-1);    
        }
    }



    return (
        <div>
            <div className="flex justify-between m-5">
                <Link to={'/home'}>
                    <button>
                        <img src="/img/close.png" className="w-4 h-4"/>
                    </button>
                </Link>
                <p className="font-bold text-2xl">TAG</p>
                <button>
                    <img src="/img/check-green.png" className="w-6 h-6" onClick={clickCheck}/>
                </button>
            </div>
            <div className="body flex justify-center mt-10">
                <div
                    style={{backgroundColor: color}}
                    className="grid place-content-center w-8/12 h-52 rounded-md m-10 shadow-lg" 
                >
                    <p className="font-bold text-lg">#{tagName}</p>
                </div>
            </div>
            <div className="inputbox">
                <div className="flex justify-center m-3">
                    <span className="text-zinc-400">태그 이름</span>
                    <input type="text" className="border-b-4 w-6/12 ml-5" onChange={changeTag} value={tagName}/>
                </div>
                <div className="flex justify-center mx-3 mb-3 mt-8">
                    <span className="text-zinc-400">태그 색상</span>
                    <div className="flex justify-around w-6/12 ml-5">
                        <button className="rounded-md bg-[#BF9270] w-6 h-6" onClick={()=>{setColor('#BF9270');}}/>
                        <button className="rounded-md bg-[#E3B7A0] w-6 h-6" onClick={()=>{setColor("#E3B7A0")}}/>
                        <button className="rounded-md bg-[#EDCDBB] w-6 h-6" onClick={()=>{setColor("#EDCDBB")}}/>
                        <button className="rounded-md bg-[#FCE2DB] w-6 h-6" onClick={()=>{setColor("#FCE2DB")}}/>
                        <button className="rounded-md bg-[#FFEDDB] w-6 h-6" onClick={()=>{setColor("#FFEDDB")}}/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Modi_tag;
