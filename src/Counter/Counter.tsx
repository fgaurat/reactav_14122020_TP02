import React, { useReducer } from 'react'

const initialState = {
    count:0

}

function reducer(state:any,action:any){

    switch (action.type) {
        case 'INCREMENT':
            return {count:state.count+1}
        case 'DECREMENT':
            return {count:state.count-1}
        default:
            throw new Error("Erreur !");
    }

}


export default function Counter() {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            {state.count}
            <button onClick={ ()=> dispatch( {type:'INCREMENT'} )}>+</button>

            <button onClick={ ()=> dispatch({type:'DECREMENT'})}>-</button>
            
        </div>
    )
}
