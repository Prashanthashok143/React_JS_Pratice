import React from 'react'

const IfStatement = () => {
 let Interview=true;   

if(Interview){
    return <CrackedInteriview/>
}
else{
    return <InterviewRejected/>
}
}

export default IfStatement;

const InterviewRejected=()=>{
    return <h1>Rejected Interview 😥</h1>
}
const CrackedInteriview=()=>{
    return <h1>Cracked the Interview 🥳</h1>
}