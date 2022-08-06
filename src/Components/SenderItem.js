import { useNavigate } from "react-router-dom";

const SenderItem = ({ randid, sender }) => {
  const navigate = useNavigate();
  const getTag = () => {
    navigate(`/senderUser/${sender}`);
  };
  return (
    <div>
      <div>
        <button
          onClick={getTag}
          class="h-12 w-4/5 my-3 mx-10 border cursor-pointer rounded px-12 py-3 bg-[#92C7DF] text-white"
        >
          <img
            class="h-10 w-1/6 -mx-8 -my-3 rounded-full"
            src={process.env.PUBLIC_URL + `/assets/user_img${randid}.png`}
          />
          {sender}로부터 온 편지
        </button>
      </div>
    </div>
  );
};

export default SenderItem;
