import React from 'react';
import '../css/Modal.css';
import {useState} from 'react';

function Modal({modalClose, modalCheck, setSelected}){
    const [tmpSelected, setTmpSelected] = useState(0);

    const onCloseModal = (e) => {
        console.log('e.target: ', e.target);
        console.log('e.tarcurrentTargetget: ', e.currentTarget)
        if(e.target === e.currentTarget){
            modalClose();
        }
    }
    const onCheckModal = () => {
        /* 편지지 선택 처리 */
        setSelected(tmpSelected);
        modalCheck()
    }
    const onSelectLetter = (e) => {
        console.log('event: ', e.target.value);
        setTmpSelected(e.target.value);
    }
    return (
        <div className='modal_container' onClick={onCloseModal}>
            <div className='modal w-11/12 h-5/6'>
                <div className='sticky bg-white py-5'>
                    <button className='modal_button' onClick={modalClose}>
                        <img src='/img/close.png' className='w-3 h-3 m-2'/>
                    </button>
                    {
                        tmpSelected===0?
                        <img src='/img/check-empty.png' className='modal_check w-4 h-4 m-2'/>
                        :
                        <button className='modal_check' onClick={onCheckModal}>
                            <img src='/img/check-green.png' className='w-4 h-4 m-2'/>
                        </button>

                    }

                    <h1 className='text-2xl font-bold text-center'>
                        편지지
                    </h1>
                </div>
                <div className='flex justify-center h-full'>
                    <div className='letter_papers grid grid-cols-2 gap-2 place-content-start place-items-center bg-rose-300 w-5/6 h-full'>
                        <button className='letter bg-blue-200' value="1" onClick={onSelectLetter}>1</button>
                        <button className='letter bg-blue-200' value="2" onClick={onSelectLetter}>2</button>
                        <button className='letter bg-blue-200' value="3" onClick={onSelectLetter}>3</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;

/*<div className="nameOfFood flex flex-col w-1/4 h-full m-5">
<img src={foodImg}/>
<button className='border rounded-xl bg-blue-300 h-10 hover:bg-blue-500'>근처 "{name}"집 찾아보기</button>
</div>*/

//overflow-y-auto

//food 부분에 이제 axios 사용하기 - api 받아서 넣기