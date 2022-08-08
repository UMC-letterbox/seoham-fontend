import SenderItem from "./SenderItem";

const Senderbox = ({ tagList }) => {
  return (
    <div>
      <div className="flex justify-end">
        <button className="mx-10">
          <img src="/img/up-down.png" className="w-5 h-5" onClick={()=>{console.log("정렬 버튼")}}/>
        </button>
      </div>
      {tagList.map((it) => (
        <SenderItem key={it.id} {...it} />
      ))}
    </div>
  );
};

Senderbox.defaultProps = {
  tagList: [],
};

export default Senderbox;
