import ViewItem from "./ViewItem";

const Viewbox = ({ tagList }) => {
  return (
    <div className="m-2">
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
