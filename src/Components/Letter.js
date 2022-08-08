import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Letter({tagId, id, writer, year, month, day}) {
    console.log('id들', tagId, id)
    return(
        <div className="relative w-full h-40 bg-zinc-100 m-3 p-5 rounded-md shadow-md">
            <Link to={`/letter/${tagId}/${id}`}>
                <div className="">
                    <span>
                        보낸이: {writer}
                    </span>
                    <span className="text-sm">
                        &nbsp;님
                    </span>
                    <span className="absolute right-5 bottom-5">{year}.{month}.{day}</span>
                </div>
            </Link>
        </div>
    );
}

export default Letter;