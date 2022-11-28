import "../css/upButton.css";

const UpButton = ({ text, onClick }) => {
  return (
    <button
      className="flex justify-center items-center upBtn border border-zinc-400 cursor-pointer rounded-full h-10 w-10 fixed right-2 bottom-14 text-zinc-400 dark:bg-[#48484A]"
      onClick={onClick}
    >
      <svg
        className="w-5"
        viewBox="0 0 23 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.36635 13.066L3.3659 13.0664C2.78116 13.6511 1.83774 13.6511 1.25301 13.0664C0.668269 12.4817 0.668269 11.5383 1.25301 10.9535L10.433 1.77351C11.0203 1.1862 11.9801 1.19289 12.5413 1.76889L12.5413 1.76892L12.5459 1.77351L21.7259 10.9535C22.3106 11.5383 22.3106 12.4817 21.7259 13.0664C21.1412 13.6511 20.1977 13.6511 19.613 13.0664L11.853 5.30641L11.4999 4.95331L11.1464 5.30595L3.36635 13.066Z"
          fill="#989898"
          stroke="white"
        />
      </svg>
    </button>
  );
};

export default UpButton;
