import React, { useState } from 'react'

const SubmitData = () => {
    const[errormsg,setErrormsg]=useState("");
    const[data,setData]=useState([]);
   const[formData,setFormData]=useState([{
     username:"",
     firstname:"",
     age:"",
   }])
   const changeValue=(e)=>{
    setFormData(e.target.value);
    const { name, value } = e.target;
    setFormData({...formData, [name]: value });
   }
   const SubmitData=()=>{
    setFormData({
        username:"",
        firstname:"",
        age:"",
      })
      setData([...data],{text:formData.username})
      const{username,firstname,age}=formData;
      
        setErrormsg(`username:${username}
        
        fullname:${firstname}
        age:${age}`)
        console.log(formData)
      
   }
  return (
    <div className="border d-flex flex-column w-75 m-auto p-3 mt-5" style={{backgroundColor:"gray",color:"white"}} >
     UserName
    <input type="text" name='username' value={formData.username} onChange={changeValue}/>
    FullName
    <input type="text" name='firstname' value={formData.firstname} onChange={changeValue}/>
    Age
    <input type="number" name='age' value={formData.age} onChange={changeValue}/>
    <button onClick={SubmitData}>SubmitData</button>    
        
<h1 className='d-flex flex-row'><p>{errormsg}</p></h1>


    </div>
  )
}

export default SubmitData