import ViewItem from "./ViewItem";

// 보낸이별 편지 조회로 받는 값 : postIdx(편지id), sender, date, tagIdx, tagName, tagColor, letterIdx(편지지?)
const Viewbox = ({ tagList }) => {
  console.log(tagList)
  return (
    <div className="flex flex-row justify-center flex-wrap mt-7"> {/* 가운데 띙 하고 남아서 별로인거 같기도 */}
      {tagList?.map((it) => (
        <ViewItem key={it.id} {...it} />
      ))}
    </div>
  );
};

Viewbox.defaultProps = {
  tagList: [],
};

export default Viewbox;
