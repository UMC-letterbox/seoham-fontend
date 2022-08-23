import { useState } from "react";
import SenderItem from "./SenderItem";

const sortOptionList = [
  { value: "nameval", name: "가나다순" },
  { value: "letternum", name: "편지갯수" },
];

const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select
      class="border-none rounded bg-transparent"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
};

const Senderbox = ({ tagList }) => {
  const [sortType, setSortType] = useState("nameval");
  const getProcessedSenderBox = () => {
    const compare = (a, b) => {
      if (sortType === "nameval") {
        return a.sender.toLowerCase() < b.sender.toLowerCase() ? -1 : 1;
      } else {
        return parseInt(b.count) - parseInt(a.count);
      }
    };
    const copyList = JSON.parse(JSON.stringify(tagList));
    const sortedList = copyList.sort(compare);
    return sortedList;
  };

  return (
    <div>
      <div className="flex justify-end mr-8 buri text-sm">
        <ControlMenu
          value={sortType}
          onChange={setSortType}
          optionList={sortOptionList}
        />
      </div>
      {getProcessedSenderBox().map(
        (
          it,
          index //어쩔 수 없이 index로 썼습니당...
        ) => (
          <SenderItem key={index} {...it} />
        )
      )}
    </div>
  );
};

Senderbox.defaultProps = {
  tagList: [],
};

export default Senderbox;
