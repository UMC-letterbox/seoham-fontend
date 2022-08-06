import TagItem from "./TagItem";
import NextButton from "./NextButton";
import { useNavigate } from "react-router-dom";

const InitialTagbox = ({ tagList }) => {
  const navigate = useNavigate();
  return (
    <div>
      <NextButton
        text={"다음페이지로"}
        onClick={() => {
          navigate("/next");
        }}
      />
      {tagList.map((it) => (
        <TagItem key={it.id} {...it} />
      ))}
    </div>
  );
};

InitialTagbox.defaultProps = {
  tagList: [],
};

export default InitialTagbox;
