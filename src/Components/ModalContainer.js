import {useState} from 'react';
import Modal from './Modal';

function ModalContainer({setSelected, selected}){
    const [modalOpen, setModalOpen] = useState(false);
    const modalClose = () => {
        console.log("닫기");
        setModalOpen((modalOpen) => !modalOpen);
    }
    const modalCheck = () => {
        console.log("확인");
        setModalOpen((modalOpen) => !modalOpen);
    }
    console.log(selected, selected.length, modalOpen);

    let dayColor = selected.length === 0 ? "#989898" : "#EF9F9F"
    
    return(
        <div className='w-full'>
            <div className="flex justify-end mr-11">
                <button className={`border-y-2 px-3 py-2 my-4 border-[${dayColor}]`} onClick={modalCheck}>
                    {
                        selected.length === 0 ?
                        <p className="text-[#989898]">날짜: YYYY년 MM월 DD일</p>
                        :
                        <p className="text-[#EF9F9F]">날짜: {selected[0]} 년  {selected[1]} 월  {selected[2]} 일</p>
                    }
                </button>
            </div>
            {modalOpen && <Modal modalClose={modalClose} modalCheck={modalCheck} setSelected={setSelected}></Modal>}
        </div>
    );
}

export default ModalContainer;