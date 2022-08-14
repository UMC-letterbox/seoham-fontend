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

const getDate = (timestamp) => {
  let date = new Date(timestamp);
  return date;
}

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

  var letters = getProcessedDateBox();
  var new_letters = []
  console.log(letters);
  letters.map((it) => (
    new_letters.push({date: it.date, letter: it})
  ))

  let pre = 0;
  const sortedLetter = [];
  let tmp = [] 
  new_letters.map((it, index) => {
    if(it.date !== pre){
      if(pre !== 0) sortedLetter.push(tmp);
      tmp = []
      tmp.push(it)
      if(index === new_letters.length - 1) sortedLetter.push(tmp);
    }
    else{
      tmp.push(it)
      if(index === new_letters.length - 1) sortedLetter.push(tmp);
    }
    pre = it.date;
  })

  return (
    <div>
      <div class="flex justify-end">
        <ControlMenu
          value={sortType}
          onChange={setSortType}
          optionList={sortOptionList}
        />
      </div>

      {/*
      <div class="overflow-x-scroll whitespace-nowrap">
        {getProcessedDateBox().map((it) => (
          <DateItem key={it.id} {...it} />
        ))}
      </div>
        */}
      {
        sortedLetter.map(array => 
          {
            return <div className="overflow-x-scroll whitespace-nowrap">
              <h1>{getDate(array[0].date).getFullYear()}.{getDate(array[0].date).getMonth()+1}.{getDate(array[0].date).getDate()}</h1>
              {console.log(array[0].date)}
            {
            array.map(it => (
              <DateItem key={it.letter.id} {...it.letter} />
            ))
            }
            </div>
          }
        )
      }
      
    </div>
  );
};

Datebox.defaultProps = {
  tagList: [],
};

export default Datebox;
