import React, { useRef } from 'react'

const Example4 = () => {
    const h1Ref=useRef("Iam SP");
    const h2Ref=useRef(null);
    const handleName=()=>{
        h1Ref.current.innerText=" I am Prashanth Shanigarapu"
    }
  const handleElement=()=>{
    h2Ref.current.innerHTML="<h2>Iam SP</h2>"
  }
  return (
    <div>
        <div ref={h2Ref}>
       {h2Ref.current}
        </div>
        <h1 ref={h1Ref}>{h1Ref.current}</h1>
        <button onClick={handleName}>Change</button>
        <button onClick={handleElement}>Add element</button>
    </div>
  )
}

export default Example4