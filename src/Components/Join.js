import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Join() {
  const navigate = useNavigate();
  const [allCheck, setAllCheck] = useState(false);
  const [SeohamCheck, setSeohamCheck] = useState(false);
  const [useCheck, setUseCheck] = useState(false);
  const [otherCheck, setOthercheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);

  const allBtnEvent = () => {
    if (allCheck === false) {
      setAllCheck(true);
      setSeohamCheck(true);
      setUseCheck(true);
      setOthercheck(true);
      setMarketingCheck(true);
    } else {
      setAllCheck(false);
      setSeohamCheck(false);
      setUseCheck(false);
      setOthercheck(false);
      setMarketingCheck(false);
    }
  };

  const SeohamBtnEvent = () => {
    if (SeohamCheck === false) {
      setSeohamCheck(true);
    } else {
      setSeohamCheck(false);
    }
  };

  const useBtnEvent = () => {
    if (useCheck === false) {
      setUseCheck(true);
    } else {
      setUseCheck(false);
    }
  };

  const otherBtnEvent = () => {
    if (otherCheck === false) {
      setOthercheck(true);
    } else {
      setOthercheck(false);
    }
  };

  const marketingBtnEvent = () => {
    if (marketingCheck === false) {
      setMarketingCheck(true);
    } else {
      setMarketingCheck(false);
    }
  };

  useEffect(() => {
    if (
      SeohamCheck === true &&
      useCheck === true &&
      otherCheck === true &&
      marketingCheck === true
    ) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [SeohamCheck, useCheck, otherCheck, marketingCheck]);

  const onClick = () => {
    if (SeohamCheck === true && useCheck === true) {
      navigate("/create");
    } else {
      alert("필수에 체크해주세요");
    }
  };

  return (
    <div class="rounded-xl min-h-screen bg-[#EF9A9A]">
      <div class="py-5 px-5 m-5">
        <label class="text-l text-white buri">약관동의</label>
        <div>
          <div class="text-white text-sm my-5 border-b-2 border-white">
            <input
              class="mx-2"
              type="checkbox"
              id="all-check"
              checked={allCheck}
              onChange={allBtnEvent}
            />
            <label for="all-check">약관 전체동의</label>
          </div>
          <div class="py-1">
            <div class="text-white text-xs my-3">
              <input
                class="mx-2"
                type="checkbox"
                id="check1"
                checked={SeohamCheck}
                onChange={SeohamBtnEvent}
              />
              <label for="check1">
                <span>(필수)</span>서함 서비스 이용 약관
              </label>
            </div>
            <div class="text-white text-xs my-3">
              <input
                class="mx-2"
                type="checkbox"
                id="check2"
                checked={useCheck}
                onChange={useBtnEvent}
              />
              <label for="check2">
                <span>(필수)</span> 개인정보 수집 및 이용 동의서
              </label>
            </div>
            <div class="text-white text-xs my-3">
              <input
                class="mx-2"
                type="checkbox"
                id="check3"
                checked={otherCheck}
                onChange={otherBtnEvent}
              />
              <label for="check3">
                <span>(선택)</span>제 3자 정보 제공 동의
              </label>
            </div>
            <div class="text-white text-xs my-3">
              <input
                class="mx-2"
                type="checkbox"
                id="check4"
                checked={marketingCheck}
                onChange={marketingBtnEvent}
              />
              <label for="check4">
                <span>(선택)</span>E-mail 및 SMS 광고성 정보 수신동의
              </label>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={onClick}
        class="py-1 m-auto joinBtn block text-center bg-white border rounded-full text-red-300 cursor-pointer w-3/5 dark:bg-[#48484A] dark:text-[#F47C7C]"
      >
        다음
      </button>
    </div>
  );
}

export default Join;
