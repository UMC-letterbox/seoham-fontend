import { useNavigate } from "react-router-dom";

const SenderItem = ({ randid, sender }) => {
  const navigate = useNavigate();
  const getTag = () => {
    navigate(`/senderUser/${sender}`);
  };
  const letterNum = 1; //임시
  return (
    <div>
      <div>
        <button
          onClick={getTag}
          className="flex justify h-20 w-4/5 my-3 mx-10 border cursor-pointer rounded-md shadow-md px-3 py-1 bg-white"
        >
          <div className="self-center mr-3">
            <img
              className="w-10 rounded-full"
              src={"/img/user.png"/*process.env.PUBLIC_URL + `/assets/user_img${randid}.png`*/ /*<<랜덤 이미지 부분*/}
            />
          </div>
          <span className="grid content-between h-5/6 pt-1">
            <div className="">
              <span>{sender}</span>
              <span className="text-sm">님으로부터 온 편지</span>
            </div>
            <div className="flex justify">
              <img src="/img/email.png" className="w-6 h-6"/>
              &nbsp;{letterNum}개
            </div>
          </span>
        </button>
      </div>
    </div>
  );
};

export default SenderItem;
