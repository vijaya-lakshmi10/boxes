const Box = (props) => {
  //  Write your code here.
  const { divClassName, paraClassName, boxName } = props;
  return (
    <div className={`${divClassName}`}>
      <p className={`${paraClassName}`}>{boxName}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="box-container">
    <h1 className="box-heading">Boxes</h1>
    <div className="boxes-sub-container">
      <Box divClassName="box-container1" paraClassName="desc" boxName="Small" />
      <Box
        divClassName="box-container2"
        paraClassName="desc"
        boxName="Medium"
      />
      <Box divClassName="box-container3" paraClassName="desc" boxName="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
