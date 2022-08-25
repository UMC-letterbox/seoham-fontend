import {useState} from 'react';
import Modal_password from './Modal_password';

function ModalContainer_pass({password}){
    const [modalOpen, setModalOpen] = useState(false);
    const [state, setState] = useState(true);
        //그냥 변수 tf로 하려고 했는데, false면 state 변경되는 부분이 없어서 렌더링이 새로 안돼서 어쩔수없이..
    const modalClose = () => {
        console.log("닫기");
        setModalOpen((modalOpen) => !modalOpen);
    }
    const modalCheck = () => {
        console.log("확인");
        setModalOpen((modalOpen) => !modalOpen);
    }

    let tf = null;
    const onClick = () => {
        //이렇게 바꾸고 갑자기 오류 alert가 뭘 작성할때마다 2번씩 뜸 - input value, onchange에 state를 적어놔서 그런듯(적을 때마다 리렌더링)
        fetch('https://www.duke0410.shop/mypage/password/check', {
            method: 'POST',
            headers: {
                Authorization: localStorage.getItem("login_token"),
                "Content-Type": "application/json",   
            },
            body: JSON.stringify({
                password : password,
            }),
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if(res.isSuccess){
                setModalOpen((modalOpen) => !modalOpen);
                setState(true);
            }
            else{
                setState(false);
            }
        }) //여기에 true,false를 받아서 변수에 넣어두자
        .catch(err => console.log(err))    
        

        // 이 부분이 다 then 안으로 들어가면 될듯.
        /*tf = true;
        if (tf) {
            setModalOpen((modalOpen) => !modalOpen);
            setState(true);
        }
        else{
            setState(false);
        }*/
    }

    return(
        <div className='w-full'>
            <button className="rounded-full border border-2 border-[#EF9F9F] w-16 text-[#EF9F9F]" onClick={onClick}>
                변경
            </button>
            {
                state ?
                modalOpen && <Modal_password modalClose={modalClose} modalCheck={modalCheck}/>
                :
                window.alert("비밀번호를 확인해주세요.")
            }
        </div>
    );
}

export default ModalContainer_pass;
