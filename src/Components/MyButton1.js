const MyButton1 = ({ text, onClick }) => {
  return (
    <button
      class="border cursor-pointer rounded px-5 py-3 bg-[#64c964] text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default MyButton1;
