import {useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import Menubox from '../component/Menubox';
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
    
    const [isopen, setOpen] = useState(false);
    const navigate = useNavigate();

    const onClick = () => {
        setOpen((current) => !current)
    }
    const clickBack = () => {
        navigate(-1);
    }

    return(
        <div>
            <div className="flex justify-between p-3">
                <button onClick={clickBack}>
                    <img src="/img/left-arrow.png" className="w-8 h-8"/>
                </button>
                {isopen ? <Menubox menuContents={["수정", "삭제"]}/> : null}
                <button onClick={onClick}>
                    <img src="/img/dots.png" className="w-8 h-8"/>
                </button>
            </div>
            <div className="h-96 mx-10 mt-10 border-4">
                <div className="w-11/12 h-5/6 m-2 overflow-y-auto">
                    {letter.content}
                </div>
                <div className='flex justify-end mt-5 mr-5'>
                    <span>{letter.year}.{letter.month}.{letter.day}&nbsp;</span>
                    <span className='font-bold'>from.{letter.writer}</span>
                </div>
            </div>
            <div className="flex justify-center mt-5 mx-10">
                <span>
                    {/*style={{backgroundColor: info.tagColor}} className='rounded'>*/}
                    #{tag}
                </span>
            </div>
        </div>
    );
}

export default View_letter;