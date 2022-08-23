import Tags from "./Tags_hy";
import * as getTags from '../getTags';
import {  useEffect, useState } from "react";
function Tagbox(taglist) {
    // var tmp = new Object();
    // tmp = getTags.getTags(); 
    console.log(typeof(taglist));
    console.log(taglist.taglist);
    //const tagNum = tags.length//Object.keys(tmp);
    //console.log(tagNum);
    
    return(
        <div className="grid grid-cols-2 place-items-center w-10/12 py-5">
            <Tags id={-1} name={""} letters={[]}/>
            {
                taglist.taglist.map((tag) => (
                    <Tags 
                        key={tag.tagIdx}
                        id={tag.tagIdx}
                        name={tag.tagName}
                        // letters={tag.letters}
                        color={tag.tagColor}
                    />
                ))
            }
        </div>
    );
}

export default Tagbox;