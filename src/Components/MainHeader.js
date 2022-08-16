import {Link} from "react-router-dom";

function MainHeader () {
    return (
        <div class="sm: justify-center items-center m-0 px-8">
        <header className="py-5 flex items-center">
          <div className="w-1/4 flex justify-start">
            <h1 className="font-bold text-xl text-rose-300">서함</h1>
          </div>
          <div className="w-2/4 flex justify-center text-ceneter"></div>
          <div className="w-1/4 flex justify-end">
            <Link to={"/mypage"}>
            <button className="rounded-full bg-white">
              <img src="/img/user.png" className="w-6 h-6"/>
            </button>
            </Link>        
          </div>
        </header>
      </div>
    );
}

export default MainHeader;