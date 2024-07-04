import React from 'react'

const ForLoop = () => {
    const lists = [1, "Prashanth", 3];
    const Listitems = [];
    for (let index = 0; index < lists.length; index++) {
        Listitems.push(
            <li>{lists[index]}</li>
        );
        
    }
      return (
       <div>
        <h1>For Loop Example</h1>
       {Listitems}
       </div>
      );
}

export default ForLoop;
