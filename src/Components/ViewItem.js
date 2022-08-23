import { useNavigate } from "react-router-dom";

const ViewItem = ({ postIdx, tagName, date, tagColor, tagIdx }) => { //tagColor, tagIdx 추가로 얻기
  const navigate = useNavigate();
  //const tagIdx = 0; // 임시
  const getTag = () => {
    navigate(`/letter/${tagIdx}/${postIdx}`);
  };
  const strDate = new Date(date).toLocaleDateString();
  return (
    <div>
      <div>
        <button
          onClick={getTag}
          class={`h-28 w-36 m-3  buri float-left cursor-pointer rounded-xl px-5 py-3 bg-[${tagColor}] text-white shadow-md`}
        >
          <div class="text-left py-2">#{tagName}</div>
          <br></br>
          <div class="text-right">{strDate}</div>
        </button>
      </div>
    </div>
  );
};

export default ViewItem;
