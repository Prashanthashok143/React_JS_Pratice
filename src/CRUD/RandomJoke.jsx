import axios from "axios";
import React, { useState } from "react";

const RandomJoke = () => {
  const [tagline, setTagline] = useState("");
  const [punch,setPunch]=useState("");

  const randomJoke = () => {
    axios
      .get("https://official-joke-api.appspot.com/random_joke")
      .then((res) =>{
       const {setup,punchline}=res?.data;
       setTagline(setup);
       setPunch(punchline)
      }
    )
      .catch((error) => console.log(error));
  };

  return (
    <div>
        <h1>RandomJoke Generator Using API</h1>
        <h1 className="m-5"  style={{color:"red"}}>{tagline} </h1>
        <h2 className="m-5" style={{color:"blue"}}>{punch}</h2> 
      <button className="btn btn-success m-5" onClick={randomJoke}>Random Joke</button>
    </div>
  );
};

export default RandomJoke;
