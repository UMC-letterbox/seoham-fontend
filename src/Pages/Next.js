import { useNavigate } from "react-router-dom";
import MyButton2 from "../Components/MyButton2";
import MyButton3 from "../Components/MyButton3";

const Next = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Next page from Home</h1>
      <p>라우팅 성공!</p>
      <MyButton2
        text={"<--"}
        onClick={() => {
          navigate(-1);
        }}
      />
      <MyButton3
        text={"+"}
        onClick={() => {
          navigate("/new");
        }}
      />
    </div>
  );
};

export default Next;
