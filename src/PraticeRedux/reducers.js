let Value={
    counter:0
}


export const counterReducer=(state=Value,action)=>{

    if(action.type === "INCREMENT"){
        return{
            ...state,counter:state.counter+1,
        }
    }
    if(action.type === "DECREMENT"){
        return{
            ...state,counter:state.counter-1,
        }
    }
   return state;
}