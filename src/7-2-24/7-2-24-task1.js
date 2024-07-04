import React from "react";
const h2colors={color:"blue",backgroundColor:"yellow",display:"inline-block" }




class Praticesdng extends React.Component{
    
    
    render()
    {
     return(
         <div>
         
             <h1>Namaste</h1>
             <h1>Prashanth</h1>
             <h1>{this.props.created}</h1>
         </div>
     )
    }
 
 }
 export default Praticesdng;



export function Funcomp(props)
{
return (
    
    <div>
        <h1 style={{color:"red",backgroundColor:"Green",display:"inline-block"}}>Hello function</h1>
        <h2 style={h2colors}>My name is {props.name} age is {props.age}</h2>
        
    </div>
)    
}

export function Extra({name,age,village})
{
    return(
        <div>
       <h1 className="unknown">  {name} {age} {village} </h1>
        </div>
    )
}

export class Pratice1 extends React.Component{
    render(){
        return <h1>First Component</h1>
    }
}

export class Pratice2 extends React.Component{
    render(){
        return (
            <>
            Second Component 
            </>
        )
    }
}

export class Pratice3 extends React.Component{
  
    render(){
        return(
            <>
            Third Component  {this.props.name}
            <Pratice1/>
            </>
        )
    }
}

export function Pratice5({name}){
    return(
        <Pratice3 name={name}/>
    )
}

export function Pratice4(){
    return (
        <Pratice2/>
    )
}
