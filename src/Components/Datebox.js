import { useState } from "react";
import DateItem from "./DataItem";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
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

const Datebox = ({ tagList }) => {
  const [sortType, setSortType] = useState("latest");
  const getProcessedDateBox = () => {
    const compare = (a, b) => {
      if (sortType === "latest") {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };
    const copyList = JSON.parse(JSON.stringify(tagList));
    const sortedList = copyList.sort(compare);
    return sortedList;
  };
  return (
    <div>
      <div class="flex justify-end">
        <ControlMenu
          value={sortType}
          onChange={setSortType}
          optionList={sortOptionList}
        />
      </div>
      <div class="overflow-x-scroll whitespace-nowrap">
        {getProcessedDateBox().map((it) => (
          <DateItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

Datebox.defaultProps = {
  tagList: [],
};

export default Datebox;
