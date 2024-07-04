import React, { useState } from "react";
import usePageTitle from "./usePageTitle";

const PageTitle = () => {
  const [count, setCount] = useState(0);
     usePageTitle(count)
  
  return (
    <div>
      <button className="btn btn-success m-5" onClick={()=>setCount(count+1)}>Counter - {count}</button>
    </div>
  );
};

export default PageTitle;
