import React, { memo } from "react";
const Title=()=>{
    console.log("Title Rendered");
    return <h1>Example of useCallback and React.Memo</h1>
}
export default memo(Title)