import { useState } from "react";
const MakeTagInfo = () => {
    const [tagname, setTagName] = useState("");
    function handleInputChange(e){
        setTagName(e.target.value);
    }
    return (
        <div>
            <div className="w-44 h-44 bg-slate-300 flex ">
                <div>{tagname}</div>
            </div>
            <div>
                <span>태그이름</span>
                <input 
                    placeholder="태그이름을 입력해 주세요"
                    value = {tagname}
                    onChange = {handleInputChange}
                />
            </div>
            <div>
                <span> 태그색상</span>
                
            </div>
        </div>
    )
}
export default MakeTagInfo;