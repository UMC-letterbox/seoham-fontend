import { useNavigate } from "react-router-dom";

const DateItem = ({ postIdx, tagIdx, tagName, sender, tagColor, date }) => {
  const navigate = useNavigate();
  const getTag = () => {
    navigate(`/letter/${tagIdx}/${postIdx}`); ///letter/:tagId/:id
  };
  console.log(tagColor);
  return (
    <div class="inline-flex flex-row">
      {tagName.length == 1 ? (
        <div>
          <button
            onClick={getTag}
            class={`h-24 w-32 m-2 border cursor-pointer whitespace-nowrap rounded-xl px-5 py-3 text-white text-sm bg-[${tagColor}] shadow-md`}
          >
            <div class="text-left">{sender}</div>
            <br></br>
            <div class="text-right">#{tagName}</div>
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={getTag}
            class={`h-24 w-32 m-2 border cursor-pointer whitespace-nowrap rounded-xl px-5 py-3 text-white text-sm bg-[${tagColor[0]}] shadow-md`}
          >
            <div class="text-left">{sender}</div>
            <br></br>
            <div class="text-right">
              #{tagName[0]} 외<div></div>
              {tagName.length - 1}개 태그
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default DateItem;
