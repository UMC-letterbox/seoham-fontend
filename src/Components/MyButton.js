const MyButton = ({ text, onClick }) => {
  return (
    <button
      class="border border-pink-300 cursor-pointer rounded px-5 py-3 bg-[#FEB3DD] text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default MyButton;
