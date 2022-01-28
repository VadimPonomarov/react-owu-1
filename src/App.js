import {React, useReducer} from "react";

import AppDetails from './components/appdetails/AppDetails'
import {reducer} from './servises/reducer'


function App() {
    const [state, dispatch] = useReducer(reducer, [])

    return (
        <AppDetails dispatch={dispatch} state={state}/>
    )
}

export default App;
