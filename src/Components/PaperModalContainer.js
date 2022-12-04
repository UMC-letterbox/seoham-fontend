import PaperModal from "./PaperModal";
import { useState } from "react";
import "../css/paperModal.css";

const ModalLayer = () => {
  return <div className="modal-layer"></div>;
};

const PaperModalContainer = ({ setSelected, selected }) => {
  const [isOpen, setIsOpen] = useState("");
  const handleModalClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div>
      <button
        className=" bg-white decoration-white w-72  h-10 text-center font-semibold rounded-xl text-[#EF9F9F] border border-[#EF9F9F] buri dark:bg-[#47484A]"
        onClick={handleModalClick}
      >
        편지지 선택하기
      </button>
      {isOpen && (
        <PaperModal
          setSelected={setSelected}
          selected={selected}
          setIsOpen={setIsOpen}
        />
      )}
      {isOpen && <ModalLayer />}
    </div>
  );
};
export default PaperModalContainer;
