import {Link} from "react-router-dom";
function NavBar(){
    return (
        <div className="flex flex-nowrap h-8 sticky top-0">
            <div className="basis-1/3 text-center hover:text-red-600"><Link to={"/"} >태그별</Link></div>
            <div className="basis-1/3 text-center  hover:text-red-600"><Link to={"/maindate"}> 날짜별</Link></div>
            <div className="basis-1/3 text-center  hover:text-red-600"><Link to={"/maincaller"}> 보낸이별</Link></div>
        </div>
    )
}
export default NavBar;