const MyButton3 = ({ text, onClick }) => {
  return (
    <button
      class="dark:bg-[#48484A] flex justify-center items-center upBtn border border-zinc-400 cursor-pointer rounded-full font-bold h-10 w-10 fixed right-2 bottom-2 text-zinc-400"
      onClick={onClick}
    >
      <svg
        className="w-5"
        viewBox="0 0 23 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.5 11.1074H21.5M11.5 1V21"
          stroke="#989898"
          strokeWidth="2"
          stroke-linecap="round"
        />
      </svg>
    </button>
  );
};

export default MyButton3;
