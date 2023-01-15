function SettingModeBtn({text, textClassName}){
    let isClick = true;
    const currentMode = localStorage.getItem('theme');
    //console.log("textClassName? ", textClassName);
    currentMode == textClassName ? isClick = true : isClick = false

    const onClick = () => {
        localStorage.setItem('theme', textClassName);
        //setFont(textClassName);
        console.log("클릭했니?", textClassName)
        window.location.replace("/setting")
    }

    return(
        <button onClick={onClick}>
            <div className="flex justify-between items-center w-[260px] border-b border-[#989898] py-3">
                <p>{text}</p>
                <div className="flex justify-center items-center rounded-full border border-[#989898] w-[15px] h-[15px]">
                    {
                        isClick ? 
                        <div className="rounded-full bg-[#989898] w-[11px] h-[11px]"></div>
                        : null
                    }
                </div>
            </div>
        </button>
    )
}

export default SettingModeBtn;