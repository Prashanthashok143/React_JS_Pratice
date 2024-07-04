import React from 'react'

const LazyApp = () => {
  return (
    <div className="border d-flex flex-column w-75 m-auto p-3 mt-5" style={{backgroundColor:"gray",color:"white"}} >
     UserName
    <input type="text" name='username'/>
    FullName
    <input type="text" name='firstname'/>
    Age
    <input type="number" name='age'/>
    <button>SubmitData</button> 
     </div>
  )
}

export default LazyApp