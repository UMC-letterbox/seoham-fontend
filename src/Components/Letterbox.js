import PropTypes from "prop-types";
import Letter from "./Letter";
import {Link} from "react-router-dom";
import { useEffect } from "react";
import * as getTags from '../getTags';

function Letterbox({id, letter}) {
    
    // const [tags, setTags] = useState([]);
    
    // useEffect(() => {
    //     fetch('api', {
    //         headers: {
    //             Authorization : "" //x-access-token?
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data => data.map(item => result.push(item))) //result = data.result로 해야하나?
    //     .catch(error => console.log(error))
    // }, [])
    // 태그 목록 조회 api에는 id가 없음(tagName, tagColor만 존재)
    // 근데 태그를 눌렀을 때 편지를 받으려면 tagId가 필요함. 그럼 태그 목록 조회에 id가 있어야 하는걸까?
    // 태그 - tagId, 날짜 - x. 보낸이별 - sender 를 input으로 받는 api
    console.log("letter박스속의 letters",letter[0]?.date);

    return(
        <div className="grid place-items-center w-10/12 py-5">
            { 
                letter?.map((letter) => (
                    <Letter 
                        key={letter.postIdx}
                        tagId = {id}
                        postId={letter.postIdx}
                        sender={letter.sender}
                        date = {letter.date.slice(0,10)}
                    />
                ))
            }
        </div>
    );
}

export default Letterbox;