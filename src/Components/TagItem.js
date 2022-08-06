import { useNavigate } from "react-router-dom";

const TagItem = ({ tagName }) => {
  const navigate = useNavigate();
  const getTag = () => {
    navigate(`/tag/${tagName}`);
  };
  return (
    <div>
      <div>
        <button
          onClick={getTag}
          class="h-24 w-32 m-2 border float-left cursor-pointer rounded px-5 py-3 bg-[#92C7DF] text-white"
        >
          #{tagName}
        </button>
      </div>
    </div>
  );
};

export default TagItem;
