import "../css/upButton.css";

const UpButton = ({ text, onClick }) => {
  return (
    <button
      class="upBtn border border-zinc-400 cursor-pointer rounded-full h-10 w-10 fixed right-2 bottom-14 text-zinc-400"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default UpButton;
