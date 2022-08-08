//얘만 살짝 다른 버전
const MyButton3 = ({ text, onClick }) => {
  return (
    <button
      class="border border-zinc-400 cursor-pointer rounded-full font-bold h-10 w-10 fixed right-2 bottom-2 text-zinc-400 bg-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default MyButton3;
