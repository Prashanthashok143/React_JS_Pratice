import React, { useCallback, useState } from 'react';
import Button from './Button';
import Count from './Count';
import Title from './Title';



const ParentComponent = () => {
    const[age,setAge]=useState(0);
    const[salary,setSalary]=useState(1000)

    const ageIncrement=useCallback(()=>{
        setAge(age+1)
    },[age]);

    const salaryIncrement=useCallback(()=>{
        setSalary(salary+1000)
    },[salary])
  return (
    <div>
   <Title/>
   <Count text={"age"} number={age}/>
   <Button clickHandler={ageIncrement}>Increment Age</Button>
   <Count text={"salary"} number={salary}/>
   <Button clickHandler={salaryIncrement}>Increment Salary</Button>


    </div>
  )
}

export default ParentComponent;