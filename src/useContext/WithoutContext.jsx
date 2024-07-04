import React from 'react'
const WithoutContext = () => {
    const name="Prashanth"
  return (
    <div>
      <h1>{name}  </h1>
   <WithoutContext1 name={name}/>
    </div>
  )
}

export default WithoutContext;




 const WithoutContext1 = ({name}) => {
  return (
    <div>
        <h2>withoutContext1</h2>
        <WithoutContext2 name={name}/>
    </div>
  )
}

const WithoutContext2 = ({name}) => {
    return (
      <div>
        <h2>withoutContext2</h2>
        <WithoutContext3 name={name}/>
      </div>
    )
  }

  const WithoutContext3= ({name}) => {
    return (
      <div>
        <h2>withoutContext3 {name}</h2></div>
    )
  }

