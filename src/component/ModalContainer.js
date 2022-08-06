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

    return(
        <div className='w-full'>
            <button onClick={modalCheck} className="w-full border-4">
                편지지 선택
            </button>
            {modalOpen && <Modal modalClose={modalClose} modalCheck={modalCheck} setSelected={setSelected}></Modal>}
        </div>
    );
}

export default ModalContainer;