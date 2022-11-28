import React from "react";
import "../css/Modal.css";
import { useEffect, useState } from "react";

function Modal({ modalClose, modalCheck, setSelected }) {
  const [tmpSelected, setTmpSelected] = useState(["YYYY", "MM", "DD"]);

  const now = new Date();
  const [form, setForm] = useState({
    year: String(now.getFullYear()),
    month: "01",
    day: "01",
  });

  let years = [];
  for (let y = now.getFullYear(); y >= 1930; y -= 1) {
    years.push(y);
  }
  let months = [];
  for (let m = 1; m <= 12; m += 1) {
    if (m < 10) {
      months.push("0" + m.toString());
    } else {
      months.push(m.toString());
    }
  }
  let days = [];
  let date = new Date(form.year, form.month, 0).getDate();
  for (let d = 1; d <= date; d += 1) {
    if (d < 10) {
      days.push("0" + d.toString());
    } else {
      days.push(d.toString());
    }
  }

  useEffect(() => {
    setTmpSelected([form.year, form.month, form.day]);
  }, [form]);

  const onCloseModal = (e) => {
    console.log("e.target: ", e.target);
    console.log("e.tarcurrentTargetget: ", e.currentTarget);
    if (e.target === e.currentTarget) {
      modalClose();
    }
  };
  const onCheckModal = () => {
    /* 편지지 선택 처리 */
    setSelected(tmpSelected);
    modalCheck();
  };
  const onSelectLetter = (e) => {
    console.log("event: ", e.target.value);
    setTmpSelected(e.target.value);
  };
  return (
    <div className="modal_container" onClick={onCloseModal}>
      <div className="modal w-10/12 h-2/6 rounded-xl shadow-md dark:bg-[#47484A]">
        <h1 className="text-xl font-bold text-center py-5">날짜 선택</h1>
        <div className="flex justify-center mt-5 p-3">
          <select
            value={form.year}
            onChange={(e) => setForm({ ...form, year: e.target.value })}
            className="w-1/4 h-10 text-center border-y-2 border-[#989898] m-2 dark:bg-[#47484A]"
          >
            {years.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          <select
            value={form.month}
            onChange={(e) => setForm({ ...form, month: e.target.value })}
            className="w-1/4 h-10 text-center border-y-2 border-[#989898] m-2 dark:bg-[#47484A]"
          >
            {months.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          <select
            value={form.day}
            onChange={(e) => setForm({ ...form, day: e.target.value })}
            className="w-1/4 h-10 text-center border-y-2 border-[#989898] m-2 dark:bg-[#47484A]"
          >
            {days.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="modal_button">
          <button className="p-3" onClick={modalClose}>
            취소
          </button>
          <button className="p-3 text-[#EF9F9F]" onClick={onCheckModal}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
