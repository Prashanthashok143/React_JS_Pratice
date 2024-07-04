import axios from "axios";
import React, {  useState } from "react";
import "./ApI.css"

const API = () => {
  const [data, setData] = useState([]);
  const[text,setText]=useState("")
  // useEffect(() => {
  //   handleBackendData();
  // },[]);
  const GetDAta=()=>{
   if(text===""){
     alert("Enter the Category you want")
   }
   else{
    handleBackendData();
   }
  }
  const handleBackendData = () => {
    const textData=text.trim().toLowerCase();

    axios

      .get(`https://fakestoreapi.com/products/category/${textData}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <>
    <div className="d-flex justify-content-center">
      <input className="form-control w-25"  type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
      <button className="btn btn-primary" onClick={GetDAta}>GetData</button>
      
    </div>
    <div className="card-container">
  
        {data.map(({ id,title,image,price,rating}) => (
          <div className="card" key={id}>
          <h2 className="card-title">{title}</h2>  
        <img src={image} alt="imagespic" height={100} width={100}/>
          <p className="card-text">price: <b>{price} </b></p> 
          <p>Rating: <b> {rating.rate}</b></p> 
          <p>Count :<b> {rating.count}</b></p>
          <button className="btn btn-success">GetItem</button>
          

        
                
        
          </div>
    
        ))}
     
    </div>
    </>
  );
};

export default API;




