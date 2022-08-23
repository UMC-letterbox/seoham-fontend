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

const Datebox = ({ dataList }) => {
  const [sortType, setSortType] = useState("latest");
  const getProcessedDateBox = () => {
    const compare = (a, b) => {
      //console.log('timestamp 두개 비교' ,getDate(a.date).getTime(), getDate(b.date).getTime())
      if (sortType === "latest") {
        return parseInt(getDate(b.date).getTime()) - parseInt(getDate(a.date).getTime());
      } else {
        return parseInt(getDate(a.date).getTime()) - parseInt(getDate(b.date).getTime());
      }
    };
    const copyList = JSON.parse(JSON.stringify(dataList));
    const sortedList = copyList.sort(compare);
    console.log(sortedList);
    return sortedList;
  };

  var letters = getProcessedDateBox();
  // var new_letters = []
  // console.log(letters);
  // letters.map((it) => (
  //   new_letters.push({date: it.date, letter: it})
  // ))

  let pre = 0;
  const sortedLetter = [];
  let tmp = [] 
  letters.map((it, index) => {
    if(it.date !== pre){
      if(pre !== 0) sortedLetter.push(tmp);
      tmp = []
      tmp.push(it)
      if(index === letters.length - 1) sortedLetter.push(tmp);
    }
    else{
      tmp.push(it)
      if(index === letters.length - 1) sortedLetter.push(tmp);
    }
    pre = it.date;
  })

  return (
    <div>
      <div class="flex justify-end buri text-sm">
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
        sortedLetter.map((array, index) => 
          {
            return <div key={index} className="mt-2 mb-8 ml-5 buri">
              <h1>{getDate(array[0].date).getFullYear()}년 {getDate(array[0].date).getMonth()+1}월 {getDate(array[0].date).getDate()}일</h1>
              {console.log(array[0].date)}
              <div  className="overflow-x-scroll whitespace-nowrap mt-2">
            {
            array.map(it => (
              <DateItem key={it.postIdx} {...it} />
            ))
            }
              </div>
            </div>
          }
        )
      }
      
    </div>
  );
};

Datebox.defaultProps = {
  dataList: [],
};

export default Datebox;