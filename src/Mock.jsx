import React from "react";

const Mock = () => {

    const items = ['Item 1', 'Item 2', 'Item 3'];
    // const itemElements = [];
  
    for (let i = 0; i < items.length; i++) {
      return <li key={i}>{items[i]}</li>
    }
  

};
export default Mock;