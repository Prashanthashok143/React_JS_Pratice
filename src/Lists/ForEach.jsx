import React from "react";

const ForEach = () => {
  const items = ["a", "b", "c"];
  const itemList = [];
  items.forEach((item) => itemList.push(<li key={item}>{item}</li>))
;
  return (
    <div>
      <h1>ForEach</h1>
      {itemList}
    </div>
  );
};

export default ForEach;

export const ForEachEx = () => {
    const lists = ["a", "b", "c"];
    const Listitems = [];
  return (
    <div>
        <h1>For Each 2</h1>
   { 
   lists.forEach((item) => 
    Listitems.push(<li key={item}>{item}</li>))
   }
      {Listitems}
    </div>
  );
};
