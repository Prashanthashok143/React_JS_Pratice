import React, { memo } from 'react'

const ChildComp = ({name}) => {
    console.log("Child")
  return (
    <div>
  <h1>Child Component created by {name}</h1>
    </div>
  )
}

export default memo(ChildComp)