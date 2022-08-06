import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Letter({tagId, id, writer, year, month, day}) {
    console.log('id들', tagId, id)
    return(
        <div className="w-full h-40 bg-red-50 m-3 rounded-md p-5">
            <Link to={`/letter/${tagId}/${id}`}>
                <div className="w-full h-full">
                    보내는 사람: {writer}님<br/>
                    {/*{year}.{month}.{day}.*/}
                </div>
            </Link>
        </div>
    );
}

export default Letter;