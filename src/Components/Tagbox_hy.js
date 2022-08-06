import Tags from "./Tags_hy";
import * as getTags from '../getTags';

function Tagbox() {
    var tmp = new Object();
    tmp = getTags.getTags(); 

    console.log(tmp); 

    const tagNum = tmp.length//Object.keys(tmp);
    console.log(tagNum);

    return(
        <div className="grid grid-cols-2 place-items-center w-10/12 py-5">
            <Tags id={-1} name={""} letters={[]}/>
            {
                tmp.map((tag) => (
                    <Tags 
                        key={tag.id}
                        id={tag.id}
                        name={tag.name}
                        letters={tag.letters}
                        color={tag.color}
                    />
                ))
            }
        </div>
    );
}

export default Tagbox;