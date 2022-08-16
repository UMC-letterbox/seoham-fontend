import React from 'react';
import '../css/Modal.css';
import {useEffect, useState} from 'react';

function Modal_name({modalClose, modalCheck}){
    const onCloseModal = (e) => {
        //console.log('e.target: ', e.target);
        //console.log('e.tarcurrentTargetget: ', e.currentTarget)
        if(e.target === e.currentTarget){
            modalClose();
        }
    }

    const [name, setName] = useState("");
    const [isValid, setIsValid] = useState(true);
    const handleNameChange = (e) => {
        setName(e.target.value);
        console.log('닉네임 변경: ', e.target.value);
    }

    const [check, setCheck] = useState("");
    const onClick = () => {
        /* api 연결하기
        fetch('api(/user/check/{nickname}', {
            method: "POST",
            body: JSON.stringify({
                nickName : name
            })
        })
        .then(res => res.json())
        .then(res => {
            if (res.isSuccess === true) {
                setCheck("사용 가능한 닉네임입니다.");
                setIsValid(true);
            }
            else {
                setCheck("사용 불가한 닉네임입니다.");
                setIsValid(false);
            }
        })
        */

        if (isValid === true) {
            setCheck("사용 가능한 닉네임입니다.");
        }
        else {
            setCheck("사용 불가한 닉네임입니다.");
        }
    }

    const ChangeName = () => {
        if (isValid) {
            /* api 연결하기
            fetch('api', {
                method: 'PATCH',
                body: JSON.stringify({
                    nickName: name
                })
            })
            .then(res => res.json())
            .then(res => {
                if (res.isSuccess === true){
                    window.alert(res.result)
                }
                else{
                    window.alert("오류가 발생하였습니다.")
                }
            })
            .catch(err => console.log(err))
            */
            modalClose();
        }
        else {
            window.alert("해당 닉네임을 사용할 수 없습니다.");
        }
    }

    return (
        <div className='modal_container' onClick={onCloseModal}>
            <div className='modal w-10/12 h-2/6 rounded-xl shadow-md px-8 py-4'>
                <h1>닉네임 중복 확인</h1>
                <div>
                <input className="w-40 border-b-2 mt-3 mr-1"
                            name="nickname"
                            value= {name}
                            onChange={handleNameChange}
                        />
                <button className='text-sm text-[#EF9F9F] rounded-full border border-[#EF9F9F] py-1 px-2'
                        onClick = {onClick}
                    >
                        중복 확인
                </button>
                </div>
                <p className='text-center py-5'>
                    {check}
                </p>
                <div className='flex justify-center'>
                    <button className='absolute bottom-5 bg-[#EF9F9F] rounded-full py-3 px-5 text-white'
                            onClick={ChangeName}
                    >
                        사용하기
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal_name;