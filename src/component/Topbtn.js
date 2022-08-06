import {useEffect, useState} from "react";


function Topbtn() {
    /*
    const [ScrollY, setScrollY] = useState(0);  // 스크롤값을 저장하기 위한 상태
    const handleFollow = () => {
      setScrollY(window.pageYOffset); // window 스크롤 값을 ScrollY에 저장
    }
  
    useEffect(() => {
      console.log("ScrollY is ", ScrollY); // ScrollY가 변화할때마다 값을 콘솔에 출력
    }, [ScrollY])
  
    useEffect(() => {
      const watch = () => {
        window.addEventListener('scroll', handleFollow);
      }
      watch(); // addEventListener 함수를 실행
      return () => {
        window.removeEventListener('scroll', handleFollow); // addEventListener 함수를 삭제
      }
    })
    */

    const [ScrollY, setScrollY] = useState(0);
    const [BtnStatus, setBtnStatus] = useState(false); // 버튼 상태
    
    const handleFollow = () => {
      setScrollY(window.pageYOffset);
      if(ScrollY > 100) {
        // 100 이상이면 버튼이 보이게
        setBtnStatus(true);
      } else {
        // 100 이하면 버튼이 사라지게
        setBtnStatus(false);
      }
    }
  
    const handleTop = () => {  // 클릭하면 스크롤이 위로 올라가는 함수
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      setScrollY(0);  // ScrollY 의 값을 초기화
      setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
    }
  
    useEffect(() => {
      const watch = () => {
        window.addEventListener('scroll', handleFollow)
      }
      watch();
      return () => {
        window.removeEventListener('scroll', handleFollow)
      }
    })

    return (
        <button 
            className={BtnStatus ? "topBtn active" : "topBtn"} // 버튼 노출 여부
            onClick={handleTop}  // 버튼 클릭시 함수 호출
        >
            {/*<img src="/img/upload.png" className="w-10 h-10"/>*/}
            <span>up</span>
        </button>
    );

}

export default Topbtn;