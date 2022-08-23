import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Letter({tagId, postId, sender, date}) {
    console.log('id들', tagId, postId);
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    
    return(
        <div data-aos="fade-up" data-aos-duration="2000" className="relative w-full h-40 bg-zinc-100 m-3 p-5 rounded-md shadow-md">
            <Link to={`/letter/${tagId}/${postId}`}>
                <div className="w-full h-full">
                    <span>
                        보낸이: {sender}
                    </span>
                    <span className="text-sm">
                        &nbsp;님
                    </span>
                    <span className="absolute right-5 bottom-5">{date}</span>
                </div>
            </Link>
        </div>
    );
}

export default Letter;
