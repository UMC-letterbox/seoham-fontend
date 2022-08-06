const handleNextButtonClick = (nextType: "prev" | "next") => {
  if (!horizontalScrollRef.current) return;
  if (nextType === "prev") {
    horizontalScrollRef.current.scrollTo({
      left:
        horizontalScrollRef.current.scrollLeft -
        horizontalScrollRef.current.offsetWidth,
      behavior: "smooth",
    });
  } else {
    horizontalScrollRef.current.scrollTo({
      left:
        horizontalScrollRef.current.scrollLeft +
        horizontalScrollRef.current.offsetWidth,
      behavior: "smooth",
    });
  }
};

export default handleNextButtonClick;
