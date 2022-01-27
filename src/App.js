import {React, useReducer} from "react";

import counterGenerator from './servises/counter_generator.service'

const reducer = (state, action) => {
    const CURRENT = `counter${action.payload.index}`

    switch (action.type) {
        case 'inc':
            return {...state, [CURRENT]: state[CURRENT] + 1}
        case "dec":
            return {...state, [CURRENT]: state[CURRENT] - 1}
        case "res":
            return {...state, [CURRENT]: 0}
        default:
            return new Error('Error')
    }
}

function App() {

    const initialState = {}
    const [state, dispatch] = useReducer(reducer, initialState)
    //Генератор каунтеров
    const counterArr = counterGenerator(3, initialState, state, dispatch)


    return (
        counterArr.map((item, index) => {
            return (
                <div key={index}>
                    {item}
                </div>
            )
        })

    )
}

export default App;
