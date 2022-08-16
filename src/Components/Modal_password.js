import { useState } from "react";

function Modal_password({modalClose, modalCheck}) {
    const onCloseModal = (e) => {
        console.log('e.target: ', e.target);
        console.log('e.tarcurrentTargetget: ', e.currentTarget)
        if(e.target === e.currentTarget){
            modalClose();
        }
    }

    const [cur_pass, setCur_pass] = useState("");
    const [new_pass, setNew_pass] = useState("");
    const [new2_pass, setNew2_pass] = useState("");

    const [state0, setState0] = useState(false);
    const [state1, setState1] = useState(false);
    const [state2, setState2] = useState(false);
    
    const [confirm_text, setText] = useState("");

    const handlePasswordType = (e) => {
        setCur_pass(() => {
            if (!cur_pass.visible) {
                return {type: 'text', visible: true};
            }
        })
    }
    //https://ji-u.tistory.com/6
    //https://hianna.tistory.com/302
    
    const handleCurChange = (e) => {
        setCur_pass(e.target.value);
        console.log('현재 비번: ', e.target.value);
    }
    const handleNewChange = (e) => {
        setNew_pass(e.target.value);
        console.log('새 비번: ', e.target.value);
    }
    const handleNew2Change = (e) => {
        setNew2_pass(e.target.value);
        console.log('새 비번 확인: ', e.target.value);
    }

    const onClick0 = () => {
        setState0((current) => !current)
    }
    const onClick1 = () => {
        setState1((current) => !current)
    }
    const onClick2 = () => {
        setState2((current) => !current)
    }

    const ChangePassword = () => {
        console.log("비밀번호 변경");

        if (new_pass.length === 0 || new2_pass.length === 0) {
            setText("비밀번호를 입력해주세요.") //window.alert("비밀번호를 입력해주세요.")
        }
        else if (new_pass === new2_pass) {
            fetch('api(/mypage/{userid}/password/edit)', {
                method : 'PATCH',
                headers : localStorage.getItem("login_token"),
                body : {
                    newPassword : new2_pass
                }
            })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))

            modalClose();
        }
        else {
            setText("비밀번호를 다시 확인해주세요.") //window.alert("비밀번호를 다시 확인해주세요.");
        }
    }

    return (
        <div className='modal_container' onClick={onCloseModal}>
            <div className='modal w-10/12 h-3/6 rounded-xl shadow-md px-8 py-4'>
                <h1 className="mb-7 mt-2 text-lg">비밀번호 변경</h1>
                <div>
                <input className="w-10/12 border-b-2 mt-3 mr-1"
                            name="cur_password"
                            placeholder="현재 비밀번호"
                            value= {cur_pass}
                            onChange={handleCurChange}
                            type = { state0 ? "text" : "password" }
                        />
                <button onClick={onClick0}>
                    {
                        state0 ?
                        <img src="/img/show.png" className="w-4"/>
                        :
                        <img src="/img/hide.png" className="w-4"/>
                    }
                </button> {/*눈 버튼 누르면 켜졌다 꺼졌다 하게, onClick 넣기*/}
                
                <input className="w-10/12 border-b-2 mt-3 mr-1"
                            name="new_password"
                            placeholder="새 비밀번호"
                            value= {new_pass}
                            onChange={handleNewChange}
                            type = { state1 ? "text" : "password" }
                        />
                <button onClick={onClick1}>
                    {
                        state1 ?
                        <img src="/img/show.png" className="w-4"/>
                        :
                        <img src="/img/hide.png" className="w-4"/>
                    }
                </button>

                <input className="w-10/12 border-b-2 mt-3 mr-1"
                            name="new2_password"
                            placeholder="비밀번호 확인"
                            value= {new2_pass}
                            onChange={handleNew2Change}
                            type = { state2 ? "text" : "password" }
                        />
                <button onClick={onClick2}>
                    {
                        state2 ?
                        <img src="/img/show.png" className="w-4"/>
                        :
                        <img src="/img/hide.png" className="w-4"/>
                    }
                </button>
                </div>

                <div className='flex justify-center mt-5'>
                    <p className='text-red-500'>
                        {confirm_text}
                    </p>
                </div>

                <div className='flex justify-center'>
                    <button className='absolute bottom-5 bg-[#EF9F9F] rounded-full py-3 px-5 text-white'
                            onClick={ChangePassword}
                    >
                        변경 완료
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Modal_password;