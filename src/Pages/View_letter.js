import {useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import Menubox from '../Components/Menubox';
import * as Data from '../getTags';

function View_letter () {
    //param 받기. 편지보는 버튼에서 연결시키기 - 지금은 임의로 확인하기 위해 프로필이랑 연결함
    const {tagId, id} = useParams();
    
    console.log('id체크', tagId, id);
    const info = {day: '2022.07.30', writer:'해연', tag:'HBD', tagColor:'rgb(253,164,175)', 
                content:"생일 축하해! 오늘 맛있는 거 많이 먹고 즐거운 하루 됐으면 좋겠다! 생일 축하해! 오늘 맛있는 거 많이 먹고 즐거운 하루 됐으면 좋겠다!생일 축하해! 오늘 맛있는 거 많이 먹고 즐거운 하루 됐으면 좋겠다!생일 축하해! 오늘 맛있는 거 많이 먹고 즐거운 하루 됐으면 좋겠다!생일 축하해! 오늘 맛있는 거 많이 먹고 즐거운 하루 됐으면 좋겠다!생일 축하해! 오늘 맛있는 거 많이 먹고 즐거운 하루 됐으면 좋겠다!생일 축하해! 오늘 맛있는 거 많이 먹고 즐거운 하루 됐으면 좋겠다!생일 축하해! 오늘 맛있는 거 많이 먹고 즐거운 하루 됐으면 좋겠다!생일 축하해! 오늘 맛있는 거 많이 먹고 즐거운 하루 됐으면 좋겠다!생일 축하해! 오늘 맛있는 거 많이 먹고 즐거운 하루 됐으면 좋겠다!"}
    
    const getData = Data.getLetter(tagId, id);
    const letter = getData.letter;
    const tag = getData.tag;
    console.log('편지 확인 ', getData.letter, letter, 'tag확인', getData.tag, tag);
    //console.log(Data.getLetter(tagId, id));
    
    // 14~17번째 줄에서 api로 대체하기
    let data = [];
    useEffect(()=>{
        fetch('api(/posts/{postIdx})',{  //postIdx == useParams의 id // ~/posts/{id} 이렇게 쓰면 될 듯
            headers: {
                Authorization: localStorage.getItem('login_token')
            },
        })
        .then(res => res.json())
        .then(res => data = res.result)
        .catch(err => console.log(err))
    }, [])

    // letterId, content, date, sender, tagName 정보 획득
    //

    const [isopen, setOpen] = useState(false);
    const navigate = useNavigate();

    const onClick = () => {
        setOpen((current) => !current)
    }
    const clickBack = () => {
        navigate(-1);
    }

    const modiLetter = () => {
        console.log("편지 수정");
        navigate(`/lettereditor/${id}`);
        //navigate로 넘기기?
    }

    const deleteLetter = () => {
        console.log("편지 삭제");
        Data.deleteLetter(tagId, id);

        //
        fetch('api (/posts/{postIdx}', {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(res => {
            if (res.isSuccess === true){
                window.alert("편지가 삭제되었습니다.")
            }
            else {
                window.alert("오류가 발생했습니다.")
            }
        })
        .catch(err => console.log(err))
        //

        navigate(-1);
    }

    return(
        <div className='h-screen'>

            <div className="flex justify-between p-5">
                <button onClick={clickBack}>
                    <img src="/img/left-arrow.png" className="w-4 h-4"/>
                </button>
                {isopen ? <Menubox menuContents={["수정", "삭제"]} menuFunc={[modiLetter, deleteLetter]}/> : null}
                <button onClick={onClick}>
                    <img src="/img/dots.png" className="w-4 h-4"/>
                </button>
            </div>
            <div className='mx-10 my-5'>
                <span>보낸이: {letter.writer}</span>
                <span className='text-sm'>&nbsp;님</span>
            </div>
            <div className="h-3/6 mx-10 p-3 bg-gray-100 shadow-lg rounded-md">
                <div className="w-11/12 h-5/6 m-2 overflow-y-auto">
                    {letter.content}
                </div>
            </div>
            <div className="flex justify-between mt-5 mx-10">
                <span className='bg-rose-300 px-6 py-2 rounded-full shadow-lg text-white'>
                    {/*style={{backgroundColor: info.tagColor}} className='rounded'>*/}
                    #{tag}
                </span>
                <span className='text-rose-300 border-y-2 border-rose-300 py-2'>
                    <span>날짜: {letter.year}년 {letter.month}월 {letter.day}일&nbsp;</span>
                </span>
            </div>
        </div>
    );
}

export default View_letter;