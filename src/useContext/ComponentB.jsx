import React, { useContext } from "react";
import { ComponentAvalues } from "./ComponentA";

const ComponentB = () => {
  const { email, password, setEmail, setPassword } =
    useContext(ComponentAvalues);

  return (
    <div>
      <input
        className="from-control w-25"
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="from-control w-25"
        type="password"
        name=""
        id="email"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
};

export default ComponentB;
