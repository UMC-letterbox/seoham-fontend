import { useNavigate } from "react-router-dom";
import LetterButton from "../Components/LetterButton";
const New = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 class="m-10 text-center">
        편지를 작성할 방법을<div class="text-center">선택해주세요</div>
      </h1>
      <div>
        <LetterButton
          text={"이미지로 가져오기"}
          onClick={() => {
            navigate("/letter");
          }}
        />
      </div>
      <div class="m-3">
        <LetterButton
          text={"텍스트로 가져오기"}
          onClick={() => {
            navigate("/letter");
          }}
        />
      </div>
    </div>
  );
};

export default New;
