import React, { useEffect, useState } from 'react'

const ApiEx1 = () => {
  const[data,setData]=useState([])
  const[isError,setIsError]=useState({status:false,msg:""})
  const[loading,setLoading]=useState(false)
   
    const URL="https://jsonplaceholder.typicode.com/users";
   
    const fetchData=async(url)=>{
      
    setIsError({status:false,msg:""})
    setLoading(true)
      try {
         
          setIsError({status:false,msg:""})
          const response=await fetch(url);
        const result=await response.json();
        setData(result);
        setLoading(false);
        if(response.status===404){
          throw new Error("Data not found")
        }
        } catch (error) {
          setLoading(false)
          setIsError({status:true,msg: error.message || "Data not fetched"})
        }
    }
    useEffect(()=>{
      fetchData(URL)
  },[])
   if(isError?.status){
    return <h1>{isError?.msg}</h1>
   }
    if(loading){
      return(
        <h1>loading ..........</h1>
      )
    }
  return (
    <div>
     <h1>Data fetching</h1>
     <ol>
     {
        data.map(({id,name})=>(
         <li key={id}>{name}</li>   
        ))
     } </ol>  
    </div>
  )
}

export default ApiEx1