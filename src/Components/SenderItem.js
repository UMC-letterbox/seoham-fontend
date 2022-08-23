import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
const SenderItem = ({ randid, sender, count }) => {
  const navigate = useNavigate();
  const getTag = () => {
    console.log('count:', count)
    navigate(`/senderUser/${sender}`, {
      state: {
        letterCount : count,
      }
    });
  };
  
  const UserSvgGreen = () =>{
    return (
      <svg  viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="100" fill="#DAE2B6"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M88.9344 110.246C72.1782 110.246 58.3578 122.816 56.3882 139.04C56.1219 141.233 57.9384 143.033 60.1475 143.033H139.852C142.062 143.033 143.878 141.233 143.612 139.04C141.642 122.816 127.822 110.246 111.066 110.246H88.9344Z" fill="#F7EDDB"/>
            <circle cx="100" cy="77.4591" r="22.9508" fill="black" fillOpacity="0.4"/>
            <circle cx="100" cy="77.4591" r="22.9508" fill="#F7EDDB"/>
      </svg>
    )
  }
  const UserSvgPink = () => {
    return(
      <svg  viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="100" fill="#EF9F9F"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M88.9344 110.246C72.1782 110.246 58.3578 122.816 56.3882 139.04C56.1219 141.233 57.9384 143.033 60.1475 143.033H139.852C142.062 143.033 143.878 141.233 143.612 139.04C141.642 122.816 127.822 110.246 111.066 110.246H88.9344Z" fill="#FFF2F2"/>
      <circle cx="100" cy="77.4591" r="22.9508" fill="black" fillOpacity="0.4"/>
      <circle cx="100" cy="77.4591" r="22.9508" fill="#FFF2F2"/>
    </svg>
    )
    }
  const UserSvgPurple = () => {
    return (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="100" fill="#BFA2DB"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M88.9344 110.246C72.1782 110.246 58.3578 122.816 56.3882 139.04C56.1219 141.233 57.9384 143.033 60.1475 143.033H139.852C142.062 143.033 143.878 141.233 143.612 139.04C141.642 122.816 127.822 110.246 111.066 110.246H88.9344Z" fill="#F3F1F5"/>
        <circle cx="100" cy="77.4591" r="22.9508" fill="black" fillOpacity="0.4"/>
        <circle cx="100" cy="77.4591" r="22.9508" fill="#F3F1F5"/>
      </svg>
    )
  }
  const UserSvgOrange = () => {
    return (
      <svg  viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="100" fill="#FFD9C0"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M88.9344 110.246C72.1782 110.246 58.3578 122.816 56.3882 139.04C56.1219 141.233 57.9384 143.033 60.1475 143.033H139.852C142.062 143.033 143.878 141.233 143.612 139.04C141.642 122.816 127.822 110.246 111.066 110.246H88.9344Z" fill="#FAF0D7"/>
      <circle cx="100" cy="77.4591" r="22.9508" fill="black" fillOpacity="0.4"/>
      <circle cx="100" cy="77.4591" r="22.9508" fill="#FAF0D7"/>
      </svg>

    )
  }
  const UserSvgWhite = () => {
    return (
      <svg  viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="99" fill="white" stroke="#BABABA" strokeWidth="2"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M88.9344 110.246C72.1782 110.246 58.3579 122.816 56.3882 139.04C56.1219 141.233 57.9384 143.033 60.1475 143.033H139.852C142.062 143.033 143.878 141.233 143.612 139.04C141.642 122.816 127.822 110.246 111.066 110.246H88.9344Z" fill="#FAD4D4"/>
      <circle cx="100" cy="77.4591" r="22.9508" fill="black" fillOpacity="0.4"/>
      <circle cx="100" cy="77.4591" r="22.9508" fill="#FAD4D4"/>
      </svg>

    )
  }
  console.log(Math.floor(Math.random()* 5));
  const myArr = [
    <UserSvgGreen />,
    <UserSvgOrange />,
    <UserSvgPink />,
    <UserSvgPurple />,
  ]

  return (
    <div >
      <div className="buri">
        <button
          onClick={getTag}
          className="flex justify h-20 w-4/5 my-7 mx-10 border cursor-pointer rounded-md shadow-md bg-white"
        >
          <div className="h-20 flex justify-center items-center">
            <div className=" ml-4 w-12">
            {
              myArr[Math.floor(Math.random()* 4)]
            }
          </div></div>
          
          <div className="mt-4 mx-4 content-between h-20 ">
            <div className="flex items-center">
              <span className="mr-1">{sender}</span>
              <span className="text-sm">  님으로부터 온 편지</span>
            </div>
            <div className="flex items-center text-[#F47C7C] mt-1 text-xs">
              <div className="w-4 mr-1">
                <svg  viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.833 0.166668H2.16634C1.02051 0.166668 0.0830078 1.10417 0.0830078 2.25V14.75C0.0830078 15.8958 1.02051 16.8333 2.16634 16.8333H18.833C19.9788 16.8333 20.9163 15.8958 20.9163 14.75V2.25C20.9163 1.10417 19.9788 0.166668 18.833 0.166668ZM18.4163 4.59375L11.6038 8.85417C10.9268 9.28125 10.0726 9.28125 9.39551 8.85417L2.58301 4.59375C2.32259 4.42708 2.16634 4.14584 2.16634 3.84375C2.16634 3.14584 2.92676 2.72917 3.52051 3.09375L10.4997 7.45834L17.4788 3.09375C18.0726 2.72917 18.833 3.14584 18.833 3.84375C18.833 4.14584 18.6768 4.42708 18.4163 4.59375Z" fill="#F47C7C"/>
                </svg>
              </div>
              &nbsp;{count}개
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SenderItem;
