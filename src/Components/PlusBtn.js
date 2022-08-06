import {Link} from "react-router-dom";

const PlusBtn =()=>{
    return (
        <button className="bg-red-400 rounded-full h-10 w-10 fixed bottom-7 right-7 animate-bounce" 
                > 
                <Link to={"/selectlettertype"}> + </Link>
        </button>
    )
}

export default PlusBtn;