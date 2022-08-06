import Tag from "./Tag";
import {Link} from "react-router-dom";
const Tags=()=>{
    return(
        <div className="flex flex-wrap">
            <Link to="maketaginfo" className="w-1/3 h-12 mr-5 ml-5 text-center">
                <Tag 
                    tagName=" + "
                />
            </Link>
            <Tag 
                tagName="#birthday"
            />
            <Tag 
                tagName="#holiday"
            />
            <Tag 
                tagName="#D-Day"
            />
        </div>
    )
}
export default Tags;