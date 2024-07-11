import React, { useRef } from 'react'

const Example5 = () => {
    const divRef=useRef(null);
    const parentRef=useRef(null);
    const childRef=useRef(null);

    const addChild=()=>{
    
    const newChild=document.createElement("h1");
    newChild.innerText="Iam Child Element";
    newChild.style.background="black";
    newChild.style.color="white";
    divRef.current.appendChild(newChild)
    }

    const removeChild=()=>{
        if(parentRef?.current && childRef?.current){
            parentRef?.current?.removeChild(childRef.current)
        }
    }
    
  return (
    <div ref={divRef}>
    <h1>Parent Element</h1>
    <button onClick={addChild}>Add Child</button>  
    <div ref={parentRef}>
        <h2 ref={childRef}>One Child</h2>
        <button onClick={removeChild}>Remove Child</button>
    </div>
   
    </div>
  )
}

export default Example5