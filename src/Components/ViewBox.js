import ViewItem from "./ViewItem";

const Viewbox = ({ tagList }) => {
  return (
    <div>
      {tagList.map((it) => (
        <ViewItem key={it.id} {...it} />
      ))}
    </div>
  );
};

Viewbox.defaultProps = {
  tagList: [],
};

export default Viewbox;
