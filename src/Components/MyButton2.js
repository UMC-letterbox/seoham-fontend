const MyButton2 = ({ text, onClick }) => {
  return (
    <button
      class="border cursor-pointer rounded px-5 py-3 bg-[#CAB9DE] text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default MyButton2;
