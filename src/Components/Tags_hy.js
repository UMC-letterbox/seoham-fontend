import {Link} from "react-router-dom";

function Tags({id, name, letters, color}) {
    console.log(id, name, color)
    return(
        <div>
            {
                id === -1 ? 
                <button className="w-32 h-20 bg-gray-200 m-3 font-bold rounded-md shadow-md">
                    <Link to={`/newTag`}><p className="text-3xl">+</p></Link>
                </button>
                :
                <button 
                    style={{backgroundColor: color}}
                    className="w-32 h-20 m-3 font-bold rounded-md shadow-md"
                >
                    <Link to={`/tags/${id}`}>#{name}</Link>
                </button>

            }
        </div>
    );
}

export default Tags;
