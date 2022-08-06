const UpButton = ({ text, onClick }) => {
  return (
    <button
      class="border cursor-pointer rounded-full h-10 w-10 fixed right-0 bottom-10 bg-[#92C7DF] text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default UpButton;
