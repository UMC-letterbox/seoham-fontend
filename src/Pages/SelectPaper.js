
const LetterPaper = (props) => {
    
    return (
        <div className="flex flex-col items-center mx-5 my-2" >
            <button className="w-32 h-28 rounded-md bg-lime-200"> </button>
            <span> {props.name}</span>
        </div>
    )
};



const SelectPaper = () => {
    return (
        <div>
            <header>
                <h1 className="text-center font-bold text-lg">편지지 선택</h1>
            </header>
            <div className="flex flex-wrap justify-center items-center">
                <LetterPaper color="#F9E3E3" name="편지지1" />
                <LetterPaper color="#F9E3E3" name="편지지2" />
                <LetterPaper color="#F9E3E3" name="편지지3" />
                <LetterPaper color="#F9E3E3" name="편지지4" />
                <LetterPaper color="#F9E3E3" name="편지지5" />
                <LetterPaper color="#F9E3E3" name="편지지6" />
            </div>
        </div>
    )
}

export default SelectPaper;