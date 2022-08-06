import '../css/App.css';
import {Link} from "react-router-dom";

function Addletter() {

    return (
        <Link to={'/newLetter'}>
            <button className="addBtn text-3xl shadow-xl">
                {/*<img src="/img/add.png"/>*/}
                +
            </button>
        </Link>
    );
}

export default Addletter;