import TagItem from "./TagItem";

const Tagbox = ({ tagList }) => {
  return (
    <div>
      {tagList.map((it) => (
        <TagItem key={it.id} {...it} />
      ))}
    </div>
  );
};

Tagbox.defaultProps = {
  tagList: [],
};

export default Tagbox;
