const NextButton = ({ text, onClick }) => {
  return (
    <button
      className="h-24 w-32 m-2 border cursor-pointer rounded px-5 py-3 bg-[#ececec] text-black"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default NextButton;
