import React from 'react'
import { useLocation, useParams } from 'react-router-dom';


const Blogs = () => {
  const {id,name}=useParams();


  const query=useLocation();
  const Data=new URLSearchParams(query.search)
 const values= Data.get("age")
  return (
    <div>
        <h2>Name : {name}</h2>
       <h2>Phone number : {id}</h2>
        <h2>Age : {values}</h2>
        <div>

        </div>
        
    </div>
  )
}

export default Blogs;