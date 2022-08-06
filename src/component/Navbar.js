import {Link} from "react-router-dom";

function Navbar(){

    return(
        <nav>
            <div className="flex justify-between px-6 py-6 w-full min-h-10 h-1/4">
                <Link to={"/"}>
                    <p className="font-bold text-xl text-rose-300">서함</p>
                </Link>    
                <button className="rounded-full bg-white">
                    <img src="/img/user.png" className="w-6 h-6"/>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
