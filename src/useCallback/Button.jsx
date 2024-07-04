import React from 'react';


const Button = ({ clickHandler, children }) => {
 console.log(` ${children} is rendered`);
  return (
  <button onClick={clickHandler}>{children}</button>
);
};
export default React.memo(Button);
