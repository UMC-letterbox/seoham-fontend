import {Link} from "react-router-dom";
import "../css/pulse.css";
function Tags({id, name, letters, color}) {
    console.log(id, name, color)
    return(
        <div className="effect">
            {
                id === -1 ?
                <Link to={`/newTag`}>
                <button className="w-32 h-20 bg-[#BABABA] m-3 font-bold rounded-md shadow-md">
                        <span className="flex justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 12.1074H22M12 2V22" stroke="white" stroke-width="4" stroke-linecap="round"/>
                        </svg>
                        </span>
                </button>
                </Link>
                :
                <Link to={`/tags/${id}`}>
                <button 
                    style={{backgroundColor: color}}
                    className="grid place-items-start w-32 h-20 m-3 p-2 font-bold rounded-md shadow-md buri text-white text-sm"
                >
                    #{name}
                </button>
                </Link>
            }
        </div>
    );
}

export default Tags;
