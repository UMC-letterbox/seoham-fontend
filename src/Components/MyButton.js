const MyButton = ({ text, onClick, isClick }) => {
  console.log('isClick', isClick);
  return (
    <button
      className={`cursor-pointer rounded px-5 py-3 
        ${isClick ? 'text-rose-300 border-b-4 border-rose-300' : 'text-zinc-400'}
      `}
      onClick={onClick}
      
    >
      {text}
    </button>
  );
};

export default MyButton;
