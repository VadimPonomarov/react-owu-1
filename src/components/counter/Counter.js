import React from 'react';

function Counter({index, state, dispatch}) {

    return (
        <div className={'d-flex border m-2 align-items-center justify-content-center'}>
            <h1 className={'col-2 border text-center m-2'}>
                {state[`counter${index}`] ? state[`counter${index}`] : 0}
            </h1>
            <button
                className={'btn btn-button btn-primary col-2 m-2'}
                onClick={() => dispatch({type: 'inc', payload: {index}})}
            >
                Increment
            </button>
            <button
                className={'btn btn-button btn-primary col-2 m-2'}
                onClick={() => dispatch({type: 'dec', payload: {index}})}
            >
                Decrement
            </button>
            <button
                className={'btn btn-button btn-primary offset-1 col-2 m-2'}
                onClick={() => dispatch({type: 'res', payload: {index}})}
            >
                Reset
            </button>
        </div>
    )
}

export default Counter;