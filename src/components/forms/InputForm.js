import {React, createRef, useState} from 'react';

import {v4 as uuidv4} from 'uuid'

function InputForm({name, dispatch}) {
    const curRef = createRef()
    const [state, setState] = useState({cat: '', dog: ''})

    return (
        <form className={'d-flex border card p-2'}>
            <label>Add {name}</label>
            <input
                name={name}
                onChange={e => setState({...state, [name]: e.target.value})}
                type={"text"}
                value={state.name}
                ref={curRef}
                className={'mt-2 mb-2 p-2'}
            />
            <button
                type={"button"}
                className={'btn btn-button btn-primary col-4'}
                onClick={
                    () => dispatch({
                        type: 'add',
                        payload: {name, value: state[name], id: uuidv4()}
                    })
                }>
                Save
            </button>
        </form>
    );
}

export default InputForm;