import React from 'react';
import '../css/Modal.css';
import {useEffect, useState} from 'react';

function Modal_sender({modalClose, sender}){
    const onCloseModal = (e) => {
        //console.log('e.target: ', e.target);
        //console.log('e.tarcurrentTargetget: ', e.currentTarget)
        if(e.target === e.currentTarget){
            modalClose();
        }
    }

    const [name, setName] = useState("");
    const handleNameChange = (e) => {
        setName(e.target.value);
        console.log('보낸이 변경: ', e.target.value);
    }

    const changeSender = () => {
        /* 분명 보낸이 id 값 없다했는데, 오류는 아이디를 확인하래... */
        console.log(name, typeof(name))
        
        fetch(`https://www.duke0410.shop/posts/senders/edit/${sender}`, {
            method: "PATCH",
            headers : {
                "x-access-token" : localStorage.getItem('login_token'),
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                changedSender : name,
            }),
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if (res.isSuccess){
                alert('수정되었습니다.')
                modalClose();
            }
            else{
                alert('오류가 발생했습니다.')
            }
        })
    }

    return (
        <div className='modal_container' onClick={onCloseModal}>
            <div className='modal w-10/12 h-36 rounded-xl shadow-md px-8 py-4'>
                <div className='flex justify-center'>
                    <div className="flex flex-col">
                    <h1 className='text-center font-semibold buri'>보낸이 수정</h1>
                    <input className="w-40 border-b-2 my-3 text-center"
                            name="nickname"
                            value= {name}
                            onChange={handleNameChange}
                            placeholder="이름을 입력해주세요"
                        />
                    <button className='text-sm text-[#EF9F9F] rounded-full border border-[#EF9F9F] py-1 px-2'
                            onClick = {changeSender}
                        >
                            변경
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal_sender;
