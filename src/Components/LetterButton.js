const LetterButton = ({ text, onClick }) => {
  return (
    <button
      class="h-48 w-64 block m-auto border cursor-pointer rounded px-5 py-3 bg-[#ececec] text-black"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default LetterButton;
