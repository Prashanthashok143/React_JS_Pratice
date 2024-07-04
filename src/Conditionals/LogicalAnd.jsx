import React from 'react'

const LogicalAnd = () => {
    const Interview = "Attend The Interview";
  return (
    <div>
        <h1>LogicalAnd Example</h1>
        {
            Interview?.length>0 && <h1>Success</h1>
        }
    </div>
  )
}

export default LogicalAnd