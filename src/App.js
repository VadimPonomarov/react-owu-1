import {React, useReducer} from "react";

import Counter from './components/counter/Counter'

const INC = 'inc'
const DEC = 'dec'
const RES = 'res'

const reducer = (state, action) => {
    console.log(state)
    switch (action.type) {
        case 'inc':
            return {...state, [action.payload.hhh]: {name: ',jhv'}}
        case "dec":
        case "res":
    }
}


function App() {
    const [state, dispatch] = useReducer(reducer, {})

    return (
        <Counter number={3}/>
    )
}

export default App;
