const Select = ({ TagText, DateText, SenderText }) => {
  return (
    <div class="p-2 bg-[#FEB3DD] text-white sticky top-0 uppercase">
      <div>
        {TagText}
        {DateText}
        {SenderText}
      </div>
    </div>
  );
};

export default Select;
