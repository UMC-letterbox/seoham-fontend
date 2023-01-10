const Select = ({ TagText, DateText, SenderText }) => {
  return (
    <div class="p-2 text-white sticky top-0 uppercase bg-white dark:bg-[#232425]">
      <div>
        {TagText}
        {DateText}
        {SenderText}
      </div>
    </div>
  );
};

export default Select;
