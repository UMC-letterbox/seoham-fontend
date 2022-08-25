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
    let thisTagName = "";
    let thisTagColor = "";
    useEffect(()=>{
        console.log("fetch 들어옴");
        fetch(`https://www.duke0410.shop/posts/tags/${id}`,{
            method: "GET",
            headers : {
                "X-ACCESS-TOKEN": localStorage.getItem('login_token')
            },
        })
        .then((res)=> res.json())
        .then((res) => {
            const currentPosts= [];
            console.log("아무것도 안넣은  crnposts",typeof(currentPosts));
            console.log("res결과",res);
            res.result.map(item => currentPosts.push(item));
            console.log(typeof(currentPosts));
            let newArray = [...currentPosts];
            thisTagName = newArray[0].tagName;
            thisTagColor = newArray[0].tagColor;
            setLetters(newArray);
        })
        .catch(err => console.log(err))
    },[])

    const onClick = () => {
        setOpen((current) => !current);
    }
    const clickBack = () => {
        navigate(-1);
    }
    console.log("tagid : ", id);
    //태그별 편지조회 API
    // function getPostsbyTags(){
    //     console.log("fetch 들어옴");
    //     fetch(`/posts/tags/${id}`,{
    //         method: "GET",
    //         headers : {
    //             "X-ACCESS-TOKEN": localStorage.getItem('login_token')
    //         },
    //     })
    //     .then((res)=> res.json())
    //     .then((res) => {
    //         const currentPosts= [];
    //         console.log("아무것도 안넣은  crnposts",typeof(currentPosts));
    //         console.log("res결과",res);
    //         res.result.map(item => currentPosts.push(item));
    //         console.log(typeof(currentPosts));
    //         let newArray = [...currentPosts];
    //         console.log("letter에 들어갈 새 배열",newArray);
    //         console.log("typeof(newArray)",typeof(newArray));
    //         console.log("newArray[0]",newArray[0]);
    //         setLetters(newArray);
    //     })
    //     .catch(err => console.log(err))

    // }

    //menu box 선택 메뉴
    const selectTag = () => {
        console.log("선택 버튼")
    }
    // 태그 수정
    const modiTag = () => {
        console.log("태그정보수정 버튼");
        //함수 내부에서 바로 페이지를 넘기는 방법이 없나? 아니면 또 인자를 추가해야하는데..
        console.log(id);
        navigate('/modiTag', {
            state: {
                tagId: id,
                tagName: letters[0]?.tagName,
                tagColor: letters[0]?.tagColor,
            }
        });
        
    }
    // 태그 삭제
    const deleteTag = () => {
        console.log("태그삭제");
        fetch(`https://www.duke0410.shop/posts/tags/delete/${id}`,{
            method:"DELETE",
            headers: {
                "X-ACCESS-TOKEN": localStorage.getItem('login_token')
            },
        })
        .then(res=>res.json())
        .then(res => {
            if (res.isSuccess === true){
                window.alert("태그가 삭제되었습니다.");
                navigate(-1);
            }
            else {
                window.alert("오류가 발생했습니다.");
            }
        })
    }

    return(
        <div>
            <div className="flex justify-between p-3">
                <button onClick={clickBack}>
                    <img src="/img/left-arrow.png" className="w-4 h-4"/>
                </button>
                <p className="font-bold buri text-lg">태그 별 편지 조회</p>
                <button onClick={onClick}>
                    <img src="/img/dots.png" className="w-4 h-4"/>
                </button>
            </div>
            <div className="sticky flex justify-center bg-white">
                <div className="font-bold text-xl mt-2 p-2 w-10/12 rounded-md" style={{backgroundColor: letters[0]?.tagColor}}>#{letters[0]?.tagName}</div>
            </div>
            <div className="flex justify-center">
                <Letterbox 
                    id={id}
                    letter ={letters}
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
