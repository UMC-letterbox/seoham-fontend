const MyHeader = ({ headText, leftChild, rightChild }) => {
  return (
    <header class=" py-5 flex items-center">
      <div class="w-1/4 justify-start">{leftChild}</div>
      <div class="w-2/4 justify-center text-ceneter">{headText}</div>
      <div class="w-1/4 justify-end">{rightChild}</div>
    </header>
  );
};

export default MyHeader;
