import ViewItem from "./ViewItem";

const Viewbox = ({ tagList }) => {
  return (
    <div className="flex flex-row flex-wrap mt-7">
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
