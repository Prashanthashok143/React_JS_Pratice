import React from "react";

const Show = () => {
  const [isHide, setIsHide] = React.useState(false);
  const Data = () => {
    setIsHide(!isHide);
  };
  return (
    <div className="w-border w-75 m-auto p-3 mt-5" style={{backgroundColor:"gray",color:"white"}} >
      <button onClick={Data}>{isHide ? "Hide" : "Show"}</button>
      {isHide ? <h1>Hide The text</h1> : null}
    </div>
  );
};
export default Show;