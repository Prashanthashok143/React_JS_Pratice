import React from 'react'

const Map = () => {
    const Items=[{
        "id":1,
        "name":"Prashanth",
        "age":22,
    },
    {
        "id":2,
        "name":"Ashok",
        "age":42,
    },
    {
        "id":1,
        "name":"Maheshwari",
        "age":40,
    }]
  return (
    <div>
     <h1>Map Example</h1>   
     {
        Items.map(({id,name,age})=>(
        <ul key={id}>
         <li>Id : {id}</li>
         <li>Name : {name}</li>
         <li>Age : {age}</li>   
        </ul>    
        ))
     }
    </div>
  )
}

export default Map