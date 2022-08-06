import SenderItem from "./SenderItem";

const Senderbox = ({ tagList }) => {
  return (
    <div>
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
