import { useNavigate } from "react-router-dom";

const DateItem = ({ id, tagName, sender, date }) => {
  const navigate = useNavigate();
  const getTag = () => {
    navigate(`/view/${id}`);
  };
  return (
    <div class="inline-flex flex-row">
      <button
        onClick={getTag}
        class="h-24 w-32 m-2 border cursor-pointer whitespace-nowrap rounded-md px-5 py-3 bg-[#92C7DF] text-white shadow-md"
      >
        <div class="text-left">{sender}</div>
        <br></br>
        <div class="text-right">#{tagName}</div>
      </button>
    </div>
  );
};

export default DateItem;
