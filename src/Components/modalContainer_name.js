import { useState } from "react";
import Modal_name from "./Modal_name";

function ModalContainer_name({ setNickname }) {
  const [modalOpen, setModalOpen] = useState(false);
  const modalClose = () => {
    console.log("닫기");
    setModalOpen((modalOpen) => !modalOpen);
  };
  const modalCheck = () => {
    console.log("확인");
    setModalOpen((modalOpen) => !modalOpen);
  };

  return (
    <div className="w-full">
      <button
        className="rounded-full border border-2 border-[#EF9F9F] w-16 text-[#EF9F9F] dark:bg-[#323435]"
        onClick={modalCheck}
      >
        변경
      </button>
      {modalOpen && (
        <Modal_name
          modalClose={modalClose}
          modalCheck={modalCheck}
          setNickname={setNickname}
        />
      )}
    </div>
  );
}

export default ModalContainer_name;
