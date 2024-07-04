import React from "react";

const Ternary = () => {
  const Interview = "Attend The Interview";
  return (
    <div>
      <h1>Ternary Example</h1>
      {Interview?.length > 0 ? <h1>Cracked</h1> : <h1>Rejected</h1>}
    </div>
  );
};

export default Ternary;
