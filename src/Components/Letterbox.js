import PropTypes from "prop-types";
import Letter from "./Letter";
import {Link} from "react-router-dom";
import * as getTags from '../getTags';

function Letterbox({id}) {
    console.log(id);
    var tmp = getTags.getTag(id).letters; 

    console.log('태그', id, tmp); 


    return(
        <div className="grid place-items-center w-10/12 py-5">
            {
                tmp.map((letter) => (
                    <Letter 
                        key={letter.id}
                        tagId = {id}
                        id={letter.id}
                        writer={letter.writer}
                        year={letter.year}
                        month={letter.month}
                        day={letter.day}
                    />
                ))
            }
        </div>
    );
}

export default Letterbox;