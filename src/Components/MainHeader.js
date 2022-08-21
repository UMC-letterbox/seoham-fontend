import {Link} from "react-router-dom";

function MainHeader () {

    return (
        <div class="sm: justify-center items-center m-0 px-4 buri">
        <header className="py-1 mt-5 flex items-center">
          <div className="w-1/4 flex justify-center">
            <h1 className="font-bold text-xl text-rose-300">서함</h1>
          </div>
          <div className="w-2/4 flex justify-center text-ceneter"></div>
          <div className="w-1/4 flex justify-center">
            <Link to={"/mypage"}>
            <button className="rounded-full flex items-center bg-white">
              <div className="w-9">
              <svg  viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="99" fill="white" stroke="#BABABA" strokeWidth="2"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M88.9344 110.246C72.1782 110.246 58.3579 122.816 56.3882 139.04C56.1219 141.233 57.9384 143.033 60.1475 143.033H139.852C142.062 143.033 143.878 141.233 143.612 139.04C141.642 122.816 127.822 110.246 111.066 110.246H88.9344Z" fill="#FAD4D4"/>
                <circle cx="100" cy="77.4591" r="22.9508" fill="black" fillOpacity="0.4"/>
                <circle cx="100" cy="77.4591" r="22.9508" fill="#FAD4D4"/>
              </svg>
              </div>
            </button>
            </Link>        
          </div>
        </header>
      </div>
    );
}

export default MainHeader;