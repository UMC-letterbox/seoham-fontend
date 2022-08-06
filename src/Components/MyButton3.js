//얘만 살짝 다른 버전
const MyButton3 = ({ text, onClick }) => {
  return (
    <button
      class="border cursor-pointer rounded-full font-bold h-10 w-10 fixed right-0 bottom-0 bg-[#92C7DF] text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default MyButton3;
