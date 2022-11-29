import '../css/paperModal.css';
import SelectPaper from '../Pages/SelectPaper';

const PaperModal = ({setSelected, selected, setIsOpen}) => {
  
  return (
    <div className="papermodal">
      {/* <button onClick ={() => {setIsOpen(false)}}> 닫힘</button> */}
      <SelectPaper setSelected={setSelected} selected={selected} setIsOpen={setIsOpen}/>
    </div>
  )
}
export default PaperModal;