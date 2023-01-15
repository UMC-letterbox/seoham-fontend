import { ReactComponent as Tag } from '../assets/Icon_tag_.svg'
import { ReactComponent as Date } from '../assets/Icon_date_.svg'
import { ReactComponent as Sender } from '../assets/Icon_sender_.svg'


//비활성화 색상 #989898
//활성화 색상 #EF9F9F
const MyButton = ({ text, onClick, isClick }) => {
  console.log('isClick', isClick);

  let current_color = ''
  if (isClick){ current_color = '#EF9F9F' //활성화
  }
  else{ current_color = '#989898' //비활성화
  }

  return (
    <button
      className={`cursor-pointer rounded px-5 py-3
        ${isClick ? 'text-rose-300 border-b-4 border-rose-300' : 'text-zinc-400'}
      `}
      onClick={onClick}
    >
     <div className='flex items-center'> 
      {text}
      &nbsp;
      {text==="태그별" && <Tag fill={current_color}/>}
      {text==="날짜별" && <Date fill={current_color}/>}
      {text==="보낸이별" && <Sender fill={current_color}/>}
      </div>
    </button>
  );
};

export default MyButton;
