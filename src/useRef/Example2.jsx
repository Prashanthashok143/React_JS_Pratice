import React, {  useRef} from 'react'

const Example2 = () => {
    const username=useRef(null); 
    const GetData=()=>{
        console.log(username)
        console.log(username?.current?.name)
        console.log(username?.current?.value)
  }
   
  return (

    <div>
     <input ref={username} type="text" name="username" id="username"/> 
      <h1>{username?.current?.value}</h1> 
      <h1>{username?.current?.name}</h1>
     <button onClick={GetData}>Button</button>  
    </div>
  )
}

export default Example2